import '@/styles/globals.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider, chains } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  // added connectors from rainbowkit
  connectors,
});


const activeChainId = ChainId.Mumbai;

export default function App({ Component, pageProps }: AppProps) {
  return (

    <WagmiConfig client={client}>

    <SessionProvider session={pageProps.session} refetchInterval={0}>

    <ThirdwebProvider desiredChainId={activeChainId} >
      
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

