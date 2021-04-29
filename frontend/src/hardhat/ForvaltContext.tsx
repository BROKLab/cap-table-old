/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { providers, Signer, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Web3Modal, { IProviderOptions } from "web3modal";
import { AuthProvider } from "./typechain/AuthProvider";
import { AuthProvider__factory } from "./typechain/factories/AuthProvider__factory";
import { ERC1400 } from "./typechain/ERC1400";
import { ERC1400__factory } from "./typechain/factories/ERC1400__factory";
import { ERC1820Registry } from "./typechain/ERC1820Registry";
import { ERC1820Registry__factory } from "./typechain/factories/ERC1820Registry__factory";
import { CapTableQue } from "./typechain/CapTableQue";
import { CapTableQue__factory } from "./typechain/factories/CapTableQue__factory";
import { CapTableRegistry } from "./typechain/CapTableRegistry";
import { CapTableRegistry__factory } from "./typechain/factories/CapTableRegistry__factory";
import { ERC1400AuthValidator } from "./typechain/ERC1400AuthValidator";
import { ERC1400AuthValidator__factory } from "./typechain/factories/ERC1400AuthValidator__factory";
import WalletConnectQrcodeModal from "@walletconnect/qrcode-modal";
import { SIGNER_EVENTS, WalletConnectSigner } from "@symfoni/walletconnect-v2-ethers-signer";
import { getERC1400 } from "./contracts/ERC1400";
import { LiteralUnion } from "react-hook-form";
import { getAuthProvider } from "./contracts/AuthProvider";
import { getERC1820Registry } from "./contracts/ERC1820Registry";
import { getCapTableQue } from "./contracts/CapTableQue";
import { getCapTableRegistry } from "./contracts/CapTableRegistry";
import { getERC1400AuthValidator } from "./contracts/ERC1400AuthValidator";

export const SymfoniContext = React.createContext<SymfoniContextInterface>(undefined!);
export const ERC1400Context = React.createContext<SymfoniERC1400>(undefined!);
export const AuthProviderContext = React.createContext<SymfoniAuthProvider>(undefined!);
export const ERC1820RegistryContext = React.createContext<SymfoniERC1820Registry>(undefined!);
export const CapTableQueContext = React.createContext<SymfoniCapTableQue>(undefined!);
export const CapTableRegistryContext = React.createContext<SymfoniCapTableRegistry>(undefined!);
export const ERC1400AuthValidatorContext = React.createContext<SymfoniERC1400AuthValidator>(undefined!);


export interface SymfoniProps {
    autoInit?: boolean;
    showLoading?: boolean;
    loadingComponent?: React.ReactNode;
}

export type SymfoniERC1400 = {
    instance?: ERC1400;
    factory?: ERC1400__factory;
    connect: (address: string) => void;
};

export type SymfoniAuthProvider = {
    instance?: AuthProvider;
    factory?: AuthProvider__factory;
    connect: (address: string) => void;
};
export interface SymfoniERC1820Registry {
    instance?: ERC1820Registry;
    factory?: ERC1820Registry__factory;
    connect: (address: string) => void;
}
export interface SymfoniCapTableQue {
    instance?: CapTableQue;
    factory?: CapTableQue__factory;
    connect: (address: string) => void;
}
export interface SymfoniCapTableRegistry {
    instance?: CapTableRegistry;
    factory?: CapTableRegistry__factory;
    connect: (address: string) => void;
}
export interface SymfoniERC1400AuthValidator {
    instance?: ERC1400AuthValidator;
    factory?: ERC1400AuthValidator__factory;
    connect: (address: string) => void;
}

export type ProviderTypes = "hardhat" | "walletConnectV2" | "web3modal"
const PROVIDERS = ["hardhat", "walletConnectV2", "web3modal"]

export type SignerTypes = "walletConnectV2" | "mnemonic" | "prompt" | "web3modal"
const SIGNERS = ["walletConnectV2", "mnemonic", "prompt", "web3modal"]
export interface InitOpts {
    provider?: ProviderTypes,
    forceSigner?: boolean
}

export enum STATE {
    DEFAULT,
    INITIALIZING,
    PROVIDER_READY,
    PROVIDER_SIGNER_READY
}
export interface SymfoniContextInterface {
    init: (opts?: InitOpts) => void
    messages: string[];
    forceSigner: boolean
    chainId?: number
    providers: typeof PROVIDERS;
    selectedProvider: ProviderTypes
    provider: providers.Provider
    signers: typeof SIGNERS
    selectedSigner: SignerTypes
    signer?: Signer
    address?: string
    state: STATE
    loading: boolean
    ready: boolean
    hasSigner: boolean
}
export const Symfoni: React.FC<SymfoniProps> = ({
    showLoading = true,
    autoInit = true,
    ...props
}) => {
    const [state, setState] = useState<STATE>(STATE.DEFAULT);
    const [forceSigner, setForceSigner] = useState<boolean>(false);
    const [chainId, setChainId] = useState<number>(undefined!);
    const [messages, setMessages] = useState<string[]>([]);

    const [selectedProvider, setSelectedProvider] = useState<ProviderTypes>("walletConnectV2");
    const [provider, setProvider] = useState<providers.Provider>(undefined!);
    const providers = PROVIDERS

    const [selectedSigner, setSelectedSigner] = useState<SignerTypes>("walletConnectV2");
    const [signer, setSigner] = useState<Signer | undefined>(undefined);
    const signers = SIGNERS
    const loading = state === STATE.DEFAULT || state === STATE.INITIALIZING
    const ready = state === STATE.PROVIDER_READY || state === STATE.PROVIDER_SIGNER_READY
    const hasSigner = state === STATE.PROVIDER_SIGNER_READY

    const [address, setAddress] = useState<string>();

    const [ERC1400, setERC1400] = useState<SymfoniERC1400>(undefined!);
    const [AuthProvider, setAuthProvider] = useState<SymfoniAuthProvider>(undefined!);
    const [ERC1820Registry, setERC1820Registry] = useState<SymfoniERC1820Registry>(undefined!);
    const [CapTableQue, setCapTableQue] = useState<SymfoniCapTableQue>(undefined!);
    const [CapTableRegistry, setCapTableRegistry] = useState<SymfoniCapTableRegistry>(undefined!);
    const [ERC1400AuthValidator, setERC1400AuthValidator] = useState<SymfoniERC1400AuthValidator>(undefined!);


    const getProvider = async () => {
        if (provider) {
            return provider
        }
        if (selectedProvider === "walletConnectV2") {
            setSelectedProvider("walletConnectV2")
            return new ethers.providers.JsonRpcProvider({
                url: "http://127.0.0.1:8545",
            });
        }
        throw Error("Must be able to initate a provider")
    };

    const getSigner = async (_provider: providers.Provider) => {
        return new Promise<Signer | undefined>(async (resolve) => {
            let resolved = false
            if (signer) {
                return resolve(signer)
            }
            const _signer = new WalletConnectSigner().connect(_provider);
            _signer.on(SIGNER_EVENTS.uri, (uri: any) => {
                console.log("NEED URI QR CODE")
                console.log(uri)
            });
            _signer.on(SIGNER_EVENTS.statusUpdate, (session: any) => {
                if (!resolved) {
                    resolved = true
                    return resolve(_signer)
                }
            });
            setTimeout(() => {
                if (!resolved && !forceSigner) {
                    console.log("Did not get signer within 1 sek, returning undefined")
                    resolved = true
                    return resolve(undefined)
                }
            }, 500)
            await _signer.open();
        })
    };

    const init = (opts: InitOpts = {}) => {
        if (opts.provider && opts.provider !== selectedProvider) {
            setSelectedProvider(opts.provider)
        }
        if (opts.forceSigner && opts.forceSigner !== forceSigner)
            setForceSigner(forceSigner)
        setState(STATE.INITIALIZING)
    }

    useEffect(() => {
        if (autoInit) {
            init()
        }
    }, [])

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            if (state === STATE.INITIALIZING) {
                console.log("Running INITIALIZING")
                // setState(STATE.INITIALIZING)
                const _provider = await getProvider()
                const _signer = await getSigner(_provider);
                const _address = _signer ? await _signer.getAddress() : undefined
                const { chainId: _chainId } = await _provider.getNetwork()
                if (subscribed) {
                    setChainId(_chainId)
                    setProvider(_provider)
                    setSigner(_signer)
                    setAddress(_address ? _address : undefined)
                    setERC1400(getERC1400(_provider, _chainId, connectERC1400, _signer))
                    setAuthProvider(getAuthProvider(_provider, _chainId, connectAuthProvider, _signer))
                    setERC1820Registry(getERC1820Registry(_provider, _chainId, connectERC1820Registry, _signer))
                    setCapTableQue(getCapTableQue(_provider, _chainId, connectCapTableQue, _signer))
                    setCapTableRegistry(getCapTableRegistry(_provider, _chainId, connectCapTableRegistry, _signer))
                    setERC1400AuthValidator(getERC1400AuthValidator(_provider, _chainId, connectERC1400AuthValidator, _signer))
                    setState(_signer ? STATE.PROVIDER_SIGNER_READY : STATE.PROVIDER_READY)
                } else {
                    console.log("INITIALIZING un-subscribed")
                }
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [state])

    const connectERC1400 = (address?: string) => {
        setERC1400(getERC1400(provider, chainId, connectERC1400, signer, address))
    }
    const connectAuthProvider = (address?: string) => {
        setAuthProvider(getAuthProvider(provider, chainId, connectAuthProvider, signer, address))
    }
    const connectERC1820Registry = (address?: string) => {
        setERC1820Registry(getERC1820Registry(provider, chainId, connectAuthProvider, signer, address))
    }
    const connectCapTableQue = (address?: string) => {
        setCapTableQue(getCapTableQue(provider, chainId, connectCapTableQue, signer, address))
    }
    const connectCapTableRegistry = (address?: string) => {
        setCapTableRegistry(getCapTableRegistry(provider, chainId, connectCapTableRegistry, signer, address))
    }
    const connectERC1400AuthValidator = (address?: string) => {
        setERC1400AuthValidator(getERC1400AuthValidator(provider, chainId, connectERC1400AuthValidator, signer, address))
    }

    return (
        <SymfoniContext.Provider value={{
            init: (opts?: InitOpts) => init(opts),
            providers,
            signers,
            forceSigner,
            provider,
            selectedProvider,
            selectedSigner,
            state,
            address,
            chainId,
            signer,
            messages,
            loading,
            ready,
            hasSigner
        }}>

            <AuthProviderContext.Provider value={AuthProvider}>
                <ERC1400Context.Provider value={ERC1400}>
                    <ERC1820RegistryContext.Provider value={ERC1820Registry}>
                        <CapTableQueContext.Provider value={CapTableQue}>
                            <CapTableRegistryContext.Provider value={CapTableRegistry}>
                                <ERC1400AuthValidatorContext.Provider value={ERC1400AuthValidator}>
                                    {state === STATE.DEFAULT || state === STATE.INITIALIZING &&
                                        <div>
                                            {props.loadingComponent
                                                ? props.loadingComponent
                                                : <div>
                                                    <p>Loading Symfoni React...</p>
                                                    {messages.map((msg, i) => (
                                                        <p key={i}>{msg}</p>
                                                    ))}
                                                </div>}
                                        </div>
                                    }
                                    {state === STATE.PROVIDER_READY || state === STATE.PROVIDER_SIGNER_READY &&
                                        props.children
                                    }
                                </ERC1400AuthValidatorContext.Provider >
                            </CapTableRegistryContext.Provider >
                        </CapTableQueContext.Provider >
                    </ERC1820RegistryContext.Provider >
                </ERC1400Context.Provider >
            </AuthProviderContext.Provider >
        </SymfoniContext.Provider>
    )

};
