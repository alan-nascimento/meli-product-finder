import styled from 'styled-components';

export const Image = styled.img`
  width: ${({ size }: { size: number }) => size}px;
`;
