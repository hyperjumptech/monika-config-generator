import '../styles/globals.css';

import { AppProps } from 'next/app';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { NotificationProvider } from '../contexts/notification-context';
import { ProbeProvider } from '../contexts/probe-context';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (getCookieConsentValue() === 'true') {
        //isConsentAllowed
        gtag.pageview(url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <NotificationProvider>
      <ProbeProvider>
        <CookieConsent enableDeclineButton>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <Component {...pageProps} />
      </ProbeProvider>
    </NotificationProvider>
  );
}

export default MyApp;
