import './App.css';

// Theming
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle';
import { lightTheme } from './components/GlobalStyles/Theme';
//UI Components
import Header from './components/UI/Header/Header';
import Main from './components/UI/Main/Main';
import Footer from './components/UI/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
