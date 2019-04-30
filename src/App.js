import React, { Component } from "react";
import MainContent from "./pages/MainContent";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Logo from "./components/Logo";
import Slider from "./components/Slider";
import CreateNewTask from "./components/MainContent/Tasks/components/CreateNewTask";
import LeftPanel from "./components/HeaderWSpase/LeftPanel";
import HeaderWSpase from "./components/HeaderWSpase/HeaderWSpase";
import Footer from "./components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import users_data from "./data/users_data.json";
import tickets_data from "./data/tickets_data.json";

import { getUserFromLocalStorage } from "./data/UserRepository";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignUp: false,
      isSignIn: false,
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
  toggleIsSignIn = () => {
    this.setState(
      prevState => ({
        isSignIn: !prevState.isSignIn
      }),
      () => {
        this.state.isSignIn && this.onAddEventListenerOnMenu();
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
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="header">
            {this.state.isSignIn && (
              <FontAwesomeIcon
                icon={faBars}
                className="header_icon-hamburger"
              />
            )}
            <Logo />
            {this.state.isSignIn && (
              <FontAwesomeIcon
                icon={faPlus}
                className="nav_item nav_item--btn"
                onClick={this.toogleTaskModul}
              />
            )}
            {this.state.isSignIn && (
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
        {this.state.isSignIn ? (
          <main className="appPage">
            <main className="appPage">
              <MainContent
                user={this.state.user}
                search={this.state.search}
                willUpdateTickets={this.state.willUpdateTickets}
                toogleWillUpdateTickets={this.toogleWillUpdateTickets}
              />
            </main>
          </main>
        ) : (
          <main className="loginPage">
            <SignUpPage
              toggleIsSignUp={this.toggleIsSignUp}
              isSignUp={this.state.isSignUp}
            />
            <SignInPage
              toggleIsSignIn={this.toggleIsSignIn}
              saveUser={this.saveUser}
            />
          </main>
        )}
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
      </React.Fragment>
    );
  }
}

export default App;
