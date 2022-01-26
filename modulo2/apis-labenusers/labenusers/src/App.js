import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NewUser from './components/NewUser';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #171717;
    color: white;
  }
`

class App extends React.Component {

  state = {
    currentScreen: "new user"
  };

  renderScreen = () => {
    switch (this.state.currentScreen) {
      case "new user":
        return <NewUser changeToUsersList={this.changeToUsersList} />
      case "users list":
        return <UsersList changeToNewUser={this.changeToNewUser} />
      case "user details":
        console.log("chegou no case")
        return <UserDetails changeToUserDetails={this.changeToUserDetails} />
      default:
        return <NewUser />
    };
  };

  changeToNewUser = () => {
    this.setState({ currentScreen: "new user" });
  };

  changeToUsersList = () => {
    this.setState({ currentScreen: "users list" });
  };

  changeToUserDetails = () => {
    console.log("chegou na funçao")
    this.setState({ currentScreen: "user details" });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        {this.renderScreen()}
      </div>
    );
  }
}

export default App;