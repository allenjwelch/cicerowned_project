const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .find({email: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate(
        {email:req.params.id},
        {
         $set:{email: req.params.id},
         $set:{userName: "test"},
         $set:{decksCompleted: []},
         $set:{decksCreated: []},
        },
        {
          upsert:true,
          setDefaultOnInsert:true
        }, 
       )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateScore: function(req, res){
    db.User
      .findOneAndUpdate(
        {email:req.params.id},
        {
          $push:{decksCompleted: 
            [
              [req.params.familyName, req.params.score]
            ]
          },
          $addToSet:{badgesEarned: req.params.badgesEarned,decksLearned: req.params.familyName},
        },  
        {$push:{loggedInDates: Date.now()}}    
       )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};