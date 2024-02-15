import styled from "styled-components";
import { Theme } from "../../../hooks/contextTheme/interface";

export const Item = styled.div<Theme>`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-${(Theme) => Theme.color});
  border: 1px solid var(--color-text-${(Theme) => Theme.color});
  border-radius: 16px;
  padding: 0 2%;
`;

export const Content = styled.div`
  display: flex;
  gap: 1%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15%;
  justify-content: center;
`;

export const Login = styled.p`
  margin: 0;
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-medium);
`;

export const Link = styled.a`
  font-size: var(--font-size-regular);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-${(Theme) => Theme.color})
  cursor: pointer;
  text-decoration: none;
`;

export const Avatar = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  padding: 2% 0;
  margin: 1%;
`;

export const Details = styled.div`
  background-color: var(--color-background);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
