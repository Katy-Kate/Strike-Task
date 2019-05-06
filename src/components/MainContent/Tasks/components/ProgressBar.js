import React from "react";

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-wrap">
        <p className="progress_title">Процент выполнения</p>

        <p>{`${this.props.percentage}%`}</p>

        <div className="progress-input">
          <input
            id="progressInput"
            type="range"
            min="0"
            max="100"
            step="1"
            value={this.props.percentage}
            onChange={this.props.changeProgress}
          />
        </div>
        <div className="saveProgres">
          <button
            className="saveStatus_btn btn--dark "
            onClick={this.props.saveProgres}
          >
            Сохранить
          </button>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

ProgressBar.defaultProps = {
  percentage: 0
};
