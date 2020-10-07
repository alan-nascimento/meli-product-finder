import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.palette.background.default};
`;

export const Content = styled.section`
  width: 100%;
  max-width: 880px;
  align-self: center;
  margin-bottom: 64px;
  background-color: ${theme.palette.action.active};
`;

export const Breadcrumbs = styled.div`
  margin: 16px 0;
  align-self: center;
`;
