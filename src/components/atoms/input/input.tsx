import React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  name: string;
  value: string;
  placeholder: string;
};

const Input: React.FC<Props> = ({ name, value, placeholder }: Props) => (
  <TextField
    size="small"
    variant="outlined"
    data-testid={`${name}-input`}
    id={name}
    name={name}
    value={value}
    placeholder={placeholder}
  />
);

export default Input;
