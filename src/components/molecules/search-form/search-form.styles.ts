import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Form = styled.form`
  display: flex;
  width: 100%;

  .MuiInputBase-root {
    border-top-right-radius: ${theme.spacing(0)};
    border-bottom-right-radius: ${theme.spacing(0)};
  }

  button {
    padding: ${theme.spacing(0)};
    border-top-left-radius: ${theme.spacing(0)};
    border-bottom-left-radius: ${theme.spacing(0)};

    span {
      margin: ${theme.spacing(0)};
    }
  }
`;
