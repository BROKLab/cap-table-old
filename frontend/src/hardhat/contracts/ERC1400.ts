import { providers, Signer } from "ethers";
import { SymfoniERC1400 } from "../ForvaltContext";
import { ERC1400__factory } from "./../typechain/factories/ERC1400__factory";

export function getERC1400(
  provider: providers.Provider,
  chainId: number,
  connect: (address: string) => void,
  signer?: Signer,
  address?: string
): SymfoniERC1400 {
  const addresses: { [chainId: number]: string } = {};
  if (address) {
    addresses[chainId] = address;
  }
  const instance = () => {
    if (chainId in addresses) {
      return signer
        ? ERC1400__factory.connect(addresses[chainId], signer)
        : ERC1400__factory.connect(addresses[chainId], provider);
    }
    return undefined;
  };
  const factory = () => {
    return signer ? new ERC1400__factory(signer) : undefined;
  };
  return {
    instance: instance(),
    factory: factory(),
    connect: connect,
  };
}
