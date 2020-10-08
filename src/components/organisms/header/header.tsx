import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';

import { SearchForm, Logo } from '@/components/molecules';

import { Container, Content } from './header.styles';

const Header: React.FC = () => {
  const { query, push } = useRouter();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (query.search) {
      setSearch(`${query.search}`);
    }
  }, [setSearch]);

  const debounceOnSearch = debounce((value: string) => {
    push(`/items?search=${value}`);
  }, 800);

  const handleSearch = (value: string) => value && debounceOnSearch(value);

  return (
    <Container>
      <Content>
        <Logo />
        <SearchForm value={search} onSearch={handleSearch} />
      </Content>
    </Container>
  );
};

export default Header;
