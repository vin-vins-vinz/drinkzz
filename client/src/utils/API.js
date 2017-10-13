import axios from "axios";

export default {

  // Gets the drink with the given ingredient
  getDrink: function(ingredient) {
    console.log(ingredient);
    return axios.get("/api/drinks/search/" + ingredient);
  },
  
  // Gets the drink with the related _id
  getDetail: function(id) {
    console.log(id);
    return axios.get("/api/drinks/" + id);
  },

  // Get all drinks in database
  getAllDrinks: function(req, res) {
    return axios.get("/api/drinks");
  }
  
};
