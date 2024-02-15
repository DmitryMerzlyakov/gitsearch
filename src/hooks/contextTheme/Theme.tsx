import * as React from "react";

import { IProvider, IContext } from "./interface";

const Context = React.createContext<IContext | null>(null);

const ThemeProvider = ({ children, ...props }: IProvider) => {
  const [theme, setTheme] = React.useState("dark");

  const change = (theme: string) => {
    setTheme(theme);
  };

  return (
    <Context.Provider value={{ theme, change }} {...props}>
      {children}
    </Context.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => React.useContext(Context);
