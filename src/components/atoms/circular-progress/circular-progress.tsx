import React from 'react';
import { CircularProgress as CircularProgressBase } from '@material-ui/core';

const CircularProgress: React.FC = () => (
  <CircularProgressBase data-testid="loading" />
);

export default CircularProgress;
