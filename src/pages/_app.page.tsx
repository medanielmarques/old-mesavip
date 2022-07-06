import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider, ScaleFade } from '@chakra-ui/react';

import { Header } from 'core/header';

import { AuthProvider } from 'contexts';
import { queryClient } from 'services/query-client';
import { theme } from 'chakra/styles';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Header />

          <ScaleFade key={router.route} initialScale={0.5} in={true}>
            <Component {...pageProps} />
          </ScaleFade>
        </ChakraProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
}
