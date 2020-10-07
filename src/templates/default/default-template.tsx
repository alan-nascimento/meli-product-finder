import React from 'react';

import { Header } from '@/components/organisms';

import { Container } from './default-template.styles';

type Props = {
  children: JSX.Element;
};

const DefaultTemplate: React.FC<Props> = ({ children }: Props) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default DefaultTemplate;
