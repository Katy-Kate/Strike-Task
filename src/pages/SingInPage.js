import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import { validateFuield, getUser } from "../data/UserRepository";
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
      userErr: false,
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
    this.props.toggleIsSingIn();
  };

  onLogin = e => {
    e.preventDefault();
    let arrOfErrors = Object.values(this.state.errors);
    if (
      arrOfErrors.some(item => {
        return item;
      })
    ) {
      alert(" onLogin err ");
    } else {
      getUser(this.state.values.password, this.state.values.email)
        .then(user => {
          if (user) {
            this.props.saveUser(user);
            console.log("user", user);
            this.onSubmit();
          } else {
            this.onChangeuserErr(
              "пользоваьеля с такой почтой или паролем не существует"
            );

            alert("пользоваьеля с такой почтой или паролем не существует");
          }
        })
        .catch(err => {
          console.log("onLogin err", err);
        });
    }
  };

  onChangeuserErr = err => {
    this.setState({
      userErr: err
    });
  };
  render() {
    const { values, errors, submitting } = this.state;
    return (
      <div className="sing-in-page">
        <form className="sing-in-form">
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
            classNameWrap="sing-in-group"
            classNameInput="sing-in-field"
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
            classNameWrap="sing-in-group"
            classNameInput="sing-in-field"
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
          {this.state.userErr && (
            <div className="sing-in-form_invalid-feedback">
              {this.state.userErr}
            </div>
          )}
        </form>
      </div>
    );
  }
}
export default SingInPage;
