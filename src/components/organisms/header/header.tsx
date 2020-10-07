import { SearchForm } from '@/components/molecules';

import { Container, Content, Logo } from './header.styles';

const Header = (): JSX.Element => (
  <Container>
    <Content>
      <Logo src="/logo@2x.png" alt="Logo" />
      <SearchForm />
    </Content>
  </Container>
);

export default Header;
