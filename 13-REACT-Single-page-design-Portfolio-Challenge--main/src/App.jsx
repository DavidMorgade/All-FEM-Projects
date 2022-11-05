import { Fragment } from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
// Components
import Header from "./components/UI/Header/Header";
import Main from "./components/UI/Main/Main";
import DescSection from "./components/UI/Sections/DescSection";
import SliderSection from "./components/UI/Sections/SliderSection";
import FinalSection from "./components/UI/Sections/FinalSection";
import Footer from "./components/UI/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <DescSection />
      <SliderSection />
      <FinalSection />
      <Footer />
    </Fragment>
  );
};

export default App;
