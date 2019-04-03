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
  // onCloseNavMenu = event => {
  //   console.log("hi");
  //   let elemOnclick = event.target.classList();
  //   console.log(elemOnclick);

  //   if (
  //     elemOnclick.some(item => {
  //       return item === "open";
  //     })
  //   ) {
  //     let element = document.getElementsByClassName("left-nav_item__btn");
  //     console.log(element, "   yyyy");
  //     element && element.classList.remove("open");
  //   }
  // };

  // componentDidMount() {
  //   window.addEventListener("click", this.onCloseNavMenu);
  // }

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
          {this.state.isSingUp ? (
            <React.Fragment>
              <Slider />
              <MainContent />
            </React.Fragment>
          ) : (
            <SingUpPage toggleIsSingUp={this.toggleIsSingUp} />
          )}

          <LeftPanel
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
