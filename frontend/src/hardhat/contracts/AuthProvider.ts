import { providers, Signer } from "ethers";
import { SymfoniAuthProvider } from "../ForvaltContext";
import { AuthProvider__factory } from "../typechain/factories/AuthProvider__factory";

export function getAuthProvider(
  provider: providers.Provider,
  chainId: number,
  signer?: Signer,
  address?: string
): SymfoniAuthProvider {
  const addresses: { [chainId: number]: string } = {};
  if (address) {
    addresses[chainId] = address;
  }
  const instance = () => {
    if (chainId in addresses) {
      return signer
        ? AuthProvider__factory.connect(addresses[chainId], signer)
        : AuthProvider__factory.connect(addresses[chainId], provider);
    }
    return undefined;
  };
  const factory = () => {
    return signer ? new AuthProvider__factory(signer) : undefined;
  };
  const connect = (address: string) => {
    return signer
      ? AuthProvider__factory.connect(address, signer)
      : AuthProvider__factory.connect(address, provider);
  };
  return {
    instance: instance(),
    factory: factory(),
    connect: connect,
  };
}