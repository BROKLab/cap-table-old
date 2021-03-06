/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAuthProvider } from "../IAuthProvider";

export class IAuthProvider__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAuthProvider {
    return new Contract(address, _abi, signerOrProvider) as IAuthProvider;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "latestAcceptedTimestamp",
        type: "uint256",
      },
    ],
    name: "hasAuthenticated",
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
