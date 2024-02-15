export interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  change: (searchValue: string) => void;
  searchValue: string;
}
