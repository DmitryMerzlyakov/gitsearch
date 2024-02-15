export interface IProps {
  children?: string;
  onClick?: () => void;
  active?: string;
  disabled?: boolean;
  padding?: string;
  fontSize?: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
