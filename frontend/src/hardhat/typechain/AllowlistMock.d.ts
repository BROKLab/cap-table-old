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

interface AllowlistMockInterface extends ethers.utils.Interface {
  functions: {
    "renounceAllowlistAdmin(address)": FunctionFragment;
    "addAllowlisted(address,address)": FunctionFragment;
    "isAllowlistAdmin(address,address)": FunctionFragment;
    "isAllowlisted(address,address)": FunctionFragment;
    "removeAllowlisted(address,address)": FunctionFragment;
    "mockFunction(address,bool)": FunctionFragment;
    "removeAllowlistAdmin(address,address)": FunctionFragment;
    "addAllowlistAdmin(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "renounceAllowlistAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addAllowlisted",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowlistAdmin",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowlisted",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAllowlisted",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunction",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAllowlistAdmin",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addAllowlistAdmin",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "renounceAllowlistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowlistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAllowlistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAllowlistAdmin",
    data: BytesLike
  ): Result;

  events: {
    "AllowlistedAdded(address,address)": EventFragment;
    "AllowlistedRemoved(address,address)": EventFragment;
    "AllowlistAdminAdded(address,address)": EventFragment;
    "AllowlistAdminRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllowlistedAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowlistedRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowlistAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowlistAdminRemoved"): EventFragment;
}

export class AllowlistMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AllowlistMockInterface;

  functions: {
    renounceAllowlistAdmin(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "renounceAllowlistAdmin(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addAllowlisted(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isAllowlistAdmin(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isAllowlisted(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    removeAllowlisted(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mockFunction(
      token: string,
      mockActivated: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mockFunction(address,bool)"(
      token: string,
      mockActivated: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeAllowlistAdmin(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addAllowlistAdmin(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  renounceAllowlistAdmin(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "renounceAllowlistAdmin(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addAllowlisted(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addAllowlisted(address,address)"(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isAllowlistAdmin(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isAllowlistAdmin(address,address)"(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAllowlisted(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isAllowlisted(address,address)"(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeAllowlisted(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAllowlisted(address,address)"(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mockFunction(
    token: string,
    mockActivated: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mockFunction(address,bool)"(
    token: string,
    mockActivated: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeAllowlistAdmin(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAllowlistAdmin(address,address)"(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addAllowlistAdmin(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addAllowlistAdmin(address,address)"(
    token: string,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    renounceAllowlistAdmin(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceAllowlistAdmin(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addAllowlisted(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isAllowlistAdmin(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAllowlisted(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeAllowlisted(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mockFunction(
      token: string,
      mockActivated: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "mockFunction(address,bool)"(
      token: string,
      mockActivated: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAllowlistAdmin(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addAllowlistAdmin(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AllowlistedAdded(token: string | null, account: string | null): EventFilter;

    AllowlistedRemoved(
      token: string | null,
      account: string | null
    ): EventFilter;

    AllowlistAdminAdded(
      token: string | null,
      account: string | null
    ): EventFilter;

    AllowlistAdminRemoved(
      token: string | null,
      account: string | null
    ): EventFilter;
  };

  estimateGas: {
    renounceAllowlistAdmin(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "renounceAllowlistAdmin(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addAllowlisted(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isAllowlistAdmin(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAllowlisted(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAllowlisted(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mockFunction(
      token: string,
      mockActivated: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mockFunction(address,bool)"(
      token: string,
      mockActivated: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeAllowlistAdmin(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addAllowlistAdmin(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    renounceAllowlistAdmin(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceAllowlistAdmin(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addAllowlisted(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isAllowlistAdmin(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAllowlisted(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAllowlisted(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAllowlisted(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mockFunction(
      token: string,
      mockActivated: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mockFunction(address,bool)"(
      token: string,
      mockActivated: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeAllowlistAdmin(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addAllowlistAdmin(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAllowlistAdmin(address,address)"(
      token: string,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}