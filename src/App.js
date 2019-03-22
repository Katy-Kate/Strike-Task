import React, { Component } from "react";
import AppOfAuthPage from "./pages/AppOfAuthPage";
import SingUpPage from "./pages/SingUpPage";
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
