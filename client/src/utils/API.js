import axios from "axios";
require('dotenv').config();
const UNTAPPED = "https://api.untappd.com/v4/";
const UNTAPPED_CLIENTID = process.env.UNTAPPED_CLIENTID; 
const UNTAPPED_CLIENTSECRET = process.env.UNTAPPED_CLIENTSECRET; 

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
  
  
  // Gets all the beer by family name
  getBeersByStyle: function() {
    return axios.get("/api/decks");
  },
  
  // Gets the users by family name
  getUserDecks: function() {
    return axios.get("/api/decks/user");
  },

  // Gets the public decks by deck name
  getPubDecks: function() {
    return axios.get("/api/decks/pub");
  },

  // Users
  findAllUsers: function(id) {
    return axios.get("/api/users");
  },

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  // Deletes the user with the request id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  updateUser: function(id) {
    return axios.put("/api/users/"  + id);
  },

  loadUserbyId: function(id) {
    return axios.get("/api/users/"  + id);
  },

  ////////////////////////////
  getAllPubDecks: function() {
    return axios.get("/api/pubdecks");
  },

  savePubDecks: function(publicDeck) {
    return axios.post("/api/pubdecks", publicDeck);
  },

  untapped: function(query) {
    return axios.get(`${UNTAPPED}search/beer?q=${query}&client_id=${UNTAPPED_CLIENTID}&client_secret=${UNTAPPED_CLIENTSECRET}`);
  }

  // // Gets the beer with the given id
  // getBeersId: function(id) {
  //   return axios.get("/api/beers/" + id);
  // },

  
  // // Deletes the beer with the given id
  // deleteBeer: function(id) {
  //   return axios.delete("/api/beers/" + id);
  // },
  
  
  // // Gets all the beer by family name
  // getBeersByStyle: function() {
  //   return axios.get("/api/decks");
  // },
};