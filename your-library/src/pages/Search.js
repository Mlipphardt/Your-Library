import React, { Component } from "react";
import BookCard from "../components/BookCard";
import API from "../utilities/API";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  componentDidMount = () => {
    this.getBooks("Stephen King");
  };

  getBooks = (query) => {
    API.googleBooks(query)
      .then((results) => {
        console.log(results);
        this.setState({ results: results.data.items });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.query) {
      this.getBooks(this.state.query);
    }
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
                value={this.state.query}
                name="query"
                id="query-input"
                className="my-3"
                size="50"
                onChange={this.handleInputChange}
              />
            </form>
            <button
              type="submit"
              className="btn bg-primary"
              onClick={this.handleFormSubmit}
              form="query-form"
            >
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
                description={book.volumeInfo.description}
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
