import React from 'react';

import { SearchForm, Logo } from '@/components/molecules';

import { Container, Content } from './header.styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo />
      <SearchForm />
    </Content>
  </Container>
);

export default Header;
