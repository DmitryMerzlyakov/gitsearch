export interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  change: (searchValue: string) => void;
  theme: string;
}

export interface Theme {
  color?: string;
}
