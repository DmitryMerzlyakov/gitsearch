import styled from "styled-components";

interface IconWrapper {
  width?: string;
  height?: string;
}

export const IconWrapper = styled.span<IconWrapper>`
  display: flex;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;
