import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

class LeftPanel extends Component {
  toggleMenu = element => {
    element.classList.toggle("open");
  };
  removeClassLict = el => {
    if (el.classList.contains("open")) {
      this.toggleMenu(el);
    }
  };
  addEventListenerOnDropdownMenu() {
    let carret = document.querySelector(".left-nav_item__btn");
    let dropdownMenu = document.querySelector(".left-nav-2");
    let leftPanel = document.querySelector(".left-panel");
    carret.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleMenu(dropdownMenu);
    });
    document.addEventListener("click", e => {
      let target = e.target;
      let its_link = target.href;
      let its_dropdownMenu =
        target === dropdownMenu || dropdownMenu.contains(target);
      let its_carret = target === carret;
      let dropdownMenu_is_open = dropdownMenu.classList.contains("open");

      if (!its_dropdownMenu && !its_carret && dropdownMenu_is_open) {
        this.toggleMenu(dropdownMenu);
      }
      if (its_link) {
        this.removeClassLict(leftPanel);
        this.removeClassLict(dropdownMenu);
      }
    });
  }
  componentDidMount() {
    this.addEventListenerOnDropdownMenu();
  }

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
