import './App.css';

// Theming
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle';
import { darkTheme, lightTheme } from './components/GlobalStyles/Theme';
// Components
import Header from './components/UI/Header/Header';
import Main from './components/UI/Main/Main';
// Context
import { PasswordWrapper } from './context/usePasswordContext';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <PasswordWrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header toggle={themeToggler} theme={theme} />
        <Main />
      </ThemeProvider>
    </PasswordWrapper>
  );
};

export default App;
