import React from 'react';
import { Button as ButtonBase } from '@material-ui/core';

type Props = {
  type: 'submit' | 'button';
  icon?: JSX.Element;
  content?: string | JSX.Element;
};

const Button: React.FC<Props> = ({ type, icon, content }: Props) => (
  <ButtonBase color="default" variant="contained" type={type} startIcon={icon}>
    {content}
  </ButtonBase>
);

export default Button;
