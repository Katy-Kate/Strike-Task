import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

class LeftPanel extends Component {
  componentDidMount() {
    document.addEventListener("click", this.toogleDropdownMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.toogleDropdownMenu);
  }

  toggleMenu = element => {
    element.classList.toggle("open");
  };

  removeClassLict = el => {
    if (el.classList.contains("open")) {
      this.toggleMenu(el);
    }
  };

  toogleDropdownMenu = e => {
    e.stopPropagation();
    let hamburger = document.querySelector(".header_icon-hamburger");
    let carret = document.querySelector(".left-nav_item__btn");
    let dropdownMenu = document.querySelector(".left-nav-2");
    let leftPanel = document.querySelector(".left-panel");
    let target = e.target;
    let its_link = target.href;
    let its_dropdownMenu =
      target === dropdownMenu || dropdownMenu.contains(target);
    let its_carret = target === carret || target.closest(".left-nav_item__btn");
    let its_hamburger =
      target === hamburger || target.closest(".header_icon-hamburger");

    if (its_dropdownMenu && !its_link) return;
    else if (its_carret) {
      this.toggleMenu(dropdownMenu);
    } else if (its_hamburger) {
    } else {
      this.removeClassLict(dropdownMenu);
      this.removeClassLict(leftPanel);
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="left-nav">
          <div className="left-nav_item left-nav_item--with-dropdown">
            <Link to="/dashboard"> Панели задач</Link>
            <div className="left-nav_item__btn">
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
            <div className="dropdown-menu left-nav-2">
              <Link to="/dashboard/tasks-new" className="left-nav-2_item">
                Новые
              </Link>
              <Link to="/dashboard/tasks-panding" className="left-nav-2_item">
                В ожидании
              </Link>
              <Link to="/dashboard/tasks-done" className="left-nav-2_item">
                Выполненные
              </Link>
              <Link to="/dashboard/tasks-inworking" className="left-nav-2_item">
                В работе
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LeftPanel;
