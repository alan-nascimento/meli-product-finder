import { createGlobalStyle } from 'styled-components';

import { theme } from '@/theme/default';

export default createGlobalStyle`
  * {
    margin: ${theme.spacing(0)};
    padding: ${theme.spacing(0)};
    outline: ${theme.spacing(0)};
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
`;
