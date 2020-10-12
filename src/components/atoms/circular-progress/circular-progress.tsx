import React from 'react';
import { CircularProgress as CircularProgressBase } from '@material-ui/core';

import { Container } from './circular-progress.styles';

const CircularProgress: React.FC = () => (
  <Container>
    <CircularProgressBase data-testid="loading" />
  </Container>
);

export default CircularProgress;
