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
      ["Belgian-Style Blonde Ale",9,10,"07-01-2018"],
      ["Belgian-Style Dubbel",7,10,"07-01-2018"]
    ],
    decksCreated:[],
    badgesEarned:[],
    loggedInDates:["07-01-2018","06-30-2018","06-27-2018"]
  },
  {
    userName: "susandaven",
    email: "susanldavenport@gmail.com",
    decksCompleted: [
      ["Belgian-Style Dubbel",7,10,"07-01-2018"]
    ],
    decksCreated:[],
    badgesEarned:[],
    loggedInDates:["06-30-2018","06-27-2018"]
  },
  {
    userName: "Eddie",
    email: "erodriguez87@gmail.com",
    decksCompleted: [
      ["Belgian-Style Dubbel",7,10,"07-01-2018"],["Belgian-Style Dubbel",8,10,"07-01-2018"],["Belgian-Style Dubbel",9,10,"07-01-2018"],["Belgian-Style Dubbel",10,10,"07-01-2018"]
    ],
    decksCreated:[],
    badgesEarned:[],
    loggedInDates:["06-30-2018","06-27-2018"]
  }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(UserInfoSeed))
.then(data => {
  console.log(data.insertedIds.length + " users inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});