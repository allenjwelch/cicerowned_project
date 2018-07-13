const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cicerowned",
);

const PublicDeckSeed = [
  {
    deckType: "public",
    deckName: "Public Deck 1", 
    front: "Q1", 
    back: "A1"
  },
  {
    deckType: "public",
    deckName: "Public Deck 2", 
    front: "Q1", 
    back: "A1"
  },
  {
    deckType: "public",
    deckName: "Public Deck 3", 
    front: "Q1", 
    back: "A1"
  }

];

db.Pubdeck
.remove({})
.then(() => db.Pubdeck.collection.insertMany(PublicDeckSeed))
.then(data => {
  console.log(data.insertedIds.length + " public decks inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
  