import React from 'react';
import '@/styles/globals.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { ChainId, ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig, Chain, useSigner } from 'wagmi';
import { polygonMumbai } from "wagmi/chains"; //mainnet
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";


const { provider, webSocketProvider, chains } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) =>
        chain.id === ChainId.Mumbai
          ? {
              http: `https://mumbai.rpc.thirdweb.com`,
            }
          : null,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  // added connectors from rainbowkit
  connectors,
});

function ThirdwebProvider({

  wagmiClient,
  children,
}: {
  wagmiClient: any;
  children: React.ReactNode;
}) {
  const { data: signer } = useSigner();




  return (
    <ThirdwebSDKProvider
      desiredChainId={ChainId.Mumbai}
      signer={signer as any}
      queryClient={wagmiClient.queryClient as any}
      provider={wagmiClient.provider}
    > 
      {children}
    </ThirdwebSDKProvider>
  );
}


export default function App({ Component, pageProps }: AppProps) {
  return (

    <WagmiConfig client={wagmiClient}>

    <SessionProvider session={pageProps.session} refetchInterval={0}>

    <ThirdwebProvider wagmiClient={wagmiClient} >
      
    <RainbowKitProvider
      theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
    chains={chains}>

    <Component {...pageProps} />

    </RainbowKitProvider>
    
    </ThirdwebProvider>

    </SessionProvider>

    </WagmiConfig>
  );
  }

