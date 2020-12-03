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

interface ExtensionInterface extends ethers.utils.Interface {
  functions: {
    "registerTokenSetup(address,uint8,bool,bool,bool,bool,address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "registerTokenSetup",
    values: [string, BigNumberish, boolean, boolean, boolean, boolean, string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "registerTokenSetup",
    data: BytesLike
  ): Result;

  events: {};
}

export class Extension extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ExtensionInterface;

  functions: {
    registerTokenSetup(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerTokenSetup(address,uint8,bool,bool,bool,bool,address[])"(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  registerTokenSetup(
    token: string,
    certificateActivated: BigNumberish,
    allowlistActivated: boolean,
    blocklistActivated: boolean,
    granularityByPartitionActivated: boolean,
    holdsActivated: boolean,
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerTokenSetup(address,uint8,bool,bool,bool,bool,address[])"(
    token: string,
    certificateActivated: BigNumberish,
    allowlistActivated: boolean,
    blocklistActivated: boolean,
    granularityByPartitionActivated: boolean,
    holdsActivated: boolean,
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    registerTokenSetup(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "registerTokenSetup(address,uint8,bool,bool,bool,bool,address[])"(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    registerTokenSetup(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerTokenSetup(address,uint8,bool,bool,bool,bool,address[])"(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    registerTokenSetup(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerTokenSetup(address,uint8,bool,bool,bool,bool,address[])"(
      token: string,
      certificateActivated: BigNumberish,
      allowlistActivated: boolean,
      blocklistActivated: boolean,
      granularityByPartitionActivated: boolean,
      holdsActivated: boolean,
      operators: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
