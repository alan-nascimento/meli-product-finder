import React from 'react';
import Head from 'next/head';

import { Header } from '@/components/organisms';

import { Main, Container } from './page.styles';

type Props = {
  children: JSX.Element;
};

const Page: React.FC<Props> = ({ children }: Props) => (
  <>
    <Head>
      <title>Mercado Libre</title>
    </Head>
    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
  </>
);

export default Page;
