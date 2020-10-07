import styled from 'styled-components';

import { theme } from '@/theme/default';

export const List = styled.ul``;

export const Product = styled.li`
  display: flex;
  margin: ${theme.spacing(0)} ${theme.spacing(3)}px;

  & + & {
    border-top: 1px solid ${theme.palette.background.default};
  }
`;

export const Card = styled.img`
  width: 180px;
  height: 180px;
  margin: ${theme.spacing(3)}px ${theme.spacing(0)};
  border-radius: ${theme.spacing(1)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: ${theme.spacing(4)}px ${theme.spacing(0)};
`;

export const Price = styled.div`
  margin-bottom: ${theme.spacing(3)}px;
`;
