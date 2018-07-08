const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  styleName: { type: String, required: true },
  familyName: { type: String, required: true },
  briefDescription: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  OG: { type: String, required: true },
  FG: { type: String, required: true },
  ABV: { type: String, required: true },
  IBU: { type: String, required: true },
  BU: { type: String, required: true },
  SRM: { type: String, required: true },
  examples: []
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
