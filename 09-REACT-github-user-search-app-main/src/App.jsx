import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyle";
import { darkTheme, lightTheme } from "./components/Theme";
import MainContainer from "./components/UI/Body/MainContainer";
import Header from "./components/UI/Header/Header";
import { useDarkMode } from "./context/useDarkTheme";
import { DataWrapper } from "./context/useDataContext";
import { LoadWrapper } from "./context/useLoadingContext";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <LoadWrapper>
      <DataWrapper>
        <ThemeProvider theme={themeMode}>
          <Fragment>
            <GlobalStyles />
            <Header theme={theme} toggle={themeToggler} />
            <MainContainer theme={theme} />
          </Fragment>
        </ThemeProvider>
      </DataWrapper>
    </LoadWrapper>
  );
};

export default App;
