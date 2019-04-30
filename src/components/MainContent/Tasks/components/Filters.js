import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountUp,
  faSortAmountDown
} from "@fortawesome/free-solid-svg-icons";

class Filters extends React.Component {
  render() {
    return (
      <div className="filters-wrap">
        <div className="filter">
          <div className="filter_item">
            <p className="filter_item__title">по дате</p>
            <FontAwesomeIcon
              icon={faSortAmountUp}
              className="filter_item__icon"
              onClick={() => this.props.filterByDate("date", -1)}
            />
            <FontAwesomeIcon
              icon={faSortAmountDown}
              param="date"
              className="filter_item__icon"
              onClick={() => this.props.filterByDate("date", +1)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;
