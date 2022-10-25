import { Web3Provider } from "@ethersproject/providers";
import { UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
// import { RPC_URL } from "./provider/rpc_url";

export const getLibrary = (provider) => {
    return new Web3Provider(provider);
}

export const getConnectionError = (err) => {
    if (err instanceof NoEthereumProviderError)
        return "Your browser is not Ethereum enabled, you can install MetaMask on desktop, or visit from a dApp browser on mobile wallet, or try connecting with wallet connect";
    else if (err instanceof UnsupportedChainIdError)
        return "You're connected to an unsupported network.";
    else if (
        err instanceof UserRejectedRequestErrorInjected ||
        err instanceof UserRejectedRequestErrorWalletConnect
    )
        return "Please authorize your wallet connection to this DApp";
    else console.error("wallet connection error", err);
    return "An unknown error occured";
};
