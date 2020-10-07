import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import GlobalStyles from '@/styles/global';
import { theme } from '@/theme/default';

function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
