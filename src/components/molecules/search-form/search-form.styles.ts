import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 100%;

  .MuiInputBase-root {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button {
    padding: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    span {
      margin: 0;
    }
  }
`;
