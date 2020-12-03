/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CertificateSignerRoleInterface extends ethers.utils.Interface {
  functions: {
    "renounceCertificateSigner(address)": FunctionFragment;
    "isCertificateSigner(address,address)": FunctionFragment;
    "addCertificateSigner(address,address)": FunctionFragment;
    "removeCertificateSigner(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "renounceCertificateSigner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isCertificateSigner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addCertificateSigner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCertificateSigner",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "renounceCertificateSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCertificateSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCertificateSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCertificateSigner",
    data: BytesLike
  ): Result;

  events: {
    "CertificateSignerAdded(address,address)": EventFragment;
    "CertificateSignerRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CertificateSignerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CertificateSignerRemoved"): EventFragment;
}

export class CertificateSignerRole extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CertificateSignerRoleInterface;

  functions: {
    renounceCertificateSigner(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "renounceCertificateSigner(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isCertificateSigner(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    addCertificateSigner(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeCertificateSigner(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  renounceCertificateSigner(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "renounceCertificateSigner(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isCertificateSigner(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isCertificateSigner(address,address)"(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addCertificateSigner(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addCertificateSigner(address,address)"(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeCertificateSigner(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeCertificateSigner(address,address)"(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    renounceCertificateSigner(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceCertificateSigner(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isCertificateSigner(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addCertificateSigner(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeCertificateSigner(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CertificateSignerAdded(
      token: string | null,
      account: string | null
    ): EventFilter;

    CertificateSignerRemoved(
      token: string | null,
      account: string | null
    ): EventFilter;
  };

  estimateGas: {
    renounceCertificateSigner(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "renounceCertificateSigner(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isCertificateSigner(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addCertificateSigner(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeCertificateSigner(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    renounceCertificateSigner(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceCertificateSigner(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isCertificateSigner(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addCertificateSigner(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeCertificateSigner(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeCertificateSigner(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
