import React, { useContext, useEffect, useState } from 'react';
import { CurrentAddressContext, SignerContext } from '../hardhat/SymfoniContext';
import { getChallengeToken, getUserMe, signChallengeAndVerify } from './auth-provider';

interface Props { }

interface AuthContext {
    authToken?: string
    user?: User
    logOut?: () => void
}
interface Address {
    active: boolean,
    address: string
}
interface User {
    addresses: Address[]
    id: number
    name: string
    uuid: string
}

export const AuthContext = React.createContext<AuthContext>({})

export const Auth: React.FC<Props> = ({ ...props }) => {
    const [signer] = useContext(SignerContext)
    const [address] = useContext(CurrentAddressContext)
    const [authToken, setAuthToken] = useState<string>();
    const [user, setUser] = useState<User>();

    // get auth token
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            if (address && signer) {
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
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [address, signer])

    // get user if authToken
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            if (authToken) {
                const me = await getUserMe(authToken)
                if (subscribed) {
                    setUser(me)
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

    return (
        <AuthContext.Provider value={{ authToken, user, logOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}