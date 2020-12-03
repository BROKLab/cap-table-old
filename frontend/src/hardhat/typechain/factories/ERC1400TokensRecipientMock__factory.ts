/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1400TokensRecipientMock } from "../ERC1400TokensRecipientMock";

export class ERC1400TokensRecipientMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC1400TokensRecipientMock> {
    return super.deploy(overrides || {}) as Promise<ERC1400TokensRecipientMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1400TokensRecipientMock {
    return super.attach(address) as ERC1400TokensRecipientMock;
  }
  connect(signer: Signer): ERC1400TokensRecipientMock__factory {
    return super.connect(signer) as ERC1400TokensRecipientMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1400TokensRecipientMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1400TokensRecipientMock;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        name: "",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
    outputs: [
      {
        name: "",
        type: "bytes32",
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
        name: "",
        type: "bytes",
      },
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
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
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes",
      },
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
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
        name: "",
        type: "bytes",
      },
    ],
    name: "canReceive",
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
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051808201909152601681527f45524331343030546f6b656e73526563697069656e7400000000000000000000602082015261005b906401000000006104a261006082021704565b6100fb565b6001600080836040516020018082805190602001908083835b602083106100985780518252601f199092019160209182019101610079565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6105698061010a6000396000f3fe608060405234801561001057600080fd5b50600436106100445760e060020a6000350463249cb3fa8114610049578063f464b57614610087578063f55886df146101ca575b600080fd5b6100756004803603604081101561005f57600080fd5b5080359060200135600160a060020a031661031f565b60408051918252519081900360200190f35b6101c8600480360361010081101561009e57600080fd5b8101906020810181356401000000008111156100b957600080fd5b8201836020820111156100cb57600080fd5b803590602001918460018302840111640100000000831117156100ed57600080fd5b91939092823592600160a060020a03602082013581169360408301358216936060840135909216926080810135929060c081019060a0013564010000000081111561013757600080fd5b82018360208201111561014957600080fd5b8035906020019184600183028401116401000000008311171561016b57600080fd5b91939092909160208101903564010000000081111561018957600080fd5b82018360208201111561019b57600080fd5b803590602001918460018302840111640100000000831117156101bd57600080fd5b50909250905061038e565b005b61030b60048036036101008110156101e157600080fd5b8101906020810181356401000000008111156101fc57600080fd5b82018360208201111561020e57600080fd5b8035906020019184600183028401116401000000008311171561023057600080fd5b91939092823592600160a060020a03602082013581169360408301358216936060840135909216926080810135929060c081019060a0013564010000000081111561027a57600080fd5b82018360208201111561028c57600080fd5b803590602001918460018302840111640100000000831117156102ae57600080fd5b9193909290916020810190356401000000008111156102cc57600080fd5b8201836020820111156102de57600080fd5b8035906020019184600183028401116401000000008311171561030057600080fd5b50909250905061041b565b604080519115158252519081900360200190f35b60008281526020819052604081205460ff16156103845760405160200180807f455243313832305f4143434550545f4d414749430000000000000000000000008152506014019050604051602081830303815290604052805190602001209050610388565b5060005b92915050565b6103d087878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061046f92505050565b151561040e576040805160e560020a62461bcd028152602060048201526002602482015260f060020a61353702604482015290519081900360640190fd5b5050505050505050505050565b600061045f88888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061046f92505050565b9c9b505050505050505050505050565b602081015160009060f960020a60110290808214156104935760009250505061049a565b6001925050505b949350505050565b6001600080836040516020018082805190602001908083835b602083106104da5780518252601f1990920191602091820191016104bb565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff0219169083151502179055505056fea165627a7a7230582095bd3780d869029e64856c6d709d34e25811096825b20342e15b00722687ae770029";
