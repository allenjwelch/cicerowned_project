const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cicerowned",
);

const PublicDeckSeed = [
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Acetaldehyde", 
    back: "Tastes/Smells Like: Green apples, rotten-apples, freshly cut pumpkin."
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Alcoholic", 
    back: "Tastes/Smells Like: Overpowering alcohol flavor, bitter,acetone, paint thinner, spicy, sharp, undesirable “hot” sensation in the throat"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Astringent", 
    back: "Tastes/Smells Like: Tart, vinegary, tannin, drying, puckering sensation, may feel powdery or metallic in the mouth, like sucking on a grape skin or a tea bag"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Chlorophenol", 
    back: "Tastes/Smells Like: Plastic, Vinyl, Iodine"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Cidery", 
    back: "Tastes/Smells Like: Apple Cider, Wine, Acetaldehyde (apples)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Diacetyl", 
    back: "Tastes/Smells Like: Butter, Rancid Butter, Butterscotch, Slickness in the mouth and tongue"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Dimethyl Sulfide (DMS)", 
    back: "Tastes/Smells Like: Cooked vegetables, especially creamed corn, cabbage, tomato, shellfish/oyster-like flavors"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Estery/Fruity", 
    back: "Tastes/Smells Like: Fruit, especially banana, to a lesser extent, pear, strawberry, raspberry, grapefruit"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Grassy", 
    back: "Possible Causes: Musty, grassy aromas and flavors are usually the result of grains or extract that have developed mold or bacteria prior to being used. "
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Husky/Grainy", 
    back: "Possible Causes: Over milled grain can cause husky, grainy off flavors."
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Medicinal", 
    back: "Tastes/Smells Like: Cough syrup, mouthwash, BandAid™,smoke, clove-like (spicy)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Metallic", 
    back: "Possible Causes: Wort being boiled in unprocessed  metals, mainly iron, but also aluminum, and steel (excluding stainless) is usually the source of metallic flavors"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Moldy", 
    back: "Possible Causes: Mold can grow in beer and wort and is almost always the result of storing fermenting beer in a damp, dank area."
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Oxidation", 
    back: "Tastes/Smells Like: Stale or old, wet cardboard, sherry, papery, pineapple, decaying vegetables, Increased bitterness, harshness"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Skunky", 
    back: "Tastes/Smells Like: Aroma of skunk, musty, can be similar to burned rubber or cat musk. Possible Causes: When hops are exposed to UV rays from sunlight or florescent lights, the alpha acids breakdown and react with the hydrogen sulfide that the yeast make. "
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Soapy", 
    back: "Possible Causes: Keeping beer in the primary fermenter for a long time after fermentation is complete can cause soapy flavors. "
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Sulfur/Hydrogen Sulfide", 
    back: "Possible Causes: Hydrogen sulfide, which is the chemical responsible for giving sulfur its unpleasant smell, is naturally produced by all yeast during fermentation."
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Sour/Acidic", 
    back: "Possible Causes: Extremely sour or vinegary flavors are almost always the result of a bacterial or wild yeast infection. "
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Yeasty", 
    back: "Tastes Like: Yeast, bready, can be harsh or slightly sulfur-like. Possible Causes: Unhealthy or mutated yeast can release “yeasty” flavors into beer. If beer is left sitting on dead yeast for a long period of time and harsh or sulfury flavors are released. "
  }

];

db.Pubdeck
.remove({})
.then(() => db.Pubdeck.collection.insertMany(PublicDeckSeed))
.then(data => {
  console.log(PublicDeckSeed.length + " public decks inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
  