import '../styles/globals.css';

import { AppProps } from 'next/app';

import { FormProvider } from './contexts/FormContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
