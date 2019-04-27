import React from "react";
import { ZeroSearchIcon } from "../../images/iconsSVG";

class ZeroResultOfSearch extends React.Component {
  render() {
    return (
      <div className="search-zero">
        <ZeroSearchIcon />
        <div className="search-zero_title">Поиск не дал результатов</div>
        <p>
          Ни одна из задач не соответствует ключевым словам или условиям
          фильтра. Попробуйте изменить ключевые слова или фильтры.
        </p>
      </div>
    );
  }
}
export default ZeroResultOfSearch;
