import '../styles/globals.css';

import { AppProps } from 'next/app';

import { NotificationProvider } from '../contexts/NotificationContext';
import { ProbeProvider } from '../contexts/ProbeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <ProbeProvider>
        <Component {...pageProps} />
      </ProbeProvider>
    </NotificationProvider>
  );
}

export default MyApp;
