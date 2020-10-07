import styled from 'styled-components';

import { Button as ButtonBase } from '@/components/atoms';

export const Form = styled.form`
  display: flex;
  width: 100%;

  button {
    width: 36px;
    height: 32px;
    padding: 0;

    span {
      margin: 0;
    }
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0 4px 4px 0;
  width: 42px;
  height: 38px;
`;

export const Button = styled(ButtonBase)`
  && {
  }
`;
