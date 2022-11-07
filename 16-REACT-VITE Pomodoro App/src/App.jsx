import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle';
import { lightTheme } from './components/GlobalStyles/Theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;
