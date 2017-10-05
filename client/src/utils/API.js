import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the drink with the given ingredient

  getDrink: function(ingredient) {
    console.log(ingredient);
    return axios.get("/api/drinks/" + ingredient);
  }
  
  // getDrink: function(ingredient) {
  //   console.log("Query Run");
  //   return axios.get("/api/drinks/" + ingredient, {
  //     params: {
  //       "ingredient": ingredient
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("Axios Results", results.data.response);
  //     return results.data.response;
  //   });
  // }
    

  // // Gets the drink with the given id
  // getBook: function(id) {
  //   return axios.get("/api/drinks/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  //}
};
