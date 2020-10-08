import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.palette.background.paper};
`;
