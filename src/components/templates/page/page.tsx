import React from 'react';
import Head from 'next/head';

import { Header } from '@/components/organisms';

import { Main } from './page.styles';

type Props = {
  title: string;
  children: JSX.Element;
};

const Page: React.FC<Props> = ({ children, title }: Props) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
      />
      <title>{title}</title>
    </Head>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Page;
