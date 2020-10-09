import styled from 'styled-components';

import { theme } from '@/theme/default';

export const Container = styled.article`
  display: flex;
  padding: ${theme.spacing(3)}px;
  cursor: pointer;

  & + & {
    border-top: 1px solid ${theme.palette.background.default};
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Figure = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-right: ${theme.spacing(3)}px;
  border-radius: ${theme.spacing(1)}px;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${theme.spacing(3)}px;

  justify-content: space-between;
`;

export const PriceContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(3)}px;

  img {
    margin-left: ${theme.spacing(1)}px;
  }
`;

export const Content = styled.div`
  max-width: 60%;

  .description {
    font-size: 1.2rem;
  }
`;

export const Location = styled.div`
  padding-right: ${theme.spacing(6)}px;

  P {
    font-size: 0.8rem;
  }
`;
