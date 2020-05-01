import React, { Component } from "react";
import BookCard from "../components/BookCard";
import API from "../utilities/API";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  componentDidMount = () => {
    API.googleBooks("Stephen King").then((results) => {
      console.log(results.data.items);
      this.setState({ results: results.data.items });
      console.log(results.data.items[0].volumeInfo.title);
      console.log(this.state.results[0].volumeInfo.title);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5 mb-3 text-center">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form id="query-form">
              <div>
                <label>Search Books, Authors, Summaries...</label>
              </div>
              <input
                type="text"
                name="query"
                id="query-input"
                className="my-3"
                size="50"
              />
            </form>
            <button type="submit" className="btn bg-primary" form="query-form">
              Submit
            </button>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.state.results.map((book) => (
              <BookCard
                title={book.volumeInfo.title}
                image={book.volumeInfo.imageLinks.smallThumbnail}
                key={book.id}
                id={book.id}
                author={book.volumeInfo.authors}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
