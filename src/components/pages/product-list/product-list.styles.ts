import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.section``;

export const Content = styled.div`
  background: ${theme.palette.action.active};
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
