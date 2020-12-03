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

interface CapTableRegistryInterface extends ethers.utils.Interface {
  functions: {
    "add(address,bytes32)": FunctionFragment;
    "controllers()": FunctionFragment;
    "info(address)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "list()": FunctionFragment;
    "listActive()": FunctionFragment;
    "remove(address)": FunctionFragment;
    "setControllers(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "controllers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "info", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isController",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "list", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "listActive",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "remove", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setControllers",
    values: [string[]]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "controllers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listActive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setControllers",
    data: BytesLike
  ): Result;

  events: {
    "capTableAdded(address)": EventFragment;
    "capTableRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "capTableAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "capTableRemoved"): EventFragment;
}

export class CapTableRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CapTableRegistryInterface;

  functions: {
    add(
      adr: string,
      uuid: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "add(address,bytes32)"(
      adr: string,
      uuid: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    controllers(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    "controllers()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    info(
      adr: string,
      overrides?: CallOverrides
    ): Promise<{
      uuid: string;
      active: boolean;
      0: string;
      1: boolean;
    }>;

    "info(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<{
      uuid: string;
      active: boolean;
      0: string;
      1: boolean;
    }>;

    isController(
      adr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isController(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    list(
      overrides?: CallOverrides
    ): Promise<{
      capTableList: string[];
      0: string[];
    }>;

    "list()"(
      overrides?: CallOverrides
    ): Promise<{
      capTableList: string[];
      0: string[];
    }>;

    listActive(
      overrides?: CallOverrides
    ): Promise<{
      capTableList: string[];
      0: string[];
    }>;

    "listActive()"(
      overrides?: CallOverrides
    ): Promise<{
      capTableList: string[];
      0: string[];
    }>;

    remove(adr: string, overrides?: Overrides): Promise<ContractTransaction>;

    "remove(address)"(
      adr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setControllers(
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  add(
    adr: string,
    uuid: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "add(address,bytes32)"(
    adr: string,
    uuid: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  controllers(overrides?: CallOverrides): Promise<string[]>;

  "controllers()"(overrides?: CallOverrides): Promise<string[]>;

  info(
    adr: string,
    overrides?: CallOverrides
  ): Promise<{
    uuid: string;
    active: boolean;
    0: string;
    1: boolean;
  }>;

  "info(address)"(
    adr: string,
    overrides?: CallOverrides
  ): Promise<{
    uuid: string;
    active: boolean;
    0: string;
    1: boolean;
  }>;

  isController(adr: string, overrides?: CallOverrides): Promise<boolean>;

  "isController(address)"(
    adr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  list(overrides?: CallOverrides): Promise<string[]>;

  "list()"(overrides?: CallOverrides): Promise<string[]>;

  listActive(overrides?: CallOverrides): Promise<string[]>;

  "listActive()"(overrides?: CallOverrides): Promise<string[]>;

  remove(adr: string, overrides?: Overrides): Promise<ContractTransaction>;

  "remove(address)"(
    adr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setControllers(
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setControllers(address[])"(
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    add(adr: string, uuid: BytesLike, overrides?: CallOverrides): Promise<void>;

    "add(address,bytes32)"(
      adr: string,
      uuid: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    controllers(overrides?: CallOverrides): Promise<string[]>;

    "controllers()"(overrides?: CallOverrides): Promise<string[]>;

    info(
      adr: string,
      overrides?: CallOverrides
    ): Promise<{
      uuid: string;
      active: boolean;
      0: string;
      1: boolean;
    }>;

    "info(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<{
      uuid: string;
      active: boolean;
      0: string;
      1: boolean;
    }>;

    isController(adr: string, overrides?: CallOverrides): Promise<boolean>;

    "isController(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    list(overrides?: CallOverrides): Promise<string[]>;

    "list()"(overrides?: CallOverrides): Promise<string[]>;

    listActive(overrides?: CallOverrides): Promise<string[]>;

    "listActive()"(overrides?: CallOverrides): Promise<string[]>;

    remove(adr: string, overrides?: CallOverrides): Promise<void>;

    "remove(address)"(adr: string, overrides?: CallOverrides): Promise<void>;

    setControllers(
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    capTableAdded(capTableAddress: string | null): EventFilter;

    capTableRemoved(capTableRemoved: string | null): EventFilter;
  };

  estimateGas: {
    add(
      adr: string,
      uuid: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "add(address,bytes32)"(
      adr: string,
      uuid: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    controllers(overrides?: CallOverrides): Promise<BigNumber>;

    "controllers()"(overrides?: CallOverrides): Promise<BigNumber>;

    info(adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "info(address)"(adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isController(adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isController(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    list(overrides?: CallOverrides): Promise<BigNumber>;

    "list()"(overrides?: CallOverrides): Promise<BigNumber>;

    listActive(overrides?: CallOverrides): Promise<BigNumber>;

    "listActive()"(overrides?: CallOverrides): Promise<BigNumber>;

    remove(adr: string, overrides?: Overrides): Promise<BigNumber>;

    "remove(address)"(adr: string, overrides?: Overrides): Promise<BigNumber>;

    setControllers(
      operators: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      adr: string,
      uuid: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "add(address,bytes32)"(
      adr: string,
      uuid: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    controllers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controllers()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    info(adr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "info(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isController(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isController(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    list(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "list()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "listActive()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(adr: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "remove(address)"(
      adr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setControllers(
      operators: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}