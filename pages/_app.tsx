import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import GlobalStyles from '@/styles/global';
import { theme } from '@/theme/default';
import { makeStore } from '@/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, pageProps, store }: any = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore, {})(MyApp);
