import * as React from "react";

import { IProvider, IContext } from "./interface";

const Context = React.createContext<IContext | null>(null);

const UserNameProvider = ({ children, ...props }: IProvider) => {
  const [searchValue, setSearchValue] = React.useState("dmitrymerzlyakov");

  const change = (name: string) => {
    setSearchValue(name);
  };

  return (
    <Context.Provider value={{ searchValue, change }} {...props}>
      {children}
    </Context.Provider>
  );
};

export default UserNameProvider;

export const useSearchValue = () => React.useContext(Context);
