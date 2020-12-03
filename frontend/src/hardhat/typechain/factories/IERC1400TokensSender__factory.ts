/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IERC1400TokensSender } from "../IERC1400TokensSender";

export class IERC1400TokensSender__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1400TokensSender {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1400TokensSender;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "payload",
        type: "bytes",
      },
      {
        name: "partition",
        type: "bytes32",
      },
      {
        name: "operator",
        type: "address",
      },
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
      {
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "tokensToTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "payload",
        type: "bytes",
      },
      {
        name: "partition",
        type: "bytes32",
      },
      {
        name: "operator",
        type: "address",
      },
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
      {
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "canTransfer",
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