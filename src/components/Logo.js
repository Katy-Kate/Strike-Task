import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

const logo = {
  display: "flex",
  width: "100px",
  textDecoration: "none",
  position: "relative",
  margin: "7px 30px 14px",
  fontFamily: "'Quicksand', sans - serif"
};
const logo_strike = {
  color: "#3b1",
  fontSize: "25px",
  letterSpacing: "0.13rem"
};
const logo_task = {
  color: "#ffffff45",
  fontSize: "15px"
};
const logo_iconFirst = {
  color: "#ffffff59",
  position: "absolute",
  fontSsize: "18px",
  top: "14px",
  zIndex: "0",
  left: "5px"
};
const logo_iconSec = {
  color: "#ffffff24",
  position: "absolute",
  fontSize: "10px",
  top: "-7px",
  zIndex: "0",
  left: "30px"
};
const logo_iconThird = {
  color: "#ffffff70",
  position: "absolute",
  fontSize: "9px",
  top: "33px",
  zIndex: "0",
  left: "50px"
};
class Logo extends React.Component {
  render() {
    return (
      <a href="#" style={logo}>
        <FontAwesomeIcon icon={faSquareFull} style={logo_iconFirst} />
        <FontAwesomeIcon icon={faSquareFull} style={logo_iconSec} />
        <FontAwesomeIcon icon={faSquareFull} style={logo_iconThird} />
        <span style={logo_strike}>Strike</span>
        <span style={logo_task}> Task</span>
      </a>
    );
  }
}
export default Logo;
