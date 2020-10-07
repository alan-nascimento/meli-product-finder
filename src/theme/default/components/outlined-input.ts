import { StyleRules, OutlinedInputClassKey } from '@material-ui/core';

import palette from '@/theme/default/palette';

const OutlinedInput: Partial<StyleRules<OutlinedInputClassKey>> = {
  root: {
    width: '100%',
    textTransform: 'none',
    backgroundColor: palette.action.active,
  },
  notchedOutline: {
    border: 'none',
  },
};

export default OutlinedInput;
