import React, { Component } from "react";
import API from "../utilities/API";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  componentDidMount = () => {
    API.googleBooks("Stephen King").then((results) =>
      console.log(results.data.items)
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form id="query-form">
            <label>Search Books, Authors, Summaries...</label>
            <input type="text" name="query" id="query-input" />
          </form>
          <button type="submit" form="query-form">
            Submit
          </button>
        </div>
        <div className="row">
          <p>Hello World</p>
        </div>
      </div>
    );
  }
}

export default Search;
