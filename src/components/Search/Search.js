import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory({ forceRefresh: true });
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      error: null
    };
  }

  onChange = event => {
    let value = event.target.value;
    this.setState({
      query: value,
      error: null
    });
  };
  onSearch = () => {
    if (this.state.query) {
      //searching
      customHistory.replace("/search");
    } else {
      this.setState({
        error: "Вы ничего не ввели"
      });
    }
  };
  render() {
    return (
      <div className="search">
        <input value={this.state.query} onChange={this.onChange} />
        <FontAwesomeIcon
          icon={faSearch}
          className="search_icon"
          onClick={this.onSearch}
        />
        {this.state.error && (
          <div className="search_invalid-feedback">{this.state.error}</div>
        )}
      </div>
    );
  }
}
export default Search;
