import { useState } from "react";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import { GlobalStyle } from "./styled-app";

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
      {renderScreen()}
    </div>
  );
}

export default App;
