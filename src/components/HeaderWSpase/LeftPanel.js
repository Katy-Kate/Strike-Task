import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

class LeftPanel extends Component {
  // toggleDropdownMenu = event => {
  //   let clickedElement = event.target.closest("div");

  //   // if we have clicked on caret icon in the left navigation panel - dropdown menu close/open
  //   if (clickedElement.classList.contains("left-nav_item__btn")) {
  //     clickedElement.classList.toggle("open");
  //   }
  //   // if we have clicked and it is not the caret icon in the left navigation panel - dropdown menu close
  //   else {
  //     let el = document.getElementsByClassName("left-nav_item__btn open");
  //     el.length && el[0].classList.remove("open");
  //   }
  // };

  // componentDidMount() {
  //   window.addEventListener("click", this.toggleDropdownMenu);
  // }

  toggleMenu = element => {
    element.classList.toggle("open");
  };

  componentDidMount() {
    let carret = document.querySelector(".left-nav_item__btn");
    let dropdownMenu = document.querySelector(".left-nav-2");

    carret.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleMenu(dropdownMenu);
    });
    document.addEventListener("click", e => {
      let target = e.target;
      let its_dropdownMenu =
        target === dropdownMenu || dropdownMenu.contains(target);
      let its_carret = target === carret;
      let dropdownMenu_is_open = dropdownMenu.classList.contains("open");

      if (!its_dropdownMenu && !its_carret && dropdownMenu_is_open) {
        this.toggleMenu(dropdownMenu);
      }
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="left-nav">
          <div className="left-nav_item left-nav_item--with-dropdown">
            <Link to="1">Задания</Link>
            <div className="left-nav_item__btn">
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
            <div className="dropdown-menu left-nav-2">
              <Link to="/tasks-new" className="left-nav-2_item">
                Новые
              </Link>
              <Link to="/tasks-pandin" className="left-nav-2_item">
                В ожидании
              </Link>
              <Link to="/tasks-done" className="left-nav-2_item">
                Выполненные
              </Link>
              <Link to="/tasks-inworkin" className="left-nav-2_item">
                В работе
              </Link>

              <Link to="/tasks-cancel" className="left-nav-2_item">
                Отмененные
              </Link>
            </div>
          </div>
          <Link to="" className="left-nav_item">
            Срочные
          </Link>
          <Link to="/" className="left-nav_item">
            Панели задач
          </Link>
          <Link to="/contacts/" className="left-nav_item">
            Контакты
          </Link>
          <Link to="/team/" className="left-nav_item">
            Команда
          </Link>
        </div>
      </div>
    );
  }
}
export default LeftPanel;
