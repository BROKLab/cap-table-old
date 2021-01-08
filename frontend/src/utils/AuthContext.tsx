import { ethers } from 'ethers';
import { validateNorwegianIdNumber } from 'norwegian-national-id-validator';
import React, { useContext, useEffect, useState } from 'react';
import { CurrentAddressContext, SignerContext } from '../hardhat/SymfoniContext';
import { AuthProviderUser, GetBrregUnclaimedResponse, getChallengeToken, getUserMe, signChallengeAndVerify, unclaimed as _unclaimed } from './auth-provider';

interface Props { }

interface AuthContext {
    authToken?: string
    user?: AuthProviderUser
    logOut?: () => void
    unclaimed?: (contract: string, protocol: string, uuidHash: string) => Promise<GetBrregUnclaimedResponse>
    resolveAddressOrUUID?: (contract: string, protocol: string, uuidOrAddress: string) => Promise<string>
}

export const AuthContext = React.createContext<AuthContext>({})

export const Auth: React.FC<Props> = ({ ...props }) => {
    const [signer] = useContext(SignerContext)
    const [address] = useContext(CurrentAddressContext)
    const [authToken, setAuthToken] = useState<string>();
    const [user, setUser] = useState<AuthProviderUser>();

    // get auth token
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            if (address && signer) {
                try {
                    if (process.env.NODE_ENV === "development") {
                        const authToken = localStorage.getItem("authToken")
                        if (authToken) {
                            return setAuthToken(authToken)
                        }
                    }
                    const challengeToken = await getChallengeToken(address);
                    const authToken = await signChallengeAndVerify(challengeToken, signer)
                    if (subscribed && authToken) {
                        setAuthToken(authToken)
                        if (process.env.NODE_ENV === "development") {
                            localStorage.setItem("authToken", authToken)
                        }
                    }
                } catch (error) {
                    if (process.env.NODE_ENV === "development" && subscribed && !authToken) {
                        localStorage.removeItem("authToken")
                    }
                }
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [address, signer, authToken])

    // get user if authToken
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            if (authToken) {
                try {
                    const me = await getUserMe(authToken)
                    if (subscribed && me) {
                        setUser(me)
                    } else {
                        throw Error("User not found")
                    }
                } catch (error) {
                    console.log()
                    if (process.env.NODE_ENV === "development") {
                        localStorage.removeItem("authToken")
                    }
                }
            }
            if (subscribed) {
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [authToken])

    const logOut = () => {
        setAuthToken(undefined)
        setUser(undefined)
        if (process.env.NODE_ENV === "development") {
            localStorage.removeItem("authToken")
        }
    }
    // Will return address if address or resolve UUID 
    const resolveAddressOrUUID = async (
        contract: string,
        protocol: string,
        uuidOrAddress: string
    ) => {
        if (!authToken) {
            throw Error("Please authenticate before running this.")
        }
        if (uuidOrAddress.substr(0, 2) === "0x") {
            if (ethers.utils.isAddress(uuidOrAddress)) {
                return uuidOrAddress
            }
        }
        if (validateNorwegianIdNumber(uuidOrAddress)) {
            const res = await _unclaimed(authToken, contract, protocol, ethers.utils.keccak256(ethers.utils.id(uuidOrAddress)))
            if (res) {
                return res.address
            }
        }
        throw Error("Could not resolve Address or UUID")
    }
    const unclaimed = (
        contract: string,
        protocol: string,
        uuidHash: string
    ) => {
        if (!authToken) {
            throw Error("Please authenticate before running this.")
        }
        return _unclaimed(authToken, contract, protocol, uuidHash)
    }

    return (
        <AuthContext.Provider value={{ authToken, user, logOut, unclaimed, resolveAddressOrUUID }}>
            {props.children}
        </AuthContext.Provider>
    )
}