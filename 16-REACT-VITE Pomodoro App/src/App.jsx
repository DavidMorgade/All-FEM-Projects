import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle';
import { lightTheme } from './components/GlobalStyles/Theme';
import Footer from './components/UI/Footer/Footer';
import Main from './components/UI/Main/Main';
import MainHeader from './components/UI/Main/MainHeader';
import MainSection from './components/UI/Main/MainSection';
import Settings from './components/UI/Settings/Settings';
import { SettingsWrapper } from './context/useSettingsContext';
import { UserInterfaceWrapper } from './context/useUIContext';

function App() {
  const [openSettings, setOpenSettings] = useState(false);

  // Set settings to true, open the settings window
  const openSettingsHandler = () => {
    setOpenSettings((oldState) => !oldState);
  };

  return (
    <UserInterfaceWrapper>
      <SettingsWrapper>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Main>
            <MainHeader />
            <MainSection />
            {/* Prop chain to the buttom */}
            <Footer settings={openSettingsHandler} />
          </Main>
          {openSettings && <Settings closeSettings={openSettingsHandler} />}
        </ThemeProvider>
      </SettingsWrapper>
    </UserInterfaceWrapper>
  );
}

export default App;
