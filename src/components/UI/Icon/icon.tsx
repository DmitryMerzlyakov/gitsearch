import { IProps } from "./interface";

import * as S from "./iconStyle";
import { icons } from "../../../assets";

const Icon = ({ width, height, name, onClick }: IProps) => {
  const Icon = icons[name];

  return (
    <S.IconWrapper width={width} height={height} onClick={onClick}>
      <Icon width={width} height={height} />
    </S.IconWrapper>
  );
};

export default Icon;
