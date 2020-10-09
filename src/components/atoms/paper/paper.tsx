import React from 'react';

import { Container } from './paper.styles';

type Props = {
  spacing?: number;
  children: JSX.Element;
};

const Paper: React.FC<Props> = ({ children, spacing }: Props) => (
  <Container spacing={spacing}>{children}</Container>
);

export default Paper;
