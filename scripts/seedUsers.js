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
      ["Porters",1],
      ["Porters",2],
      ["Porters",2],
      ["Porters",4],
      ["Porters",4],
      ["Porters",6],
      ["Porters",7],
      ["Porters",8],
      ["Porters",10],
      ["Pilseners and Pale Lagers",1],
      ["Pilseners and Pale Lagers",2],
      ["Pilseners and Pale Lagers",5],
      ["Pilseners and Pale Lagers",5],
      ["Pilseners and Pale Lagers",6],
      ["Pilseners and Pale Lagers",7],
      ["Pilseners and Pale Lagers",8],
      ["Pilseners and Pale Lagers",9],
      ["Pilseners and Pale Lagers",10]
    ],
    decksLearned:["Porters",'Pilseners and Pale Lagers'],
    decksCreated:[],
    badgesEarned:["Pilseners and Pale Lagers", "Porters"],
    loggedInDates:["07-01-2018","06-30-2018","06-27-2018"]
  },
  {
    userName: "susandaven",
    email: "susanldavenport@gmail.com",
    decksCompleted: [
      ["Porters",1],
      ["Porters",2],
      ["Porters",2],
      ["Porters",4],
      ["Porters",4],
      ["Porters",6],
      ["Porters",7],
      ["Porters",8],
      ["Porters",10],
      ["Pilseners and Pale Lagers",1],
      ["Pilseners and Pale Lagers",2],
      ["Pilseners and Pale Lagers",5],
      ["Pilseners and Pale Lagers",5],
      ["Pilseners and Pale Lagers",6],
      ["Pilseners and Pale Lagers",7],
      ["Pilseners and Pale Lagers",8],
      ["Pilseners and Pale Lagers",9],
      ["Pilseners and Pale Lagers",10]
    ],
    decksLearned:["Porters",'Pilseners and Pale Lagers'],
    decksCreated:[],
    badgesEarned:["Pilseners and Pale Lagers", "Porters"],
    loggedInDates:["06-30-2018","06-27-2018"]
  },
  {
    userName: "Eddie",
    email: "erodriguez87@gmail.com",
    decksCompleted: [
      ["Porters",1],
      ["Porters",2],
      ["Porters",2],
      ["Porters",4],
      ["Porters",4],
      ["Porters",6],
      ["Porters",7],
      ["Porters",8],
      ["Porters",10],
      ["Pilseners and Pale Lagers",1],
      ["Pilseners and Pale Lagers",2],
      ["Pilseners and Pale Lagers",5],
      ["Pilseners and Pale Lagers",5],
      ["Pilseners and Pale Lagers",6],
      ["Pilseners and Pale Lagers",7],
      ["Pilseners and Pale Lagers",8],
      ["Pilseners and Pale Lagers",9],
      ["Pilseners and Pale Lagers",10]
    ],
    decksLearned:["Porters",'Pilseners and Pale Lagers'],
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