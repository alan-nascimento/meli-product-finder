import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.palette.background.paper};
`;

export const Content = styled.section`
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-bottom: ${theme.spacing(9)}px;
  background-color: ${theme.palette.action.active};
`;

export const Breadcrumbs = styled.div`
  margin: ${theme.spacing(3)}px 0;
  align-self: center;
`;
