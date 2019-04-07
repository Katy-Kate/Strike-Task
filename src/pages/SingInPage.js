import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import "../styles/singUpPageStyles.css";

class SingInPage extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        password: "password",
        email: "Turalnikova@gmail.com"
      },
      errors: {
        password: false,
        email: false
      },
      submitting: false
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value },
      errors: {
        ...prevState.errors,
        [name]: ""
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
      if (inputName === "email") {
        const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
        let emailErr = "";
        if (this.state.values[inputName].length <= 4) {
          emailErr = "Must be more then 4 charecters";
        } else if (!regExpMail.test(this.state.values.email)) {
          emailErr = "Invalid email address";
        }
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [inputName]: emailErr
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
      } else {
        this.setState({
          submitting: true
        });
      }
    }
  };

  onSubmit = () => {
    // if (Object.keys(this.state.errors).length > 0) {
    //   console.log("err");
    // } else {
    //   let users = JSON.parse(localStorage.getItem("users"));
    //   this.props.toggleIsSingUp();
    // }
  };

  onLogin = e => {
    e.preventDefault();
    if (Object.keys(this.state.errors).length === 0) {
      this.onSubmit();
    }
  };

  render() {
    const { values, errors, submitting } = this.state;
    return (
      <div className="sing-in-page">
        <div className="sing-in-form">
          <h3 className="form-title">Войти</h3>
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
            id="password"
            type="password"
            placeholderText="пароль"
            name="password"
            value={values.password}
            onChange={this.onChange}
            handleBlur={this.handleBlur}
            error={errors.password}
          />

          <button
            disabled={!submitting}
            type="submit"
            name="Reset"
            className="form-btn"
            onClick={this.onLogin}
          >
            Войти
          </button>
        </div>
      </div>
    );
  }
}
export default SingInPage;
