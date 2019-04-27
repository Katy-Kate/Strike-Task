import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import UIRadioBtn from "../components/UiComponents/UIRadioBtn";
import {
  addNewUserToLocalStorage,
  createNewUser,
  validateFuield
} from "../data/UserRepository";
import "../styles/singUpPageStyles.css";
import PropTypes from "prop-types";

class SingUpPage extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        firstname: "Kate",
        lastname: "Turalnikova",
        password: "password",
        repeatPassword: "password",
        gender: "муж",
        email: "",
        mobile: "0931527094"
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        email: false,
        mobile: false
      },
      submitting: false
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value },
      errors: {
        ...prevState.errors,
        [name]: false
      }
    }));
  };

  handleBlur = input => {
    const inputName = input.target.id;
    let self = this;
    // if everything correct
    if (validateFuield(self, inputName)) {
      this.setState({
        submitting: true
      });
    }
  };

  onSubmit = () => {
    let user = createNewUser(this.state.values);
    addNewUserToLocalStorage(user);
    this.props.toggleIsSingUp();
  };

  onLogin = e => {
    e.preventDefault();
    let arrOfErrors = Object.values(this.state.errors);
    if (
      arrOfErrors.some(item => {
        return item;
      })
    ) {
      alert("err");
    } else {
      this.onSubmit();
    }
  };

  render() {
    const { values, errors, submitting } = this.state;
    if (this.props.isSingUp) {
      return (
        <div className="sing-up-page">
          <p>Пользователь зарегестрирован. Войдите в систему!</p>
        </div>
      );
    } else {
      return (
        <div className="sing-up-page">
          <form className="sing-up-form">
            <h3 className="form-title">Создать аккаунт</h3>
            <UIField
              id="firstname"
              type="text"
              placeholderText="Имя"
              name="firstname"
              value={values.firstname}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.firstname}
              classNameWrap="sing-up-group"
              classNameInput="sing-up-field"
            />
            <UIField
              id="lastname"
              type="text"
              placeholderText="Фамилия"
              name="lastname"
              value={values.lastname}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.lastname}
              classNameWrap="sing-up-group"
              classNameInput="sing-up-field"
            />

            <fieldset className="form-group">
              <div>Пол</div>
              <UIRadioBtn
                type="radio"
                name="gender"
                id="male"
                value="муж"
                onChange={this.onChange}
                checked={values.gender === "муж"}
              />
              <UIRadioBtn
                type="radio"
                name="gender"
                id="female"
                value="жен"
                checked={values.gender === "жен"}
                onChange={this.onChange}
              />
            </fieldset>
            <UIField
              id="email"
              type="mail"
              placeholderText="Электронная почта"
              name="email"
              value={values.email}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.email}
              classNameWrap="sing-up-group"
              classNameInput="sing-up-field"
            />
            <UIField
              id="mobile"
              type="tel"
              placeholderText="Мобильный номер"
              name="mobile"
              value={values.mobile}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.mobile}
              classNameWrap="sing-up-group"
              classNameInput="sing-up-field"
            />

            <UIField
              id="password"
              type="password"
              placeholderText="пароль"
              name="password"
              value={values.password}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.password}
              classNameWrap="sing-up-group"
              classNameInput="sing-up-field"
            />
            <UIField
              id="repeatPassword"
              type="password"
              placeholderText="повторите пароль"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.repeatPassword}
              classNameWrap="sing-up-group"
              classNameInput="sing-up-field"
            />

            <button
              disabled={!submitting}
              type="submit"
              name="Reset"
              className="form-btn"
              onClick={this.onLogin}
            >
              Зарегестрироваться
            </button>
          </form>
        </div>
      );
    }
  }
}
export default SingUpPage;

SingUpPage.propTypes = {
  toggleIsSingUp: PropTypes.func.isRequired,
  isSingUp: PropTypes.bool.isRequired
};
