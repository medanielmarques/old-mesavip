import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'src/styles/themes/chakra';
import { Header } from 'src/components/Header';

//Remove this
import 'src/styles/globals.css';
import 'src/styles/header.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
