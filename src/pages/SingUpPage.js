import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import UIRadioBtn from "../components/UiComponents/UIRadioBtn";
import {
  addNewUserToLocalStorage,
  createNewUser,
  inputErrors
} from "../data/UserRepository";
import "../styles/singUpPageStyles.css";

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
        email: "Turalnikova@gmail.com",
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
        [name]: null
      }
    }));
  };

  handleBlur = input => {
    const inputName = input.target.id;
    let self = this;
    if (this.state.values[inputName] === "") {
      inputErrors(self, inputName, "Not empty");
      return false;
    } else {
      // when we are changing email input
      if (inputName === "email") {
        const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
        let emailErr = "";
        if (this.state.values[inputName].length <= 4) {
          emailErr = "Must be more then 4 charecters";
        } else if (!regExpMail.test(this.state.values.email)) {
          emailErr = "Invalid email address";
        }
        inputErrors(self, inputName, emailErr);
        return false;
      }

      // when we are changing mobile input
      else if (inputName === "mobile") {
        const regExpMobile = new RegExp("[0-9]{9,}");
        let mobileErr = "";
        if (this.state.values[inputName].length <= 4) {
          mobileErr = "Must be more then 4 charecters";
        } else if (!regExpMobile.test(this.state.values.mobile)) {
          mobileErr = "Invalid mobile";
        }
        inputErrors(self, inputName, mobileErr);
        return false;
      }

      // when we are changing name input
      if (
        (inputName === "firstname" || inputName === "lastname") &&
        this.state.values[inputName].length <= 4
      ) {
        inputErrors(self, inputName, "Must be more then 4 charecters");
        return false;
      }

      // when we are changing password input
      else if (
        inputName === "password" &&
        this.state.values[inputName].length <= 4
      ) {
        inputErrors(inputName, "Must be more then 4 charecters");
        // this.setState(prevState => ({
        //   errors: {
        //     ...prevState.errors,
        //     [inputName]: "Must be more then 4 charecters"
        //   }
        // }));
        return false;
      } else if (
        inputName === "repeatPassword" &&
        this.state.values.repeatPassword !== this.state.values.password
      ) {
        inputErrors(self, inputName, "Password must be the same");
        return false;
      }

      // if everything correct
      else {
        this.setState({
          submitting: true
        });
      }
    }
  };

  onSubmit = () => {
    // if (Object.keys(this.state.errors).length > 0) {
    //   console.log("err");

    this.props.toggleIsSingUp();
  };
  onLogin = e => {
    e.preventDefault();
    let user = createNewUser(this.state.values);
    addNewUserToLocalStorage(user);
    this.onSubmit();
    // const errors = this.validateFields();
    // if (Object.keys(this.state.errors).length !== 0) {
    //   this.setState(prevState => ({
    //     errors: {
    //       ...prevState.errors,
    //       ...errors
    //     }
    //   }));
    // } else {
    //   let user = createNewUser(this.state.values);
    //   addNewUserToLocalStorage(user);
    //   this.onSubmit();
    // }
  };

  render() {
    const { values, errors, submitting } = this.state;
    return (
      <div className="sing-up-page">
        <div className="sing-up-form">
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
        </div>
      </div>
    );
  }
}
export default SingUpPage;
