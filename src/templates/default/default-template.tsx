import React from 'react';
import { Typography } from '@material-ui/core';

import { Header } from '@/components/organisms';

import { Container, Content, Breadcrumbs } from './default-template.styles';

type Props = {
  children: JSX.Element;
};

const DefaultTemplate: React.FC<Props> = ({ children }: Props) => (
  <Container>
    <Header />

    <Breadcrumbs>
      <Typography>any_text</Typography>
    </Breadcrumbs>

    <Content>{children}</Content>
  </Container>
);

export default DefaultTemplate;
