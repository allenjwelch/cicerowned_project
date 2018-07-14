const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pubDeckSchema = new Schema({
  deckType: { type: String, required: true },
  deckName: { type: String, required: true },
  front: { type: String, required: true },
  back: { type: String, required: true }
});


const Pubdeck = mongoose.model("Pubdeck", pubDeckSchema);

module.exports = Pubdeck;
