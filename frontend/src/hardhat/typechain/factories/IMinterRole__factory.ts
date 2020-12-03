/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMinterRole } from "../IMinterRole";

export class IMinterRole__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMinterRole {
    return new Contract(address, _abi, signerOrProvider) as IMinterRole;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
