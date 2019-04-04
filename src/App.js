import React, { Component } from "react";
import MainContent from "./pages/MainContent";
import SingUpPage from "./pages/SingUpPage";
import Logo from "./components/Logo";
import Slider from "./components/Slider";
import LeftPanel from "./components/HeaderWSpase/LeftPanel";
import HeaderWSpase from "./components/HeaderWSpase/HeaderWSpase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSingUp: true
    };
  }

  toggleIsSingUp = () => {
    this.setState(prevState => ({
      isSingUp: !prevState.isSingUp
    }));
  };

  toggleMenu = element => {
    element.classList.toggle("open");
  };

  componentDidMount() {
    let hamburger = document.querySelector(".header_icon-hamburger");
    let leftPanel = document.querySelector(".left-panel");

    hamburger.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleMenu(leftPanel);
    });
    document.addEventListener("click", e => {
      let target = e.target;
      let its_leftPanel = target === leftPanel || leftPanel.contains(target);
      let its_hamburger = target === hamburger;
      let leftPanel_is_open = leftPanel.classList.contains("open");

      if (!its_leftPanel && !its_hamburger && leftPanel_is_open) {
        this.toggleMenu(leftPanel);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="header">
          {this.state.isSingUp && (
            <FontAwesomeIcon icon={faBars} className="header_icon-hamburger" />
          )}
          <Logo />
          {this.state.isSingUp && <HeaderWSpase />}
        </header>
        <main>
          {this.state.isSingUp ? (
            <React.Fragment>
              <Slider />
              <MainContent />
            </React.Fragment>
          ) : (
            <SingUpPage toggleIsSingUp={this.toggleIsSingUp} />
          )}

          <LeftPanel className="left-panel" />
        </main>
        <footer>footer</footer>
      </React.Fragment>
    );
  }
}

export default App;
