import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/themes/chakra';
import { Header } from 'components/Header';

import '../styles/globals.css';
import 'styles/sandbox.scss';
import 'styles/signinup.scss';
import 'styles/header.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
