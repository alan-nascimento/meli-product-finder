import React from 'react';
import {
  Typography as TypographyBase,
  TypographyProps,
} from '@material-ui/core';

const Typography = (props: TypographyProps): JSX.Element => (
  <TypographyBase {...props} />
);

export default Typography;
