import styled from "styled-components";
import { Theme } from "../../hooks/contextTheme/interface";

export const Form = styled.form<Theme>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2% 20%;
  padding: 2% 0;
  border-radius: 10px;
  border: 1px solid var(--color-border-${(Theme) => Theme.color});
  background-color: var(--color-box-${(Theme) => Theme.color});
  }
`;

export const Control = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Search = styled.div<Theme>`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

export const Input = styled.input<Theme>`
  width: 60%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #878787;
  background-color: var(--color-background-${(Theme) => Theme.color});
  color: var(--color-text-${(Theme) => Theme.color});
  font-size: 18px;
  &:focus {
    outline: 2px solid #878787;
    opacity: 0.7;
  }
`;
