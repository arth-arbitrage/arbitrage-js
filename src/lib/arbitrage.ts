import BigNumber from 'bignumber.js'
import * as Web3 from 'web3'

export const MAINNET_PROVIDER_URL = 'https://api.arth.finance/jsonrpc/v1/';
export const RINKEBY_PROVIDER_URL = 'https://rinkeby-api.arth.finance/jsonrpc/v1/';

// ./wyvern-js/src/types.ts
export enum Network {
    Main = 'main',
    Rinkeby = 'rinkeby',
}

export interface ArbitrageAPIConfig {
    networkName?: Network
    apiKey?: string
    apiBaseUrl?: string
    // Sent to WyvernJS
    gasPrice?: BigNumber
}

export class Arbitrage {

    // Web3 instance to use
    public web3: Web3
    public web3ReadOnly: Web3
    private _networkName: Network

    constructor(provider: Web3.Provider) {
        const readonlyProvider = new Web3.providers.HttpProvider(this._networkName == Network.Main ? MAINNET_PROVIDER_URL : RINKEBY_PROVIDER_URL)

        this.web3 = new Web3(provider)
        this.web3ReadOnly = new Web3(readonlyProvider)
    }
}