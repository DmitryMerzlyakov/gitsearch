import * as React from "react";

import { useSearchValue } from "../../hooks/contextValue";
import { useTheme } from "../../hooks/contextTheme";

import { Sort } from "./Sort";
import { Change } from "./changeTheme";
import { Button } from "../UI/Button";
import { Icon } from "../UI/Icon";

import * as S from "./SearchStyle";

const Search = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [name, setName] = React.useState("");

  const theme = useTheme();
  const context = useSearchValue();

  const handleChange = () => {
    if (inputRef.current) {
      const { value: inputValue } = inputRef.current;
      setName(inputValue);
    }
  };

  const handleOnSumbit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    context?.change(name);
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <S.Form onSubmit={handleOnSumbit} color={theme?.theme}>
      <S.Search>
        <S.Input
          color={theme?.theme}
          ref={inputRef}
          value={name}
          type='text'
          minLength={1}
          maxLength={39}
          required
          placeholder='Enter user name'
          onChange={handleChange}
        />
        <Button
          padding='0 1rem 0 1rem'
          fontSize='0.9rem'
          type='submit'
          icon={<Icon name={"search"} width='18' />}>
          Search
        </Button>
      </S.Search>
      <S.Control>
        <Sort />
        <Change />
      </S.Control>
    </S.Form>
  );
};

export default Search;
