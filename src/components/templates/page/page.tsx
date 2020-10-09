import React from 'react';

import { Header } from '@/components/organisms';

import { Main, Container } from './page.styles';

type Props = {
  children: JSX.Element;
};

const Page: React.FC<Props> = ({ children }: Props) => (
  <>
    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
  </>
);

export default Page;
