import { IProps } from "./interface";
import { useTheme } from "../../../hooks/contextTheme";

import * as S from "./buttonStyle";

const Button = ({
  children,
  onClick,
  disabled,
  padding,
  fontSize,
  icon,
  type,
}: IProps) => {
  const theme = useTheme();
  return (
    <S.Button
      color={theme?.theme}
      type={type}
      onClick={onClick}
      disabled={disabled}
      padding={padding}
      fontSize={fontSize}>
      {icon}
      <span>{children}</span>
    </S.Button>
  );
};

export default Button;
