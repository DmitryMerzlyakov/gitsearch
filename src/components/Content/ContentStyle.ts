import styled from "styled-components";
import { Theme } from "../../hooks/contextTheme/interface";

export const Content = styled.div<Theme>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0 20%;
  padding: 2% 0;
  border-radius: 10px;
  border: 1px solid var(--color-text-${(Theme) => Theme.color});
  background-color: var(--color-box-${(Theme) => Theme.color});
`;
