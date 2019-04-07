import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../../images/default-avatar.png";

class HeaderWSpase extends Component {
  toggleMenu = element => {
    element.classList.toggle("open");
  };
  onAddEventListenerOnUserMenu = () => {
    let userIcon = document.querySelector(".user-profile_avatar");
    let userDropdownMenu = document.querySelector(
      ".user-profile_dropdown-menu "
    );

    userIcon.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleMenu(userDropdownMenu);
    });
    document.addEventListener("click", e => {
      let target = e.target;
      let its_userDropdownMenu =
        target === userDropdownMenu || userDropdownMenu.contains(target);
      let its_userIcon = target === userIcon;
      let userDropdownMenu_is_open = userDropdownMenu.classList.contains(
        "open"
      );

      if (!its_userDropdownMenu && !its_userIcon && userDropdownMenu_is_open) {
        this.toggleMenu(userDropdownMenu);
      }
    });
  };
  componentDidMount() {
    this.onAddEventListenerOnUserMenu();
  }

  render() {
    return (
      <div className="header_wspase">
        <div className="nav">
          <Link to="" className="nav_item">
            Входящие
          </Link>
          <Link to="" className="nav_item">
            Моя работа
          </Link>
          <Link to="" className="nav_item">
            Панели задач
          </Link>
          <Link to="" className="nav_item">
            Отчеты
          </Link>
          <Link to="" className="nav_item">
            Лента новостей
          </Link>
        </div>

        <div className="user-profile" onClick={this.toogleDropdownMenu}>
          <div className="user-profile_avatar">
            <img
              src={defaultAvatar}
              alt="avatar"
              className="user-profile_avatar__image"
            />
          </div>
          <div className="user-profile_dropdown-menu">
            <p
              className="user-profile_dropdown-menu__item"
              onClick={this.props.onLogOut}
            >
              Выйти
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderWSpase;
