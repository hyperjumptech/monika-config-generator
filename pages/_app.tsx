import '../styles/globals.css';

import { FunctionComponent } from 'react';

function MyApp({
  Component,
  pageProps,
}: {
  Component: FunctionComponent;
  pageProps: unknown;
}) {
  return <Component {...pageProps} />;
}

export default MyApp;
