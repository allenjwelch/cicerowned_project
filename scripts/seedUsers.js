const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cicerowned",
);

// User information Section ======================================
const UserInfoSeed = [
  {
    userName: "ajwelch",
    email: "allenjwelch@gmail.com",
    userDecks: [ "Public Deck 1", "Public Deck 2" ],
    decksCompleted: [
      ["Pilseners and Pale Lagers", "Porters"],
      [2,1,3,4,5,6,7],
      [4,5,5,5,6,7,8,9,9,10]
    ],
    decksCreated:[],
    badgesEarned:["Pilseners and Pale Lagers", "Porters"],
    loggedInDates:["07-01-2018","06-30-2018","06-27-2018"]
  },
  {
    userName: "susandaven",
    email: "susanldavenport@gmail.com",
    decksCompleted: [
      ["Pilseners and Pale Lagers", "Porters"],
      [2,1,3,4,5,6,7,9,10,11,12],
      [4,5,5,5,6,7,8,9,9,10]
    ],
    decksCreated:[],
    badgesEarned:["Pilseners and Pale Lagers", "Porters"],
    loggedInDates:["06-30-2018","06-27-2018"]
  },
  {
    userName: "Eddie",
    email: "erodriguez87@gmail.com",
    decksCompleted: [
      ["Pilseners and Pale Lagers", "Porters", "Belgian Styles"],
      [2,1,3,4,5,6,7,9,10,11,12], //how well a user has done each time they take a quiz
      [4,5,5,5,6,7,8,9,9,10],
      [6,5,4,4,3,4,3,4,3,2,2]
    ],
    decksCreated:[],
    badgesEarned:["Pilseners and Pale Lagers", "Porters"],
    loggedInDates:["06-30-2018","06-27-2018"]
  }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(UserInfoSeed))
.then(data => {
  console.log(UserInfoSeed.length + " users inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});