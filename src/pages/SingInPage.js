import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import { validateFuield, getUser } from "../data/UserRepository";
import "../styles/singUpPageStyles.css";
import data from "../data/data.json";

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
        [name]: ""
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
      alert("err");
    } else {
      //  ?????????????????????????????????????????
      // getUser(this.state.values.password, this.state.values.email)
      //   .then(user => {
      //     //this.onSubmit();
      //   })
      //   .catch(err => {
      //     console.log("err", err);
      //   });
      this.props.safeUser(data);
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
          {this.state.userErr && (
            <div className="invalid-feedback">{this.state.userErr}</div>
          )}
        </div>
      </div>
    );
  }
}
export default SingInPage;
