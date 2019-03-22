import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingUpPage extends Component {
  render() {
    return (
      <div className="SingUpPage">
        <h1>SingUpPage</h1>
        <Link to="/app-of-auth"> go to app</Link>
      </div>
    );
  }
}
export default SingUpPage;
