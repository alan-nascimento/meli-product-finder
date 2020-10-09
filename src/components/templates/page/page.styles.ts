import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: ${theme.spacing(0, 2)};
  padding-bottom: ${theme.spacing(8)}px;
  background-color: ${theme.palette.background.paper};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
`;
