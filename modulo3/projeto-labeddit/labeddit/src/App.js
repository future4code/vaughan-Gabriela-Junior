import { GlobalStyle } from "./styled-app";
import Router from './routes/Router';
import Header from './components/Header/Header';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  const token = localStorage.getItem("token");
  const [loginButton, setLoginButton] = useState(token ? "Logout " : "Login");

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header loginButton={loginButton} setLoginButton={setLoginButton}/>
        <Router setLoginButton={setLoginButton} />
      </BrowserRouter>
      LabEddit!
    </div>
  );
}

export default App;
