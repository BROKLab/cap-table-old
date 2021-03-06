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

interface IERC1400TokensCheckerInterface extends ethers.utils.Interface {
  functions: {
    "canTransferByPartition(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canTransferByPartition",
    values: [
      BytesLike,
      BytesLike,
      string,
      string,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "canTransferByPartition",
    data: BytesLike
  ): Result;

  events: {};
}

export class IERC1400TokensChecker extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC1400TokensCheckerInterface;

  functions: {
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
      2: string;
    }>;

    "canTransferByPartition(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
      2: string;
    }>;
  };

  canTransferByPartition(
    payload: BytesLike,
    partition: BytesLike,
    operator: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    0: string;
    1: string;
    2: string;
  }>;

  "canTransferByPartition(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
    payload: BytesLike,
    partition: BytesLike,
    operator: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    0: string;
    1: string;
    2: string;
  }>;

  callStatic: {
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
      2: string;
    }>;

    "canTransferByPartition(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
      2: string;
    }>;
  };

  filters: {};

  estimateGas: {
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canTransferByPartition(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canTransferByPartition(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
