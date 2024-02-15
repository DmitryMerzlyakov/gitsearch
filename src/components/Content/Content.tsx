import * as React from "react";

import { Item } from "./item";

import { useSearchValue } from "../../hooks/contextValue";
import { useTheme } from "../../hooks/contextTheme";
import { useFetch } from "./servise";

import * as S from "./ContentStyle";

const Content: React.FC = React.memo(() => {
  const context = useSearchValue();
  const theme = useTheme();

  const data = useFetch("/search/users", context?.searchValue);

  return (
    <S.Content color={theme?.theme}>
      {data?.map((item) => (
        <Item
          key={item.id}
          avatar={item.avatar_url}
          login={item.login}
          link={item.html_url}
        />
      ))}
    </S.Content>
  );
});

export default Content;
