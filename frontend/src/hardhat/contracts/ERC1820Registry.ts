import { providers, Signer } from "ethers";
import { SymfoniERC1820Registry } from "../ForvaltContext";
import { ERC1820Registry__factory } from "../typechain/factories/ERC1820Registry__factory";

export function getERC1820Registry(
  provider: providers.Provider,
  chainId: number,
  connect: (address: string) => void,
  signer?: Signer,
  address?: string
): SymfoniERC1820Registry {
  const addresses: { [chainId: number]: string } = {};
  if (address) {
    addresses[chainId] = address;
  }
  const instance = () => {
    if (chainId in addresses) {
      return signer
        ? ERC1820Registry__factory.connect(addresses[chainId], signer)
        : ERC1820Registry__factory.connect(addresses[chainId], provider);
    }
    return undefined;
  };
  const factory = () => {
    return signer ? new ERC1820Registry__factory(signer) : undefined;
  };
  return {
    instance: instance(),
    factory: factory(),
    connect: connect,
  };
}
