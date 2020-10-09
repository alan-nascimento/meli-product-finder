import React, { useState, useEffect } from 'react';

import { Input, Button, Icon } from '@/components/atoms';

import { Form } from './search-form.styles';

type Props = {
  value: string;
  onSearch: (value: string) => any;
};

const SearchForm: React.FC<Props> = ({ value, onSearch }: Props) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value, setInputValue]);

  const handleInput = (e): void => {
    setInputValue(e.target.value);

    if (e.target.value.length > 2) onSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        name="search"
        placeholder="Nunca dejes de buscar"
        value={inputValue}
        onChange={handleInput}
      />
      <Button
        type="submit"
        color="default"
        variant="contained"
        startIcon={
          <Icon
            src="/icon-search@2x.png"
            alt="Icono de búsqueda"
            title="Buscar"
            size={18}
          />
        }
      />
    </Form>
  );
};

export default SearchForm;
