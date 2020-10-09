import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  background: ${theme.palette.action.active};

  img {
    margin-right: ${theme.spacing(4)}px;
  }

  ul {
    margin-top: ${theme.spacing(2)}px;

    li {
      list-style: circle;
      margin-left: ${theme.spacing(6)}px;
    }
  }
`;
