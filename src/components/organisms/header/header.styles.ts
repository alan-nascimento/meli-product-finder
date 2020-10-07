import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.primary.main};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 880px;
`;

export const Logo = styled.img`
  width: 48px;
  margin-right: 24px;
`;
