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
import { paginationTickets } from "./data/TicketsRepository";
import { getUserFromLocalStorage } from "./data/UserRepository";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignUp: false,
      offset: 0,
      isSignIn: false,
      user: false,
      tickets: [],
      totalTickets: 0,
      IsOpenTaskModule: false,
      search: {
        error: null,
        query: ""
      }
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
      let ticketsResult = paginationTickets(this.state.offset, user["_id"]);
      this.updateTickets(ticketsResult);
      this.toggleIsSignIn();
    }
  }
  // componentDidUpdate(prevState) {
  //   if (this.state.tickets.length != prevState.ticket.length) {

  //   }
  // }
  updateTickets = data => {
    const { userTickets, totalCount } = data;
    this.updateCountOfTotalTickets(totalCount);
    this.updateUserTickets(userTickets);
  };
  changePagination = event => {
    let count = event.target.value === "next" ? 1 : -1;
    let res = this.state.offset + count;
    this.updateOffset(res);
  };
  updateOffset = offset => {
    this.setState(
      {
        offset
      },
      () => {
        let resultUserTickets = paginationTickets(
          this.state.offset,
          this.state.user["_id"]
        );

        const { userTickets, totalCount } = resultUserTickets;
        console.log("totalCount", totalCount);
        this.updateUserTickets(userTickets);
        this.updateCountOfTotalTickets(totalCount);
      }
    );
  };
  replaceTicket = (ticketId, newData) => {
    let tickets = [];
    this.state.tickets.forEach((item, i) => {
      Number(item.id) === Number(ticketId)
        ? tickets.push(newData)
        : tickets.push(item);
    });
    this.updateUserTickets(tickets);
  };

  updateCountOfTotalTickets = totalTickets => {
    this.setState({
      totalTickets
    });
  };

  updateUserTickets = tickets => {
    this.setState({
      tickets
    });
  };
  addTicket = ticket => {
    this.setState(prevState => ({
      tickets: [...prevState.tickets, ticket]
    }));
    let userTickets = paginationTickets(
      this.state.offset,
      this.state.user["_id"]
    );
    const { totalCount } = userTickets;
    console.log("totalCount", totalCount);
    this.updateCountOfTotalTickets(totalCount);
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
    this.setState(
      {
        user
      }
      // () => {
      //   let ticketsResult = paginationTickets(this.state.offset, user["_id"]);
      //   console.log("loginUser ticketsResult = ", ticketsResult);
      //   this.updateTickets(ticketsResult);
      // }
    );
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
            <MainContent
              search={this.state.search}
              tickets={this.state.tickets}
              replaceTicket={this.replaceTicket}
              offset={this.state.offset}
              totalTickets={this.state.totalTickets}
              changePagination={this.changePagination}
            />
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
              updateTickets={this.updateTickets}
            />
          </main>
        )}
        <Footer />

        <LeftPanel className="left-panel" />
        {this.state.IsOpenTaskModule && (
          <CreateNewTask
            toogleTaskModul={this.toogleTaskModul}
            addTicket={this.addTicket}
            user={this.state.user}
            user_id={this.state.user["_id"]}
            updateTickets={this.updateTickets}
            offset={this.state.offset}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
