import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Content } from "./components/Content";
import GlobalStyles from "./globalStyles";
import { useTheme } from "./hooks/contextTheme";

function App() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Search />
      <Content />
      <GlobalStyles color={theme?.theme} />
    </>
  );
}

export default App;
