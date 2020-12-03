/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ERC1820Registry } from "../ERC1820Registry";

export class ERC1820Registry__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1820Registry {
    return new Contract(address, _abi, signerOrProvider) as ERC1820Registry;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_interfaceHash",
        type: "bytes32",
      },
      {
        name: "_implementer",
        type: "address",
      },
    ],
    name: "setInterfaceImplementer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
    ],
    name: "getManager",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_newManager",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_interfaceHash",
        type: "bytes32",
      },
    ],
    name: "getInterfaceImplementer",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];