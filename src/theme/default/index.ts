import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import { Button, OutlinedInput } from './components';

export const theme = createMuiTheme({
  palette,
  overrides: {
    MuiButton: Button,
    MuiOutlinedInput: OutlinedInput,
  },
});
