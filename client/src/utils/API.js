import axios from "axios";

export default {
  // Gets all beers
  getBeers: function() {
    return axios.get("/api/beers");
  },

  // Gets the beer with the given id
  getBeersId: function(id) {
    return axios.get("/api/beers/" + id);
  },

  // Deletes the beer with the given id
  deleteBeer: function(id) {
    return axios.delete("/api/beers/" + id);
  },




  // Deletes the user with the request id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  updateUser: function(id) {
    return axios.put("/api/users"  + id);
  },

  loadUserbyId: function(id) {
    return axios.get("/api/users"  + id);
  }
};