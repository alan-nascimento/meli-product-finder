import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Content = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing(8)}px;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 64%;
    min-height: 50vh;
    margin-right: ${theme.spacing(4)}px;

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  .condition {
    margin-bottom: ${theme.spacing(2)}px;
  }

  .price {
    margin: ${theme.spacing(3, 0, 6)};
  }
`;

export const Description = styled.div`
  width: 64%;
  margin-bottom: ${theme.spacing(4)}px;

  h5 {
    margin-bottom: ${theme.spacing(4)}px;
  }

  p {
    white-space: pre-line;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
