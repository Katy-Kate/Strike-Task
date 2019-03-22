import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import UIRadioBtn from "../components/UiComponents/UIRadioBtn";
import "../styles/singUpPageStyles.css";

class SingUpPage extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "муж",
        email: "",
        mobile: ""
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

  validateFields = () => {
    const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
    const regExpMobile = new RegExp("[0-9]{9,}");
    const errors = {};
    const { values } = this.state;

    values.firstname.length < 5 &&
      (errors.firstname = "Must be more then 4 charecters");
    values.lastname.length < 5 &&
      (errors.lastname = "Must be more then 4 charecters")(
        values.password.length < 6
      ) &&
      (errors.password = "Must be more then 5 charecters")(
        values.repeatPassword !== values.password ||
          values.password.length === 0
      ) &&
      (errors.repeatPassword = "Password must be the same");

    !regExpMail.test(values.email) && (errors.email = "Invalid email address");
    !regExpMobile.test(values.mobile) &&
      (errors.mobile = "Invalid mobile number");

    return errors;
  };

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

    if (this.state.values[inputName] === "") {
      this.setState(prevState => ({
        errors: { ...prevState.errors, [inputName]: "Not empty" }
      }));
      return false;
    } else {
      if (
        (inputName === "firstname" ||
          inputName === "lastname" ||
          inputName === "mobile" ||
          inputName === "email") &&
        this.state.values[inputName].length <= 4
      ) {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [inputName]: "Must be more then 4 charecters"
          }
        }));
        return false;
      } else if (
        inputName === "password" &&
        this.state.values[inputName].length <= 4
      ) {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [inputName]: "Must be more then 4 charecters"
          }
        }));
        return false;
      } else if (
        inputName === "repeatPassword" &&
        this.state.values.repeatPassword !== this.state.values.password
      ) {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [inputName]: "Password must be the same"
          }
        }));
        return false;
      } else {
        this.setState({
          submitting: true
        });
      }
    }
  };

  onSubmit = () => {
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.props.toggleIsSingUp();
    }
  };
  onLogin = e => {
    e.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.onSubmit();
    }
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
