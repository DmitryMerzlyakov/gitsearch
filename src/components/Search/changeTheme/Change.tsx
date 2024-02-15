import React from "react";

import { useTheme } from "../../../hooks/contextTheme";

import { Icon } from "../../UI/Icon";

import * as S from "./ChangeStyle";

const Change: React.FC = () => {
  const currentTheme = useTheme();

  const click = () => {
    currentTheme?.theme === "dark"
      ? currentTheme?.change("ligth")
      : currentTheme?.change("dark");
    console.log(currentTheme?.theme);
  };

  return (
    <S.Change>
      {currentTheme?.theme === "dark" ? (
        <Icon name={"themeLigth"} width='48' onClick={click} />
      ) : (
        <Icon name={"themeDark"} width='48' onClick={click} />
      )}
    </S.Change>
  );
};

export default Change;
