import React from "react";
const circleBarBg = {
  width: "45px",
  height: "45px",
  background: "#1c364c",
  borderRadius: 50,
  padding: "5px",
  textAlign: "center",
  color: "#fff",
  float: "left",
  margin: "10px 20px 10px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const circleBarText = {
  verticalAlign: "middle"
};

class CirculBar extends React.Component {
  render() {
    const { percentage } = this.props;

    return (
      <div style={circleBarBg}>
        <span style={circleBarText}>{`${percentage}%`}</span>
      </div>
    );
  }
}

export default CirculBar;
