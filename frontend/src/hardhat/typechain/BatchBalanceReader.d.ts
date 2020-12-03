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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BatchBalanceReaderInterface extends ethers.utils.Interface {
  functions: {
    "totalSuppliesByPartition(bytes32[],address[])": FunctionFragment;
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "balancesOf(address[],address[])": FunctionFragment;
    "totalSupplies(address[])": FunctionFragment;
    "balancesOfByPartition(address[],address[],bytes32[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "totalSuppliesByPartition",
    values: [BytesLike[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "balancesOf",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplies",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "balancesOfByPartition",
    values: [string[], string[], BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "totalSuppliesByPartition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balancesOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancesOfByPartition",
    data: BytesLike
  ): Result;

  events: {};
}

export class BatchBalanceReader extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BatchBalanceReaderInterface;

  functions: {
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "totalSuppliesByPartition(bytes32[],address[])"(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "balancesOf(address[],address[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "totalSupplies(address[])"(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "balancesOfByPartition(address[],address[],bytes32[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;
  };

  totalSuppliesByPartition(
    partitions: BytesLike[],
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "totalSuppliesByPartition(bytes32[],address[])"(
    partitions: BytesLike[],
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "canImplementInterfaceForAddress(bytes32,address)"(
    interfaceHash: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  balancesOf(
    tokenHolders: string[],
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "balancesOf(address[],address[])"(
    tokenHolders: string[],
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  totalSupplies(
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "totalSupplies(address[])"(
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  balancesOfByPartition(
    tokenHolders: string[],
    tokenAddresses: string[],
    partitions: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "balancesOfByPartition(address[],address[],bytes32[])"(
    tokenHolders: string[],
    tokenAddresses: string[],
    partitions: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "totalSuppliesByPartition(bytes32[],address[])"(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "balancesOf(address[],address[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "totalSupplies(address[])"(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "balancesOfByPartition(address[],address[],bytes32[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSuppliesByPartition(bytes32[],address[])"(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balancesOf(address[],address[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSupplies(address[])"(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balancesOfByPartition(address[],address[],bytes32[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalSuppliesByPartition(bytes32[],address[])"(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balancesOf(address[],address[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalSupplies(address[])"(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balancesOfByPartition(address[],address[],bytes32[])"(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
