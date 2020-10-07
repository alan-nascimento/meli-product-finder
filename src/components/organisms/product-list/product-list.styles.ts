import { theme } from '@/theme/default';
import styled from 'styled-components';

export const List = styled.ul``;

export const Product = styled.li`
  display: flex;
  margin: 0 16px;

  & + & {
    border-top: 1px solid ${theme.palette.background.default};
  }
`;

export const Card = styled.img`
  width: 180px;
  height: 180px;
  margin: 16px 0;
  border-radius: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: 32px 0;
`;

export const Price = styled.div`
  margin-bottom: 16px;
`;
