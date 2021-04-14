import '../styles/globals.css';

import { AppProps } from 'next/app';

import { NotificationProvider } from '../contexts/notification-context';
import { ProbeProvider } from '../contexts/probe-context';

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
