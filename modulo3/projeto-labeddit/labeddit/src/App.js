import { GlobalStyle } from "./styled-app";
import Router from './routes/Router';
import Header from './components/Header/Header';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core";


const App = () => {
  const token = localStorage.getItem("token");
  const [loginButton, setLoginButton] = useState(token ? "Logout " : "Login");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header loginButton={loginButton} setLoginButton={setLoginButton}/>
        <Router setLoginButton={setLoginButton} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
