import '@/styles/globals.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app';
import { configureChains, createClient, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});


const activeChainId = ChainId.Mumbai;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <WagmiConfig client={client}>
    <Component {...pageProps} />
    </WagmiConfig>
    </ThirdwebProvider>
  );
  }

