import React, { Component } from "react";
import MainContent from "./pages/MainContent";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Logo from "./components/Logo";
import Slider from "./components/Slider";
import StartPage from "./components/MainContent/StartPage/StartPage";
import CreateNewTask from "./components/MainContent/Tasks/components/CreateNewTask";
import LeftPanel from "./components/HeaderWSpase/LeftPanel";
import HeaderWSpase from "./components/HeaderWSpase/HeaderWSpase";
import Footer from "./components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import users_data from "./data/users_data.json";
import tickets_data from "./data/tickets_data.json";

import { getUserFromLocalStorage } from "./data/UserRepository";
import HeaderStartPage from "./components/HeaderWSpase/HeaderStartPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignUp: false,
      isSignIn: false,
      isOpenSignUp: false,
      isOpenSignIn: false,
      user: false,
      IsOpenTaskModule: false,
      search: {
        error: null,
        query: ""
      },
      willUpdateTickets: false
    };
  }
  componentDidMount() {
    // add data if localstorage is empty
    if (!JSON.parse(localStorage.getItem("users"))) {
      localStorage.setItem("users", JSON.stringify(users_data));
      localStorage.setItem("tickets", JSON.stringify(tickets_data));
    }
    let user = getUserFromLocalStorage();
    //if user was alredy signed in app
    if (Object.keys(user).length) {
      this.saveUser(user);
      this.toggleIsSignIn();
    }
  }

  toogleWillUpdateTickets = bool => {
    this.setState({
      willUpdateTickets: bool || !this.state.willUpdateTickets
    });
  };
  toogleModulWindowForSignIn = bool => {
    this.setState({
      isOpenSignIn: bool || !this.state.isOpenSignIn
    });
  };
  toogleModulWindowForSignUp = bool => {
    this.setState({
      isOpenSignUp: bool || !this.state.isOpenSignUp
    });
  };
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
  toogleLeftPanel = e => {
    let leftPanel = document.querySelector(".left-panel");
    let hamburger = document.querySelector(".header_icon-hamburger");
    let link = leftPanel.querySelector(".left-nav_item");
    let target = e.target;
    let its_leftPanel = target === leftPanel || leftPanel.contains(target);
    let its_hamburger =
      target === hamburger || target.closest(".header_icon-hamburger");
    let leftPanel_is_open = leftPanel.classList.contains("open");

    if (its_hamburger) {
      this.toggleMenu(leftPanel);
    } else if (
      (!its_leftPanel && !its_hamburger && leftPanel_is_open) ||
      target === link
    ) {
      leftPanel.classList.remove("open");
    }
  };

  toogleDropdawnForMobileMenu = () => {
    let mobileMenu = document.getElementsByClassName("nav")[0];
    mobileMenu.classList.toggle("menu-open");
  };

  toggleIsSignIn = () => {
    this.setState(
      prevState => ({
        isSignIn: !prevState.isSignIn
      }),
      () => {
        this.state.isSignIn
          ? document.addEventListener("click", this.toogleLeftPanel)
          : document.removeEventListener("click", this.toogleLeftPanel);
      }
    );
  };
  toggleIsSignUp = () => {
    this.setState(prevState => ({
      isSignUp: !prevState.isSignUp
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
      isSignUp: false,
      isSignIn: false
    });
    localStorage.removeItem("user");
  };

  // Rendering contetn on the page
  renderHeader = () => {
    return (
      <React.Fragment>
        <div className="header">
          {this.state.isSignIn ? (
            <FontAwesomeIcon icon={faBars} className="header_icon-hamburger" />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="header_icon-mobil-menu"
              onClick={this.toogleDropdawnForMobileMenu}
            />
          )}

          <Logo />

          {this.state.isSignIn ? (
            <React.Fragment>
              <FontAwesomeIcon
                icon={faPlus}
                className="nav_item nav_item--btn"
                onClick={this.toogleTaskModul}
              />
              <HeaderWSpase
                onLogOut={this.onLogOut}
                onSearch={this.onSearch}
                onChangeSearch={this.onChangeSearch}
                search={this.state.search}
              />
            </React.Fragment>
          ) : (
            <HeaderStartPage
              toogleModulWindowForSignUp={this.toogleModulWindowForSignUp}
              toogleModulWindowForSignIn={this.toogleModulWindowForSignIn}
            />
          )}
        </div>
        {!this.state.isSignIn && <Slider />}
      </React.Fragment>
    );
  };
  
  renderMainContent = () => {
    if (this.state.isSignIn) {
      return (
        <main className="appPage">
          <MainContent
            user={this.state.user}
            search={this.state.search}
            willUpdateTickets={this.state.willUpdateTickets}
            toogleWillUpdateTickets={this.toogleWillUpdateTickets}
          />
        </main>
      );
    } else {
      return (
        <main className="loginPage">
          <StartPage />
        </main>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <header> {this.renderHeader()}</header>
        {this.renderMainContent()}

        <Footer />
        <LeftPanel className="left-panel" />

        {this.state.IsOpenTaskModule && (
          <CreateNewTask
            toogleTaskModul={this.toogleTaskModul}
            addTicket={this.addTicket}
            user_id={this.state.user["_id"]}
            toogleWillUpdateTickets={this.toogleWillUpdateTickets}
          />
        )}
        {this.state.isOpenSignIn && (
          <SignInPage
            toggleIsSignIn={this.toggleIsSignIn}
            saveUser={this.saveUser}
            toogleModulWindowForSignIn={this.toogleModulWindowForSignIn}
          />
        )}
        {this.state.isOpenSignUp && (
          <SignUpPage
            toggleIsSignUp={this.toggleIsSignUp}
            isSignUp={this.state.isSignUp}
            toogleModulWindowForSignUp={this.toogleModulWindowForSignUp}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
