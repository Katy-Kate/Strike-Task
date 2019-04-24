import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

class LeftPanel extends Component {
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
            <Link to="">Задания</Link>
            <div className="left-nav_item__btn">
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
            <div className="dropdown-menu left-nav-2">
              <Link to="/tasks-new" className="left-nav-2_item">
                Новые
              </Link>
              <Link to="/tasks-panding" className="left-nav-2_item">
                В ожидании
              </Link>
              <Link to="/tasks-done" className="left-nav-2_item">
                Выполненные
              </Link>
              <Link to="/tasks-inworking" className="left-nav-2_item">
                В работе
              </Link>
            </div>
          </div>
          <Link to="urgent" className="left-nav_item">
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
