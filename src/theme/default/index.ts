import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import spacing from './spacing';
import { Button, OutlinedInput, TextField } from './components';

export const theme = createMuiTheme({
  palette,
  spacing,
  overrides: {
    MuiButton: Button,
    MuiOutlinedInput: OutlinedInput,
    MuiTextField: TextField,
  },
});
