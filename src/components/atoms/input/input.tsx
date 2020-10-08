import React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  name: string;
  value: string;
  onChange: (params?: any) => any;
  placeholder: string;
};

const Input: React.FC<Props> = ({
  name,
  value,
  onChange,
  placeholder,
}: Props) => (
  <TextField
    size="small"
    variant="outlined"
    autoComplete="off"
    data-testid={`${name}-input`}
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
