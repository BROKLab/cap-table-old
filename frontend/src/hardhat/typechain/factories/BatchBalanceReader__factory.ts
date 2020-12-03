/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BatchBalanceReader } from "../BatchBalanceReader";

export class BatchBalanceReader__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BatchBalanceReader> {
    return super.deploy(overrides || {}) as Promise<BatchBalanceReader>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BatchBalanceReader {
    return super.attach(address) as BatchBalanceReader;
  }
  connect(signer: Signer): BatchBalanceReader__factory {
    return super.connect(signer) as BatchBalanceReader__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchBalanceReader {
    return new Contract(address, _abi, signerOrProvider) as BatchBalanceReader;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "partitions",
        type: "bytes32[]",
      },
      {
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "totalSuppliesByPartition",
    outputs: [
      {
        name: "",
        type: "uint256[]",
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
    constant: true,
    inputs: [
      {
        name: "tokenHolders",
        type: "address[]",
      },
      {
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "balancesOf",
    outputs: [
      {
        name: "",
        type: "uint256[]",
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
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "totalSupplies",
    outputs: [
      {
        name: "",
        type: "uint256[]",
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
        name: "tokenHolders",
        type: "address[]",
      },
      {
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        name: "partitions",
        type: "bytes32[]",
      },
    ],
    name: "balancesOfByPartition",
    outputs: [
      {
        name: "",
        type: "uint256[]",
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
  "0x608060405234801561001057600080fd5b5060408051808201909152601281527f426174636842616c616e63655265616465720000000000000000000000000000602082015261005b9064010000000061092c61006082021704565b6100fb565b6001600080836040516020018082805190602001908083835b602083106100985780518252601f199092019160209182019101610079565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6109f38061010a6000396000f3fe608060405234801561001057600080fd5b506004361061005a5760e060020a60003504631929e009811461005f578063249cb3fa14610171578063a09640ec146101af578063dd2e4bb514610271578063feeef1e6146102e1575b600080fd5b6101216004803603604081101561007557600080fd5b81019060208101813564010000000081111561009057600080fd5b8201836020820111156100a257600080fd5b803590602001918460208302840111640100000000831117156100c457600080fd5b9193909290916020810190356401000000008111156100e257600080fd5b8201836020820111156100f457600080fd5b8035906020019184602083028401116401000000008311171561011657600080fd5b5090925090506103f5565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561015d578181015183820152602001610145565b505050509050019250505060405180910390f35b61019d6004803603604081101561018757600080fd5b5080359060200135600160a060020a031661051e565b60408051918252519081900360200190f35b610121600480360360408110156101c557600080fd5b8101906020810181356401000000008111156101e057600080fd5b8201836020820111156101f257600080fd5b8035906020019184602083028401116401000000008311171561021457600080fd5b91939092909160208101903564010000000081111561023257600080fd5b82018360208201111561024457600080fd5b8035906020019184602083028401116401000000008311171561026657600080fd5b50909250905061058d565b6101216004803603602081101561028757600080fd5b8101906020810181356401000000008111156102a257600080fd5b8201836020820111156102b457600080fd5b803590602001918460208302840111640100000000831117156102d657600080fd5b5090925090506106c5565b610121600480360360608110156102f757600080fd5b81019060208101813564010000000081111561031257600080fd5b82018360208201111561032457600080fd5b8035906020019184602083028401116401000000008311171561034657600080fd5b91939092909160208101903564010000000081111561036457600080fd5b82018360208201111561037657600080fd5b8035906020019184602083028401116401000000008311171561039857600080fd5b9193909290916020810190356401000000008111156103b657600080fd5b8201836020820111156103c857600080fd5b803590602001918460208302840111640100000000831117156103ea57600080fd5b5090925090506107ae565b6040805184830280825260208082028301019092526060918291908015610426578160200160208202803883390190505b5090506000805b848110156105125760005b87811015610509578188028101925086868381811061045357fe5b90506020020135600160a060020a0316600160a060020a031663a26734dc8a8a84818110151561047f57fe5b905060200201356040518263ffffffff1660e060020a0281526004018082815260200191505060206040518083038186803b1580156104bd57600080fd5b505afa1580156104d1573d6000803e3d6000fd5b505050506040513d60208110156104e757600080fd5b505184518590859081106104f757fe5b60209081029091010152600101610438565b5060010161042d565b50909695505050505050565b60008281526020819052604081205460ff16156105835760405160200180807f455243313832305f4143434550545f4d414749430000000000000000000000008152506014019050604051602081830303815290604052805190602001209050610587565b5060005b92915050565b60408051848302808252602080820283010190925260609182919080156105be578160200160208202803883390190505b5090506000805b868110156105125760005b858110156106bc57818602810192508686828181106105eb57fe5b90506020020135600160a060020a0316600160a060020a03166370a082318a8a85818110151561061757fe5b90506020020135600160a060020a03166040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a0316815260200191505060206040518083038186803b15801561067057600080fd5b505afa158015610684573d6000803e3d6000fd5b505050506040513d602081101561069a57600080fd5b505184518590859081106106aa57fe5b602090810290910101526001016105d0565b506001016105c5565b606080838390506040519080825280602002602001820160405280156106f5578160200160208202803883390190505b50905060005b838110156107a65784848281811061070f57fe5b90506020020135600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a02815260040160206040518083038186803b15801561075a57600080fd5b505afa15801561076e573d6000803e3d6000fd5b505050506040513d602081101561078457600080fd5b5051825183908390811061079457fe5b602090810290910101526001016106fb565b509392505050565b604080518483028702808252602080820283010190925260609182919080156107e1578160200160208202803883390190505b5090506000805b8881101561091e5760005b878110156109155760005b8681101561090c578887028302828802018101935089898381811061081f57fe5b90506020020135600160a060020a0316600160a060020a03166330e82803898984818110151561084b57fe5b905060200201358e8e87818110151561086057fe5b90506020020135600160a060020a03166040518363ffffffff1660e060020a0281526004018083815260200182600160a060020a0316600160a060020a031681526020019250505060206040518083038186803b1580156108c057600080fd5b505afa1580156108d4573d6000803e3d6000fd5b505050506040513d60208110156108ea57600080fd5b505185518690869081106108fa57fe5b602090810290910101526001016107fe565b506001016107f3565b506001016107e8565b509098975050505050505050565b6001600080836040516020018082805190602001908083835b602083106109645780518252601f199092019160209182019101610945565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff0219169083151502179055505056fea165627a7a723058200c96841f902c11fc9e694d8f751302351d041fc71841a6870e25e2ef1fff080e0029";