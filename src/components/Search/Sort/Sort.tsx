import { useTheme } from "../../../hooks/contextTheme";

import * as S from "./SortStyle";

const Sort = () => {
  const theme = useTheme();

  return (
    <S.Sort color={theme?.theme}>
      <p>Sort the result by number of repositories</p>
      <select name='' id=''>
        <option value=''>niz</option>
        <option value=''>verh</option>
      </select>
    </S.Sort>
  );
};

export default Sort;
