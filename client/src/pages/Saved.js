import React, { Component } from "react";
import API from "../utilities/API";
import BookCard from "../components/BookCard";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount = () => {
    console.log("Page loaded.");
    console.log(API);
    this.loadBooks();
  };

  deleteThisBook = (id) => {
    API.deleteSaved(id).then(() => window.location.reload());
  };

  handleDeleteClick = (id) => {
    this.deleteThisBook(id);
  };

  loadBooks = () => {
    API.getAllSaved()
      .then((results) => {
        console.log(results.data);
        this.setState({
          books: results.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5 mb-3 text-center">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>Your Saved Books</h1>
            <hr className="w-100" />
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.state.books.map((book) => (
              <BookCard
                title={book.title}
                image={book.image}
                key={book._id}
                id={book._id}
                description={book.description}
                author={book.author}
                link={book.link}
                delete={this.handleDeleteClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
