import { StyleRules } from '@material-ui/core/styles';
import { ButtonClassKey } from '@material-ui/core';
import palette from '../palette';

const Button: Partial<StyleRules<ButtonClassKey>> = {
  root: {
    minWidth: 40,
    borderRadius: 4,
    textTransform: 'none',
  },
  contained: {
    boxShadow: 'none',
    backgroundColor: palette.background.paper,

    '&:hover, &:focus, &:active': {
      boxShadow: 'none',
    },
  },
};

export default Button;
