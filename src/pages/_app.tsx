import GlobalStyles from '../styles/global';

function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
