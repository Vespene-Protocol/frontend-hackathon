import React from "react";
import { AppProps } from "next/app";
import {
  NetworkInfo,
  StaticWalletProvider,
  WalletProvider,
} from "@terra-money/wallet-provider";
import "tailwindcss/tailwind.css";
import { mainnet, testnet } from "../config/nets";
import Layout from "../components/layout";

const walletConnectChainIds: Record<number, NetworkInfo> = {
  0: testnet,
  1: mainnet,
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  if (typeof window !== "undefined") {
    return (
      <WalletProvider
        defaultNetwork={mainnet}
        walletConnectChainIds={walletConnectChainIds}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletProvider>
    );
  }

  return (
    <StaticWalletProvider defaultNetwork={mainnet}>
      <Component {...pageProps} />
    </StaticWalletProvider>
  );
};

export default App;
