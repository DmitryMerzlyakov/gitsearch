import React from "react";

import { IProps } from "./interface";
import { Button } from "../../UI/Button";
import { Icon } from "../../UI/Icon";

import { useTheme } from "../../../hooks/contextTheme";
// import { IUserDetails } from "./interface";
// import { useFetch } from "./servise";

import * as S from "./itemStyle";

const Item: React.FC<IProps> = React.memo(({ avatar, login, link }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  // const [details, setDetails] = React.useState<IUserDetails>();
  const theme = useTheme();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href) {
      window.open(href, "_blank");
    }
  };

  // https://api.github.com/users/your-username

  // const data = useFetch(`/users/${login}`);
  const ccc = () => {
    // setDetails(data);
    setIsVisible((prev: boolean) => !prev);
  };

  return (
    <S.Item color={theme?.theme}>
      <S.Wrapper>
        <S.Content>
          <S.Avatar src={avatar} />
          <S.Info>
            <S.Login>{login}</S.Login>
            <S.Link onClick={handleLinkClick} href={link}>
              {link}
            </S.Link>
          </S.Info>
        </S.Content>
        <Button
          onClick={ccc}
          icon={<Icon name={"arrowDown"} width='28' height='38' />}></Button>
      </S.Wrapper>
      {isVisible && (
        <S.Details>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </S.Details>
      )}
    </S.Item>
  );
});

export default Item;
