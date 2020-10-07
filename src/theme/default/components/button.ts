import { StyleRules } from '@material-ui/core/styles';
import { ButtonClassKey } from '@material-ui/core';

const Button: Partial<StyleRules<ButtonClassKey>> = {
  root: {
    minWidth: 16,
    borderRadius: 4,
  },
};

export default Button;
