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
    back: "Tastes/Smells Like: Green apples, rotten-apples, freshly cut pumpkin. Possible Causes: Acetaldehyde is a naturally occurring chemical produced by yeast during fermentation. It is usually converted into Ethanol alcohol, although this process may take longer in beers with high alcohol content or when not enough yeast is pitched. Some bacteria can cause green apple flavors as well. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Alcoholic", 
    back: "Tastes/Smells Like: Overpowering alcohol flavor, bitter,acetone, paint thinner, spicy, sharp, undesirable “hot” sensation in the throat. Possible Causes: Fusel alcohols such as propanol, butanol, isobutanol, and isoamyl alcohol as well as phenolic alcohols such as tyrosol are usually responsible for unpleasant alcohol flavors.  The most common source for such alcohols is fermenting at too high of a temperature, however, keeping beer on the trub for too long or oxidation can cause this as well. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Astringent", 
    back: "Tastes/Smells Like: Tart, vinegary, tannin, drying, puckering sensation, may feel powdery or metallic in the mouth, like sucking on a grape skin or a tea bag. Possible Causes: Astringency can be caused by many different factors. Polyphenols or tannins are the number one cause of such flavors. Tannins are found in the skins or husks of the grain as well as in the skin of fruit. Steeping grain for too long or grain that has been excessively milled or crushed can release tannins. When mashing, if the pH exceeds 5.2–5.6, astringent flavors can be produced. Over-hopping can also lend a hand in creating astringent qualities. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Chlorophenol", 
    back: "Tastes/Smells Like: Plastic, Vinyl, Iodine. Possible Causes: Using chlorinated tap water to brew or rinse equipment is the most common cause for plastic-like or medicinal flavors. Medicinal flavors can also be the result of using cleanser or sanitizer that is chlorine or iodine based. Some wild yeast will contribute to a similar medicinal taste. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Cidery", 
    back: "Tastes/Smells Like: Apple Cider, Wine, Acetaldehyde (apples). Possible Causes: Using too much corn or cane sugar is the most common cause for wine or cidery flavors. Generally, 1 lb of sugar per 5 gallon batch is considered the limit before cidery flavors start developing. Acetaldehyde can also give off a cider-like quality. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Diacetyl", 
    back: "Tastes/Smells Like: Butter, Rancid Butter, Butterscotch, Slickness in the mouth and tongue. Possible Causes: Diacetyl is naturally produced by all yeast during fermentation and is then “reabsorbed” by yeast cells. Increased diacetyl or diacetyl that is not reabsorbed may be a result of high flocculating yeast, weak or mutated yeast, over or under oxygenating, low fermentation temperatures and weak or short boils. It is generally regarded as a flaw when detected in lagers. Some brewers, and drinkers alike, desire small amounts in ales. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Dimethyl Sulfide (DMS)", 
    back: "Tastes/Smells Like: Cooked vegetables, especially creamed corn, cabbage, tomato, shellfish/oyster-like flavors. Possible Causes: S-methyl methionine (SMM) is created during the malting process of grain and is later converted to DMS when heated. Darker base grains have less DMS as the kilning process converts SMM to DMS and drives it off before going into the wort. This makes DMS naturally more prevalent in pale ales and lagers. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Estery/Fruity", 
    back: "Tastes/Smells Like: Fruit, especially banana, to a lesser extent, pear, strawberry, raspberry, grapefruit. Possible Causes: Esters are a naturally occurring byproduct of fermentation. Certain ales are supposed to have these fruity flavors, such as Belgian ales and Hefeweizens (German Wheat beer) and certain types of yeast produce more esters than others. Strong fruity flavors or fruity flavors that are inappropriate for the style of beer are sometimes a result of under pitching or high fermentation temperatures. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Grassy", 
    back: "Tastes/Smells Like: Freshly cut grass, musty. Possible Causes: Musty, grassy aromas and flavors are usually the result of grains or extract that have developed mold or bacteria prior to being used. Hops, if not processed correctly prior to packaging/storing, can also develop similar off flavors. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Husky/Grainy", 
    back: "Tastes/Smells Like: Raw grain, dry, flavors comparable to astringency from tannins and/or oxidization. Possible Causes: Over milled grain can cause husky, grainy off flavors.  Highly toasted malts can also contribute to husky, grainy qualities. These flavors are most common in all-grain brews due to the amount of grain being used and the need to mash and sparge. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Medicinal", 
    back: "Tastes/Smells Like: Cough syrup, mouthwash, BandAid™,smoke, clove-like (spicy). Possible Causes: A variety of different phenols are almost always the cause for medicinal flavors in beer. Phenols can cause solvent, astringent, plastic and medicinal flavors. Medicinal-tasting phenols are usually brought out during mashing and/or sparging and are caused by incorrect pH levels, water amounts and temperatures. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Metallic", 
    back: "Tastes/Smells Like: Metal, mainly iron, also described as tasting like pennies or blood, Felt on the front of the mouth and back of the throat. Possible Causes: Wort being boiled in unprocessed  metals, mainly iron, but also aluminum, and steel (excluding stainless) is usually the source of metallic flavors.  Metallic flavors can also be extracted from metal brewing equipment, bottle caps and/or kegs. Using water that has high levels of iron will impart iron flavors. Improperly stored grains can also cause metallic off flavors. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Moldy", 
    back: "Tastes/Smells Like: Mold, mildew, musty, like mold on bread. Possible Causes: Mold can grow in beer and wort and is almost always the result of storing fermenting beer in a damp, dank area. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Oxidation", 
    back: "Tastes/Smells Like: Stale or old, wet cardboard, sherry, papery, pineapple, decaying vegetables, Increased bitterness, harshness. Possible Causes: Oxidation occurs when oxygen negatively reacts with the molecules in the wort or beer. An excessive level of oxygen being introduced to the beer, specially while wort is still warm or after fermentation is complete, can create cardboard of sherry-like flavors. Too much headspace in bottles can lead to oxidation as well. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Skunky", 
    back: "Tastes/Smells Like: Aroma of skunk, musty, can be similar to burned rubber or cat musk. Possible Causes: When hops are exposed to UV rays from sunlight or florescent lights, the alpha acids breakdown and react with the hydrogen sulfide that the yeast make. This reaction creates mercaptan. Mercaptan is the same chemical skunks secrete when they spray which is why the smell of “light struck” beer is so similar to that of a skunk. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Soapy", 
    back: "Tastes/Smells Like: Soap, detergent, oily, fatty. Possible Causes: Keeping beer in the primary fermenter for a long time after fermentation is complete can cause soapy flavors. After a while, the fatty acids in the trub start to break down and soap is essentially created. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Solvent-Like", 
    back: "Tastes/Smells Like: Paint thinner, nail polish remover (acetone), harsh, sharp, in extreme cases can cause a burning sensation of tongue and throat, comparable to harsh alcohol or estery flavors. Possible Causes: Solvent-like flavors and aromas are usually due to a combination of very high fermentation temperature and oxidation of the beer. Similar flavors can also result from using plastic that isn’t food grade. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Sulfur/Hydrogen Sulfide", 
    back: "Tastes/Smells Like: Sulfur, burning match, rotten egg, raw sewage. Possible Causes: Hydrogen sulfide, which is the chemical responsible for giving sulfur its unpleasant smell, is naturally produced by all yeast during fermentation. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Sour/Acidic", 
    back: "Tastes/Smells Like: Vinegary, acrid, felt on the sides of the tongue towards back of the mouth. Possible Causes: Extremely sour or vinegary flavors are almost always the result of a bacterial or wild yeast infection. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Sweet", 
    back: "Tastes/Smells Like: Overly sweet or sugary, sweet wort, cloyingly sweet. Possible Causes: Some degree of sweetness is desired in most beers, but a beer that tastes like unfermented wort is most likely the result of the yeast quitting prematurely. Stuck fermentation is when the yeast ferments for several days and then suddenly stops. The result is a gravity that is much higher than the correct final gravity for the wort. Using yeast that doesn’t have a high tolerance for alcohol in a high gravity beer can leave too much residual sweetness. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
  },
  {
    deckType: "public",
    deckName: "Off Flavors", 
    front: "Yeasty", 
    back: "Tastes Like: Yeast, bready, can be harsh or slightly sulfur-like. Possible Causes: Unhealthy or mutated yeast can release “yeasty” flavors into beer. If beer is left sitting on dead yeast for a long period of time, dead yeast starts to essentially “eat” itself (autolysis) and harsh or sulfury flavors are released. Young beer can taste yeasty if the yeast has not had a chance to flocculate completely. (https://www.cicerone.org/sites/default/files/resources/off_flavor.pdf)"
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
  