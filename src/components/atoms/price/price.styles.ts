import { theme } from '@/theme/default';
import styled from 'styled-components';

export const Container = styled.div`
  p {
    display: flex;
    font-size: 1.5rem;

    span {
      line-height: 2;
      font-size: ${theme.spacing(3)}px;
      padding-left: ${theme.spacing(1)}px;
    }
  }

  h3 {
    display: flex;

    span {
      line-height: 1.8;
      font-size: ${theme.spacing(4)}px;
      padding-left: ${theme.spacing(1)}px;
    }
  }
`;
