import axios from "axios";

export default {
  // Gets all beers
  getBeers: function() {
    return axios.get("/api/beers");
  },

  // Gets the beer with the given id
  getBeers: function(id) {
    return axios.get("/api/beers/" + id);
  },

  // Deletes the beer with the given id
  deleteBeer: function(id) {
    return axios.delete("/api/beers/" + id);
  },

  
  
  // Saves a beer to the database
  // saveBeer: function(bookData) {
  //   return axios.post("/api/beers", beerData);
  // }
};