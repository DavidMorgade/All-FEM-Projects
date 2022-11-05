import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle';
import './App.css';
import AllInOne from './components/AllInOne';
import {
  lightTheme,
  darkTheme,
  pinkTheme,
} from './components/GlobalStyles/Theme';
import ThemeButton from './components/ThemeSwapper/ThemeButton';
import { useDarkMode } from './hooks/useDarkMode';
import { DataWrapper } from './context/useDataContext';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode =
    theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : pinkTheme;
  return (
    <DataWrapper>
      <ThemeProvider theme={themeMode}>
        <ThemeButton theme={theme} toggle={themeToggler} />
        <GlobalStyles />
        <AllInOne theme={theme} />
      </ThemeProvider>
    </DataWrapper>
  );
};

export default App;
