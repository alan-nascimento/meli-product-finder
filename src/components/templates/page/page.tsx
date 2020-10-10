import React from 'react';
import Head from 'next/head';

import { Header } from '@/components/organisms';

import { Main, Container } from './page.styles';

type Props = {
  testId: string;
  children: JSX.Element;
};

const Page: React.FC<Props> = ({ testId, children }: Props) => (
  <>
    <Head>
      <title>Mercado Libre</title>
    </Head>
    <Header />
    <Main>
      <Container data-testid={testId}>{children}</Container>
    </Main>
  </>
);

export default Page;
