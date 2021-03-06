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

interface ControllableInterface extends ethers.utils.Interface {
  functions: {
    "controllers()": FunctionFragment;
    "isController(address)": FunctionFragment;
    "setControllers(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controllers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setControllers",
    values: [string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "controllers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setControllers",
    data: BytesLike
  ): Result;

  events: {};
}

export class Controllable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ControllableInterface;

  functions: {
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

    setControllers(
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  controllers(overrides?: CallOverrides): Promise<string[]>;

  "controllers()"(overrides?: CallOverrides): Promise<string[]>;

  isController(adr: string, overrides?: CallOverrides): Promise<boolean>;

  "isController(address)"(
    adr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setControllers(
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setControllers(address[])"(
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    controllers(overrides?: CallOverrides): Promise<string[]>;

    "controllers()"(overrides?: CallOverrides): Promise<string[]>;

    isController(adr: string, overrides?: CallOverrides): Promise<boolean>;

    "isController(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setControllers(
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    controllers(overrides?: CallOverrides): Promise<BigNumber>;

    "controllers()"(overrides?: CallOverrides): Promise<BigNumber>;

    isController(adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isController(address)"(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
    controllers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controllers()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isController(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isController(address)"(
      adr: string,
      overrides?: CallOverrides
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
