const db = require("../models");

// Defining methods for the flashCardController
module.exports = {
  findByStyle: function(req, res) {
    db.Beer
      .distinct('familyName')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findUserDecks: function(req, res) {
    db.User
      .distinct('userDecks.familyName')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByStyle: function(req, res) {
    db.Pubdeck
      .distinct('deckName')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
}