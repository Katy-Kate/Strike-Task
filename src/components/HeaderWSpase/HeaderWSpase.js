import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../../images/default-avatar.png";

class HeaderWSpase extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownMenuOpen: false
    };
  }
  toogleDropdownMenu = () => {
    this.setState(prevState => ({
      isDropdownMenuOpen: !prevState.isDropdownMenuOpen
    }));
  };
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
          <div
            className={
              this.state.isDropdownMenuOpen
                ? "user-profile_dropdown-menu user-profile_dropdown-menu--open"
                : "user-profile_dropdown-menu"
            }
          >
            <Link to="" className="user-profile_dropdown-menu__item">
              Выйти
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderWSpase;
