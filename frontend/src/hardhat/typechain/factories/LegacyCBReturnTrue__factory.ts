/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LegacyCBReturnTrue } from "../LegacyCBReturnTrue";

export class LegacyCBReturnTrue__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LegacyCBReturnTrue> {
    return super.deploy(overrides || {}) as Promise<LegacyCBReturnTrue>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LegacyCBReturnTrue {
    return super.attach(address) as LegacyCBReturnTrue;
  }
  connect(signer: Signer): LegacyCBReturnTrue__factory {
    return super.connect(signer) as LegacyCBReturnTrue__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LegacyCBReturnTrue {
    return new Contract(address, _abi, signerOrProvider) as LegacyCBReturnTrue;
  }
}

const _abi = [
  {
    payable: false,
    stateMutability: "nonpayable",
    type: "fallback",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50604780601d6000396000f3fe6080604052348015600f57600080fd5b50600160005260206000f3fea165627a7a723058202ce391d225445a619d5c7202af80390f0954953e4d7fd4c7507e5eebf1a8b51c0029";
