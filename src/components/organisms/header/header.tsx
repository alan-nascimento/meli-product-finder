import React from 'react';

import { SearchForm, Logo } from '@/components/molecules';

import { Container, Content } from './header.styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo />
      <SearchForm value="" onSearch={() => ({})} />
    </Content>
  </Container>
);

export default Header;
