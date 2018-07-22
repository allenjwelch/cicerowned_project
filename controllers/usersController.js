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
         $set:{badgesEarned: []},
         $set:{loggedInDates:[]}
        },
        {
          upsert:true,
          setDefaultOnInsert:true
        }, 
       )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateScore: function(req,res){
    console.log('update score route was hit at the CONTROLLER ============================')
    console.log('user email passed to update ' + req.params.id)
    db.User
      .findOneAndUpdate(
        {email:req.params.id},
        {
          $push:{decksCompleted: req.params.familyName},
        },
        {
          upsert:true,
          setDefaultOnInsert:true
        }, 
       )
      .then(dbModel => res.json(dbModel), console.log(dbModel))
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