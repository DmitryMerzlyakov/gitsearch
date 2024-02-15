import ReactDOM from "react-dom/client";
import UserNameProvider from "./hooks/contextValue/Value.tsx";
import ThemeProvider from "./hooks/contextTheme/Theme.tsx";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <UserNameProvider>
      <App />
    </UserNameProvider>
  </ThemeProvider>,
);
