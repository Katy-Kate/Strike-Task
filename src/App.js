import React, { Component } from "react";
import MainContent from "./pages/MainContent";
import SingUpPage from "./pages/SingUpPage";
import Logo from "././components/Logo";
import Slider from "./components/Slider";
import HeaderWSpase from "./components/HeaderWSpase/HeaderWSpase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSingUp: true,
      isOpenLeftPanel: false
    };
  }

  toggleIsSingUp = () => {
    this.setState(prevState => ({
      isSingUp: !prevState.isSingUp
    }));
  };
  toggleLeftPanel = () => {
    this.setState(prevState => ({
      isOpenLeftPanel: !prevState.isOpenLeftPanel
    }));
  };
  render() {
    return (
      <React.Fragment>
        <header className="header">
          {this.state.isSingUp && (
            <FontAwesomeIcon
              icon={faBars}
              className="header_icon-hamburger"
              onClick={this.toggleLeftPanel}
            />
          )}
          <Logo />
          {this.state.isSingUp && <HeaderWSpase />}
        </header>
        <main>
          <Slider />
          {this.state.isSingUp ? (
            <MainContent />
          ) : (
            <SingUpPage toggleIsSingUp={this.toggleIsSingUp} />
          )}
          <div
            className={
              this.state.isOpenLeftPanel
                ? "open left-panel"
                : "close left-panel"
            }
          />
        </main>
        <footer>footer</footer>
      </React.Fragment>
    );
  }
}

export default App;
