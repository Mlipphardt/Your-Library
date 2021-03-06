import React, { Component } from "react";
import BookCard from "../components/BookCard";
import API from "../utilities/API";

class Search extends Component {
  state = {
    query: "",
    results: [],
    saved: [],
    currentBookshelf: {},
  };

  componentDidMount = () => {
    this.getBooks("Stephen King");
    this.loadSavedBooks();
  };

  getBooks = (query) => {
    API.googleBooks(query)
      .then((results) => {
        console.log(results);
        this.setState({ results: results.data.items });
      })
      .catch((err) => console.log(err));
  };

  deleteThisBook = (id) => {
    API.deleteSaved(id).then(() => this.loadSavedBooks());
  };

  handleDeleteClick = (id) => {
    this.deleteThisBook(id);
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

  handleSaveClick = (id) => {
    console.log(id);
    let savedBook = {
      title: document.getElementById("title-" + id).textContent,
      author: document.getElementById("author-" + id).textContent,
      description: document.getElementById("description-" + id).textContent,
      image: document.getElementById("image-" + id).getAttribute("src"),
      link: document
        .getElementById("view-button-" + id)
        .getAttribute("link-to"),
      googleid: id,
    };
    console.log(savedBook);
    this.saveToLibrary(savedBook);
  };

  loadSavedBooks = () => {
    API.getAllSaved()
      .then((results) => {
        console.log(results.data);
        let savedIds = [];
        let savedBooks = {};
        results.data.forEach((book) => {
          let googleid = book.googleid;
          savedIds.push(googleid);
          savedBooks[googleid] = book._id;
        });
        this.setState({
          saved: savedIds,
          currentBookshelf: savedBooks,
        });
      })
      .catch((err) => console.log(err));
  };

  saveToLibrary = (book) => {
    API.saveBook(book).then((err, res) => {
      if (err) {
        console.log(err);
      }
      this.loadSavedBooks();
      API.getAllSaved().then((err, res) => {
        if (err) {
          console.log(err);
        }
        console.log(res);
      });
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
            {this.state.results ? (
              this.state.results.map((book) => (
                <BookCard
                  title={book.volumeInfo.title}
                  image={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.smallThumbnail
                      : process.env.PUBLIC_URL + "/placeholder.png"
                  }
                  key={book.id}
                  id={book.id}
                  description={book.volumeInfo.description}
                  author={
                    book.volumeInfo.authors
                      ? book.volumeInfo.authors
                      : "No author found."
                  }
                  saved={this.state.saved.includes(book.id) ? true : false}
                  savedid={
                    this.state.currentBookshelf[book.id]
                      ? this.state.currentBookshelf[book.id]
                      : false
                  }
                  delete={this.handleDeleteClick}
                  save={this.handleSaveClick}
                  link={book.volumeInfo.infoLink}
                />
              ))
            ) : (
              <div className="row">
                <div className="col-md-6 mx-auto text-center">
                  <h2>No results available</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
