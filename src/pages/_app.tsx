import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// import '@ionic/react/css/core.css';
// //import '@ionic/react/css/typography.css';
// import '@ionic/react/css/padding.css';

// import { setupIonicReact } from '@ionic/react';

// setupIonicReact();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
