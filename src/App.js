import React, { Component } from "react";
import AppOfAuthPage from "./pages/AppOfAuthPage";
import SingUpPage from "./pages/SingUpPage";
import Header from "./components/Header/Header";
import "./styles/styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSingUp: false
    };
  }

  toggleIsSingUp = () => {
    this.setState(prevState => ({
      isSingUp: !prevState.isSingUp
    }));
  };
  render() {
    return (
      <div>
        <Header />
        {this.state.isSingUp ? (
          <AppOfAuthPage />
        ) : (
          <SingUpPage toggleIsSingUp={this.toggleIsSingUp} />
        )}
      </div>
    );
  }
}

export default App;
