import { icons } from "../../../assets";
import { MouseEventHandler } from "react";

export interface IProps {
  name: keyof typeof icons;
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
