import axios from "axios";

export default {
  // Gets all books
  googleBooks: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  // Gets all saved books
  getAllSaved: function () {
    return axios.get("/api/books/");
  },

  //Gets one saved book with the given id
  getOneSaved: function (id) {
    return axios.get("/api/books/" + id);
  },

  // Deletes the book with the given id
  deleteSaved: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books/", bookData);
  },
};
