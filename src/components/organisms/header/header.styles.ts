import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.header`
  height: ${theme.spacing(9)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.primary.main};
  padding: ${theme.spacing(0)} ${theme.spacing(2)}px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
`;
