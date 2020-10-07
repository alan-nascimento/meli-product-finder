import { StyleRules, OutlinedInputClassKey } from '@material-ui/core';

const OutlinedInput: Partial<StyleRules<OutlinedInputClassKey>> = {
  root: {
    width: '100%',
    height: 34,
    textTransform: 'none',
    backgroundColor: '#ffffff',
  },
  notchedOutline: {
    border: 'none',
  },
};

export default OutlinedInput;
