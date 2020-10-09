import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.section`
  padding: ${({ spacing }: { spacing: number }) =>
    theme.spacing(spacing || 3)}px;
  border-radius: ${theme.spacing(1)}px;
  background-color: ${theme.palette.action.active};
`;
