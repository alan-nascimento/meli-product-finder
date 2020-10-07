import { TextField } from '@material-ui/core';

type Props = {
  name: string;
  value: string;
  placeholder: string;
};

const Input = ({ name, value, placeholder }: Props): JSX.Element => (
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
