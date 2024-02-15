import styled from "styled-components";

interface ButtonProps {
  padding?: string;
  fontSize?: string;
  isActive?: boolean;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  border-radius: 10px;
  border: 1px solid var(--color-border-${(Theme) => Theme.color});
  background-color: var(--color-background-${(Theme) => Theme.color});
  color: var(--color-text-${(Theme) => Theme.color});
  cursor: pointer;
  ${({ padding }) => `padding: ${padding};`}
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : "")}
  &:hover {
    outline: 2px solid var(--color-text-ligth);
    opacity: 0.7;
  }
`;
