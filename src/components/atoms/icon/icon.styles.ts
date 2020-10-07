import styled from 'styled-components';

export const Image = styled.img`
  height: ${({ size }: { size: number }) => size}px;
  text-align: center;
`;
