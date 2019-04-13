import React, { Component } from "react";
import MainContent from "./pages/MainContent";
import SingUpPage from "./pages/SingUpPage";
import SingInPage from "./pages/SingInPage";
import Logo from "./components/Logo";
import Slider from "./components/Slider";
import LeftPanel from "./components/HeaderWSpase/LeftPanel";
import HeaderWSpase from "./components/HeaderWSpase/HeaderWSpase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import data from "./data/data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSingUp: false,
      isSingIn: false,
      user: false
      //user: data
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user || this.state.user) {
      this.saveUser(user);
      this.toggleIsSingIn();
    }
    // add data if localstorage is ampty
    else if (!JSON.parse(localStorage.getItem("users"))) {
      localStorage.setItem("users", JSON.stringify([data]));
    }
  }

  toggleMenu = element => {
    element.classList.toggle("open");
  };

  onAddEventListenerOnMenu() {
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
  toggleIsSingIn = () => {
    this.setState(
      prevState => ({
        isSingIn: !prevState.isSingIn
      }),
      () => {
        this.state.isSingIn && this.onAddEventListenerOnMenu();
      }
    );
  };
  toggleIsSingUp = () => {
    this.setState(prevState => ({
      isSingUp: !prevState.isSingUp
    }));
  };

  saveUser = user => {
    this.setState({
      user
    });
    localStorage.setItem("user", JSON.stringify(user));
  };
  onLogOut = () => {
    this.setState({
      user: null,
      isSingUp: false,
      isSingIn: false
    });
    localStorage.removeItem("user");
  };
  render() {
    return (
      <React.Fragment>
        <header className="header">
          {this.state.isSingIn && (
            <FontAwesomeIcon icon={faBars} className="header_icon-hamburger" />
          )}
          <Logo />
          {this.state.isSingIn && <HeaderWSpase onLogOut={this.onLogOut} />}
        </header>

        {this.state.isSingIn ? (
          <main className="appPage">
            <Slider />
            <MainContent />
          </main>
        ) : (
          <main className="loginPage">
            <SingUpPage
              toggleIsSingUp={this.toggleIsSingUp}
              isSingUp={this.state.isSingUp}
            />
            <SingInPage
              toggleIsSingIn={this.toggleIsSingIn}
              saveUser={this.saveUser}
            />
          </main>
        )}

        <LeftPanel className="left-panel" />

        <footer>footer</footer>
      </React.Fragment>
    );
  }
}

export default App;
