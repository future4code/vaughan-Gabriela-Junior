import { useState } from "react";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import { GlobalStyle } from "./styled-app";
import HermeneIcon from './assets/imgs/two-hearts.png';
import { Header, HermeneImg } from "./styled-app";

function App() {

  const [currentScreen, setCurrentScreen] = useState("home");

  const changeToHome = () => {
    setCurrentScreen("home");
  };

  const changeToMatches = () => {
    setCurrentScreen("matches");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home changeToMatches={changeToMatches}/>
      case "matches":
        return <Matches changeToHome={changeToHome}/>
      default:
        return <Home changeToMatches={changeToMatches}/>
    }
  }

  return (
    <div>
      <GlobalStyle />
      <Header> <HermeneImg src={HermeneIcon} alt="Ícone HermeneMatch"/> HermeneMatch <HermeneImg src={HermeneIcon} alt="Ícone HermeneMatch"/></Header>
      {renderScreen()}
    </div>
  );
}

export default App;
