import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown
} from "@fortawesome/free-solid-svg-icons";

class Filters extends React.Component {
  render() {
    const {
      filtersBystatus,
      filtersBypriority,
      showFilterByStatus,
      showFilterByPriority
    } = this.props;
    return (
      <div className="filters-wrap">
        <div className="filters">
          <div className="filters_item">
            <p className="filters_item__title">
              отсортировать <br /> по дате
            </p>
            <FontAwesomeIcon
              icon={faLongArrowAltUp}
              className="filters_item__icon"
              onClick={() => this.props.filterByDate("date", -1)}
            />
            <FontAwesomeIcon
              icon={faLongArrowAltDown}
              param="date"
              className="filters_item__icon"
              onClick={() => this.props.filterByDate("date", +1)}
            />
          </div>
          {showFilterByStatus && (
            <div className="filters_item filters_item--by-status">
              <p className="filters_item__title">статус</p>
              <br />
              <lable htmlFor="status-1">
                новые:
                <input
                  type="radio"
                  id="status-1"
                  checked={filtersBystatus === "1"}
                  onChange={this.props.handleInputChange}
                />
              </lable>
              <lable htmlFor="status-2">
                в ожидании:
                <input
                  type="radio"
                  id="status-2"
                  checked={filtersBystatus === "2"}
                  onChange={this.props.handleInputChange}
                />
              </lable>

              <lable htmlFor="status-3">
                выполненные:
                <input
                  type="radio"
                  id="status-3"
                  checked={filtersBystatus === "3"}
                  onChange={this.props.handleInputChange}
                />
              </lable>

              <lable htmlFor="status-4">
                в работе:
                <input
                  type="radio"
                  id="status-4"
                  checked={filtersBystatus === "4"}
                  onChange={this.props.handleInputChange}
                />
              </lable>
              <lable htmlFor="status-all">
                все:
                <input
                  type="radio"
                  id="status-all"
                  checked={filtersBystatus === "all"}
                  onChange={this.props.handleInputChange}
                />
              </lable>
            </div>
          )}
          {showFilterByPriority && (
            <div className="filters_item filters_item--by-priority">
              <p className="filters_item__title">приоритет</p>
              <br />
              <lable htmlFor="priority-1">
                низкий
                <input
                  type="radio"
                  id="priority-1"
                  checked={filtersBypriority === "1"}
                  onChange={this.props.handleInputChange}
                />
              </lable>
              <lable htmlFor="priority-2">
                средний
                <input
                  type="radio"
                  id="priority-2"
                  checked={filtersBypriority === "2"}
                  onChange={this.props.handleInputChange}
                />
              </lable>

              <lable htmlFor="priority-3">
                высокий
                <input
                  type="radio"
                  id="priority-3"
                  checked={filtersBypriority === "3"}
                  onChange={this.props.handleInputChange}
                />
              </lable>

              <lable htmlFor="priority-4">
                срочный
                <input
                  type="radio"
                  id="priority-4"
                  checked={filtersBypriority === "4"}
                  onChange={this.props.handleInputChange}
                />
              </lable>
              <lable htmlFor="priority-all">
                все:
                <input
                  type="radio"
                  id="priority-all"
                  checked={filtersBypriority === "all"}
                  onChange={this.props.handleInputChange}
                />
              </lable>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Filters;
Filters.propTypes = {
  filtersBystatus: PropTypes.string.isRequired,
  filtersBypriority: PropTypes.string.isRequired,
  filterByDate: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
