import React, { Component } from "react";
import MainContent from "./pages/MainContent";
import SingUpPage from "./pages/SingUpPage";
import SingInPage from "./pages/SingInPage";
import Logo from "./components/Logo";
import Slider from "./components/Slider";
import CreateNewTask from "./components/MainContent/Tasks/components/CreateNewTask";
import LeftPanel from "./components/HeaderWSpase/LeftPanel";
import HeaderWSpase from "./components/HeaderWSpase/HeaderWSpase";
import Footer from "./components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import data from "./data/data.json";
import { saveUserInLocalStorage } from "./data/UserRepository";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSingUp: false,
      isSingIn: false,
      user: false,
      IsOpenTaskModule: false,
      search: {
        error: null,
        query: ""
      }
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user || this.state.user) {
      this.saveUser(user || this.state.user);
      saveUserInLocalStorage(user);
      this.toggleIsSingIn();
    }
    // add data if localstorage is ampty
    else if (!JSON.parse(localStorage.getItem("users"))) {
      localStorage.setItem("users", JSON.stringify([data]));
    }
  }
  onSearch = () => {
    if (this.state.search.query) {
      //searching
    } else {
      this.setState(prevState => ({
        search: { ...prevState, error: "Вы ничего не ввели" }
      }));
    }
  };
  onChangeSearch = event => {
    let value = event.target.value;
    this.setState({
      search: {
        query: value,
        error: null
      }
    });
  };
  toggleMenu = element => {
    element.classList.toggle("open");
  };
  toogleTaskModul = () => {
    this.setState({
      IsOpenTaskModule: !this.state.IsOpenTaskModule
    });
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
        <header>
          <div className="header">
            {this.state.isSingIn && (
              <FontAwesomeIcon
                icon={faBars}
                className="header_icon-hamburger"
              />
            )}
            <Logo />
            {this.state.isSingIn && (
              <FontAwesomeIcon
                icon={faPlus}
                className="nav_item nav_item--btn"
                onClick={this.toogleTaskModul}
              />
            )}
            {this.state.isSingIn && (
              <HeaderWSpase
                onLogOut={this.onLogOut}
                onSearch={this.onSearch}
                onChangeSearch={this.onChangeSearch}
                search={this.state.search}
              />
            )}
          </div>
          <Slider />
        </header>
        {this.state.isSingIn ? (
          <main className="appPage">
            <MainContent user={this.state.user} search={this.state.search} />
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
        <Footer />

        <LeftPanel className="left-panel" />
        {this.state.IsOpenTaskModule && (
          <CreateNewTask
            toogleTaskModul={this.toogleTaskModul}
            saveUser={this.saveUser}
            user={this.state.user}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
