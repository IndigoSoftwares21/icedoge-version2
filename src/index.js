import './index.css';

import { ConnectKitButton, ConnectKitProvider, getDefaultClient } from "connectkit";
import { WagmiConfig, createClient, mainnet } from "wagmi";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import Home from './Home';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import reportWebVitals from './reportWebVitals';

// const alchemyId ="lx98LXCFaP31WWsEE0w6S6LvOPwhp856";
const infuraId ="a347fa255b62416d88fb3365d634a7a6";

const client = createClient(
  getDefaultClient({
    appName: "Ice Doge",
    infuraId,
    chains:[mainnet]
  }),
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Home />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
