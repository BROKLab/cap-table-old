/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IERC20HoldableToken } from "../IERC20HoldableToken";

export class IERC20HoldableToken__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20HoldableToken {
    return new Contract(address, _abi, signerOrProvider) as IERC20HoldableToken;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "holdId",
        type: "bytes32",
      },
      {
        name: "lockPreimage",
        type: "bytes32",
      },
    ],
    name: "executeHold",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupplyOnHold",
    outputs: [
      {
        name: "",
        type: "uint256",
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
        name: "holdId",
        type: "bytes32",
      },
      {
        name: "lockPreimage",
        type: "bytes32",
      },
      {
        name: "recipient",
        type: "address",
      },
    ],
    name: "executeHold",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
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
        name: "holdId",
        type: "bytes32",
      },
    ],
    name: "releaseHold",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "grossBalanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
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
        name: "recipient",
        type: "address",
      },
      {
        name: "notary",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "expirationDateTime",
        type: "uint256",
      },
      {
        name: "lockHash",
        type: "bytes32",
      },
    ],
    name: "hold",
    outputs: [
      {
        name: "holdId",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "holdId",
        type: "bytes32",
      },
    ],
    name: "holdStatus",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "holdBalanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
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
        name: "holdId",
        type: "bytes32",
      },
    ],
    name: "executeHold",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "holdId",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        name: "notary",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "expirationDateTime",
        type: "uint256",
      },
      {
        indexed: false,
        name: "lockHash",
        type: "bytes32",
      },
    ],
    name: "NewHold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "holdId",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "lockPreimage",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "recipient",
        type: "address",
      },
    ],
    name: "ExecutedHold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "holdId",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "sender",
        type: "address",
      },
    ],
    name: "ReleaseHold",
    type: "event",
  },
];
