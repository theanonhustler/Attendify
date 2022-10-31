import {InjectedConnector} from "@web3-react/injected-connector";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";

import { RPC_URL } from "./rpc_url";

export const pollingInterval = 12000;
export const supportedChains = [71]

export const injected = new InjectedConnector({
    supportedChainIds:supportedChains
})

export const walletConnect = new WalletConnectConnector({
    rpc:{
        71:RPC_URL[71]
    },
    qrcode:true,
    // pollingInterval:pollingInterval
})


// Arguemeny of type {rpc:{71:string}} is not assignable to parameter of type 'WalletConnectorArguement' object literal may only specify known properties and pollingIntervals does not exist in type WalletConnectConnectorArguemnt