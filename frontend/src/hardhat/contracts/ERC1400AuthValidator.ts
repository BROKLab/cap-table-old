import { providers, Signer } from "ethers";
import {
  SymfoniCapTableQue,
  SymfoniCapTableRegistry,
  SymfoniERC1400AuthValidator,
} from "../ForvaltContext";
import { AuthProvider__factory } from "../typechain/factories/AuthProvider__factory";
import { CapTableQue__factory } from "../typechain/factories/CapTableQue__factory";
import { CapTableRegistry__factory } from "../typechain/factories/CapTableRegistry__factory";
import { ERC1400AuthValidator__factory } from "../typechain/factories/ERC1400AuthValidator__factory";

export function getERC1400AuthValidator(
  provider: providers.Provider,
  chainId: number,
  connect: (address: string) => void,
  signer?: Signer,
  address?: string
): SymfoniERC1400AuthValidator {
  const addresses: { [chainId: number]: string } = {};
  if (address) {
    addresses[chainId] = address;
  }
  const instance = () => {
    if (chainId in addresses) {
      return signer
        ? ERC1400AuthValidator__factory.connect(addresses[chainId], signer)
        : ERC1400AuthValidator__factory.connect(addresses[chainId], provider);
    }
    return undefined;
  };
  const factory = () => {
    return signer ? new ERC1400AuthValidator__factory(signer) : undefined;
  };
  return {
    instance: instance(),
    factory: factory(),
    connect: connect,
  };
}
