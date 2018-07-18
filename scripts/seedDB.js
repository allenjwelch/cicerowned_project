const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file sets up the beer information
//need to add public/private
//need to add timestamp
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cicerowned",
);

// Beer information Section =====================================
  const beerStylesSeed = [
    {
      styleName: "Belgian-Style Blonde Ale",
      familyName: "Belgian Styles",
      briefDescription: "The Belgian-style blonde ale is typically easy-drinking, with a low but pleasing hop bitterness. This is a light- to medium-bodied ale, with a low malt aroma that has a spiced and sometimes fruity-ester character.",
      description: "The Belgian-style blonde ale is typically easy-drinking, with a low but pleasing hop bitterness. This is a light- to medium-bodied ale, with a low malt aroma that has a spiced and sometimes fruity-ester character. Sugar is sometimes added to lighten the perceived body. This style is medium in sweetness and not as bitter as Belgian-style tripels or golden strong ales. It is usually brilliantly clear. The overall impression is balance between light sweetness, spice and low to medium fruity ester flavors. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-blonde-ale.jpg",
      OG: "1.054 - 1.068",
      FG: "1.008 - 1.015",
      ABV: "6.3% - 7.9%",
      IBU: "15 - 30",
      BU: "0.28 - 0.44",
      SRM: "4 - 7",
      examples: [ 
          "Blonde: Allagash Brewing Co.", 
          "Tiburon Blonde: Marin Brewing Co."
        
      ]
    }, 
    {
      styleName: "Belgian-Style Dubbel",
      familyName: "Belgian Styles",
      briefDescription: "The Belgian-style dubbel ranges from brown to very dark in color. They have a malty sweetness and can have cocoa and caramel aromas and flavors. ",
      description: "The Belgian-style dubbel ranges from brown to very dark in color. They have a malty sweetness and can have cocoa and caramel aromas and flavors. Hop bitterness is medium-low to medium. Yeast-generated fruity esters (especially banana) can be apparent. Often bottle-conditioned, a slight yeast haze and flavor may be evident. “Dubbel” meaning “double,” this beer is still not so big in intensity as to surpass the Belgian-style quadrupel that is often considered its sibling. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-dubbel.jpg",
      OG: "1.060 - 1.075",
      FG: "1.012 - 1.016",
      ABV: "6.3% - 7.6%",
      IBU: "20 - 35",
      BU: "0.33 - 0.40",
      SRM: "16 - 36",
      examples: [ 
          "Brother David's Double: Anderson Valley Brewing Co.", 
          "Abbey Dubbel: Elm City Brewing Co."
      ]
    },
    {
      styleName: "Belgian-Style Pale Ale",
      familyName: "Belgian Styles",
      briefDescription: "The Belgian-style pale ale is gold to copper in color and can have caramel or toasted malt flavor. The style is characterized by low but noticeable hop bitterness, flavor and aroma. ",
      description: "The Belgian-style pale ale is gold to copper in color and can have caramel or toasted malt flavor. The style is characterized by low but noticeable hop bitterness, flavor and aroma. These beers were inspired by British pale ales. They are very sessionable. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-pale-ale.jpg",
      OG: "1.044 - 1.054",
      FG: "1.008 - 1.014",
      ABV: "4.1% - 6.3%",
      IBU: "20 - 30",
      BU: "0.45 - 0.56",
      SRM: "6 - 12",
      examples: [ 
          "Rare Vos: Brewery Ommegang", 
          "Saints Devotion: The Lost Abbey"
      ]
    }, 
    {
      styleName: "Belgian-Style Quadrupel",
      familyName: "Belgian Styles",
      briefDescription: "The Belgian-style Quadrupel is amber to dark brown in color. Caramel, dark sugar and malty sweet flavors dominate, with medium-low to medium-high hop bitterness. ",
      description: "The Belgian-style Quadrupel is amber to dark brown in color. Caramel, dark sugar and malty sweet flavors dominate, with medium-low to medium-high hop bitterness. Quads have a relatively light body compared to their alcoholic strength. If aged, oxidative qualities should be mild and not distracting. Sometimes referred to as Belgian strong dark. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-quadrupel.jpg",
      OG: "1.084 - 1.120",
      FG: "1.014 - 1.020",
      ABV: "9.1% - 14.2%",
      IBU: "25 - 50",
      BU: "0.30 - 0.42",
      SRM: "8 - 20",
      examples: [ 
          "Four: Allagash Brewing Co.", 
          "The Sixth Glass: Boulevard Brewing Co."
      ]
    }, 
    {
      styleName: "Belgian-Style Saison",
      familyName: "Belgian Styles",
      briefDescription: "Belgian-style saison may have Brettanomyces or lactic character, and fruity, horsey, goaty and/or leather-like aromas and flavors. ",
      description: "Beers in this category are gold to light amber in color. Often bottle-conditioned, with some yeast character and high carbonation. Belgian-style saison may have Brettanomyces or lactic character, and fruity, horsey, goaty and/or leather-like aromas and flavors. Specialty ingredients, including spices, may contribute a unique and signature character. Commonly called “farmhouse ales” and originating as summertime beers in Belgium, these are not just warm-weather treats. U.S. craft brewers brew them year-round and have taken to adding a variety of additional ingredients. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-saison.jpg",
      OG: "1.040 - 1.080",
      FG: "1.010 - 1.014",
      ABV: "4.4% - 8.4%",
      IBU: "20 - 38",
      BU: "0.50 - 0.50",
      SRM: "4 - 14",
      examples: [ 
          "Saison: Funkwerks", 
          "Red Barn: The Lost Abbey"
      ]
    }, 
    {
      styleName: "Belgian-Style Tripel",
      familyName: "Belgian Styles",
      briefDescription: "Complex, sometimes mild spicy flavor characterizes this style. Yeast-driven complexity is common. Tripels are often on the higher end of the ABV spectrum, yet are approachable to many different palates.",
      description: "Complex, sometimes mild spicy flavor characterizes this style. Yeast-driven complexity is common. Tripels are often on the higher end of the ABV spectrum, yet are approachable to many different palates. These beers are commonly bottle-conditioned and finish dry. The Belgian-style tripel is similar to Belgian-style golden strong ales, but are generally darker and have a more noticeable malt sweetness. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-tripel.jpg",
      OG: "1.070 - 1.092",
      FG: "1.008 - 1.018",
      ABV: "7.1% - 10.1%",
      IBU: "20 - 45",
      BU: "0.29 - 0.49",
      SRM: "4 - 9",
      examples: [ 
          "Allagash Tripel: Allagash Brewing Co.", 
          "Tripel: Green Flash Brewing Co."
      ]
    }, 
    {
      styleName: "Belgian-Style Golden Strong Ale",
      familyName: "Belgian Styles",
      briefDescription: "The Belgian-style golden strong ale is fruity, complex and often on the higher end of the ABV spectrum, yet are approachable to many different palates. ",
      description: "The Belgian-style golden strong ale is fruity, complex and often on the higher end of the ABV spectrum, yet are approachable to many different palates. Look for a characteristic spiciness from Belgian yeast and a highly attenuated dry finish. This style is traditionally drier and lighter in color than a Belgian-style tripel. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-golden-strong-ale.jpg",
      OG: "1.064 - 1.096",
      FG: "1.008 - 1.024",
      ABV: "7.1% - 11.2%",
      IBU: "20 - 50",
      BU: "0.31 - 0.52",
      SRM: "3.5 - 10",
      examples: [ 
          "Pranqster: North Coast Brewing Co.", 
          "Brooklyn Local 1: Brooklyn Brewery"
      ]
    }, 
    {
      styleName: "German-Style Bock",
      familyName: "Bocks",
      briefDescription: "Traditional bock beers are all-malt brews and are high in malt sweetness.",
      description: "Traditional bock beers are all-malt brews and are high in malt sweetness. Malt character should be a balance of sweetness and toasted or nut-like malt. “Bock” translates as “goat”! Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-bock.jpg",
      OG: "1.066 - 1.074",
      FG: "1.018 - 1.024",
      ABV: "6.3% - 7.6%",
      IBU: "20 - 30",
      BU: "0.30 - 0.41",
      SRM: "20 - 30",
      examples: [ 
          "Troegenator Double Bock: Troegs Brewing Co.", 
          "Butt Head Bock: Tommyknocker Brewery & Pub"
      ]
    }, 
    {
      styleName: "German-Style Doppelbock",
      familyName: "Bocks",
      briefDescription: "“Doppel” meaning “double,” this style is a bigger and stronger version of the lower-gravity German-style bock beers.",
      description: "“Doppel” meaning “double,” this style is a bigger and stronger version of the lower-gravity German-style bock beers. Originally made by monks in Munich, the doppelbock beer style is very food-friendly and rich in melanoidins reminiscent of toasted bread. Color is copper to dark brown. Malty sweetness is dominant but should not be cloying. Malt character is more reminiscent of fresh and lightly toasted Munich-style malt, more so than caramel or toffee malt. Doppelbocks are full-bodied, and alcoholic strength is on the higher end. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-doppelbock.jpg",
      OG: "1.074 - 1.080",
      FG: "1.014 - 1.020",
      ABV: "6.6% - 7.9%",
      IBU: "17 - 27",
      BU: "0.23 - 0.34",
      SRM: "12 - 30",
      examples: [ 
          "Samuel Adams Double Bock: Boston Beer Co.", 
          "Uber Bock: Great Dane Pub & Brewing Co."
      ]
    }, 
    {
      styleName: "German-Style Maibock",
      familyName: "Bocks",
      briefDescription: "Also called “heller bock” (meaning “pale bock”), the German-style Maibock is paler in color and more hop-centric than traditional bock beers.",
      description: "Also called “heller bock” (meaning “pale bock”), the German-style Maibock is paler in color and more hop-centric than traditional bock beers. A lightly toasted and/or bready malt character is often evident. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-heller-bock-maibock.jpg",
      OG: "1.066 - 1.074",
      FG: "1.012 - 1.020",
      ABV: "6.3% - 8.1%",
      IBU: "20 - 38",
      BU: "0.30 - 0.51",
      SRM: "4 - 9",
      examples: [ 
          "Elixir Maibock: Abita Brewery", 
          "Maibock: Mad Fox Brewing Co."
      ]
    }, 
    {
      styleName: "German-Style Weizenbock",
      familyName: "Bocks",
      briefDescription: "The German-style Weizenbock is a wheat version of a German-style bock, or a bigger and beefier dunkelweizen.",
      description: "The German-style Weizenbock is a wheat version of a German-style bock, or a bigger and beefier dunkelweizen. Malt mellanoidins and weizen ale yeast are the star ingredients. If served with yeast, the appearance may appropriately be very cloudy. With flavors of bready malt and dark fruits like plum, raisin, and grape, this style is low on bitterness and high on carbonation. Balanced clove-like phenols and fruity, banana-like esters produce a well-rounded aroma. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-weizenbock.jpg",
      OG: "1.066 - 1.080",
      FG: "1.016 - 1.028",
      ABV: "7.0% - 9.5%",
      IBU: "15 - 35",
      BU: "0.23 - 0.44",
      SRM: "4.5 - 30",
      examples: [ 
          "Glockenspiel Weizenbock: Great Lakes Brewing Co.", 
          "Moonglow: Victory Brewing Co."
      ]
    }, 
    {
      styleName: "English-Style Brown Ale",
      familyName: "Brown Ales",
      briefDescription: "A bona fide English beer classic, English-style brown ale is easily one of the most iconic beer styles. Toasty, robust and with a bit of chocolate maltiness, the English brown ale is a meal in a glass, but offers unlimited opportunities for memorable food pairings.",
      description: "A bona fide English beer classic, English-style brown ale is easily one of the most iconic beer styles. Toasty, robust and with a bit of chocolate maltiness, the English brown ale is a meal in a glass, but offers unlimited opportunities for memorable food pairings. Neither flashy nor boring, the English brown is a beer with enough variation to keep devotees ordering them time and time again.English-style brown ales have two variations: a dry, roasted version that is said to have originated from northern England, and a sweeter, less attenuated brown ale variety that is believed to have gained favor in the southern portion of England. Both offer a toasted nut, chocolatey character indicative of brown ales. The English brown ale varieties will not be as hoppy or bitter as their American counterparts and favor English hops as well as characterful English ale yeast. Either style can be excellent with a variety of foods, particularly braised meats, but they are perfectly fine to be enjoyed on their own. The alcohol content of this beer is characteristically moderate and does not typically exceed 5.5 percent ABV.It’s safe to say that beer will never go out of style, but with all of the different forms of beer on the craft beer scene, it can be easy for brown ales to get pushed to the side. English-style brown ale is often one of those beers that people look past — but you should take the opportunity to try this traditional style when you’re at a craft brewery. With relatively low bitterness and two distinct varieties that best complement different pairings, it’s one of the most versatile English beers ever created. Whether you prefer sweeter or more hop-forward ales, there is an English brown ale that’s right for you.If you are in the mood to try one of these classic English brown ale beers, our “Find a Brewery” map can help you do precisely that. By entering your location, any particular state, or the name of a specific brewery, we can point you in the direction of the nearest brewery where you can find your next favorite beer, which could be a variation of an English-style brown ale.If you enjoy the website and are interested in a convenient way to learn more about English-style brown ale, or any other style of beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-brown-ale.jpg",
      OG: "1.040 - 1.050",
      FG: "1.008 - 1.014",
      ABV: "4.2% - 6.0%",
      IBU: "15 - 25",
      BU: "0.38 - 0.50",
      SRM: "12 - 17",
      examples: [ 
          "Bandit Brown: City Star Brewing", 
          "Nautical Nut Brown: AleSmith Brewing Co."
      ]
    }, 
    {
      styleName: "American Brown Ale",
      familyName: "Brown Ales",
      briefDescription: "Roasted malt, caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma for the American brown ale. ",
      description: "Roasted malt, caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma for the American brown ale. American-style brown ales have evident low to medium hop flavor and aroma and medium to high hop bitterness. The history of this style dates back to U.S. homebrewers who were inspired by English-style brown ales and porters. It sits in flavor between those British styles and is more bitter than both. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-brown-ale.jpg",
      OG: "1.040 - 1.060",
      FG: "1.010 - 1.018",
      ABV: "4.2% - 6.3%",
      IBU: "25 - 45",
      BU: "0.62 - 0.75",
      SRM: "15 - 26",
      examples: [ 
          "Brooklyn Brown Ale: Brooklyn Brewery", 
          "Settle Down Brown: Odell Brewing Co."
      ]
    }, 
    {
      styleName: "English-Style Mild",
      familyName: "Brown Ales",
      familyName: "Brown Ales",
      briefDescription: "Malt and caramel are part of the flavor and aroma profile of the English-style mild while licorice and roast malt tones may sometimes contribute as well. ",
      description: "Malt and caramel are part of the flavor and aroma profile of the English-style mild while licorice and roast malt tones may sometimes contribute as well. Hop bitterness is very low to low. U.S. brewers are known to make lighter-colored versions as well as the more common “dark mild.” These beers are very low in alcohol, yet often are still medium-bodied due to increased dextrin malts. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-dark-mild.jpg",
      OG: "1.030 - 1.036",
      FG: "1.004 - 1.008",
      ABV: "3.4% - 4.4%",
      IBU: "10 - 24",
      BU: "0.33 - 0.67",
      SRM: "17 - 34",
      examples: [ 
          "SS Minnow Mild: Dry Dock Brewing Co.", 
          "Bristlecone: Uinta Brewing Co."
      ]
    }, 
    {
      styleName: "German-Style Dunkel",
      familyName: "Dark Lagers",
      briefDescription: "The German-style dunkel is a bottom-fermented lager style beer. The word “dunkel” is German for “dark,” and this dark beer style offers beer lovers balanced flavors of chocolate, bread crust and caramel.",
      description: "The German-style dunkel is a bottom-fermented lager style beer. The word “dunkel” is German for “dark,” and this dark beer style offers beer lovers balanced flavors of chocolate, bread crust and caramel. The dunkel is a classic German lager that craft brewers are fond of brewing and countless people across the world are fond of enjoying. Like most German beers, dunkel beer is a great candidate for food pairing, matching up well to grilled meats.A German-style dunkel, sometimes referred to as a Munchner dunkel, should have an aroma comprised of chocolate roasted malt and bread or biscuit-like features that stem from the use of Munich malt. Despite the malt forward flavor profile, this beer does not offer an overly sweet impression. Rather, you’ll find a mild balance between the distinct character of malt and the refined touch of bitterness from noble hops, indicative of what many beer drinkers expect from German beer styles.Comprised of mostly Munich malt, the German dunkel’s caramelized malt experience is the product of a chemical process known as the Maillard reaction. This reaction is what lends Munich malt its distinctive bread crust flavor. While barley malt is kilned, the malt browns, creating a myriad of caramelized flavors. Browned proteins, like grilled pork chops and oven-browned bread both benefit from the Maillard reaction. Keep this in mind when you are pairing these types of foods with beers since dishes that showcase flavors derived from the Maillard reaction complement each other very well. These flavors are what make grilled pork chops a great meal to enjoy with a German dunkel beer.The CraftBeer.com “Find a Brewery” map is designed to help everyone from the craft beer connoisseur to the casual craft beer drinker find their first, or next, favorite brewery or brewpub. Through searching by location, brewery name, or even by state, we can point you in the direction of the nearest brewery where you can find your next favorite beer, which could be a German dunkel.If you enjoy the website and are interested in a convenient way to learn more about German beer, what types of foods and flavors match best with German-style beers, or any other variety of beer of your choosing, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-dunkel.jpg",
      OG: "1.048 - 1.056",
      FG: "1.014 - 1.018",
      ABV: "4.8% - 5.3%",
      IBU: "16 - 25",
      BU: "0.33 - 0.45",
      SRM: "15 - 17",
      examples: [ 
          "Moondoor Dunkel: Wibby Brewing", 
          "Knight Ryder Munich Dunkel: Equinox Brewing"
      ]
    }, 
    {
      styleName: "American Amber Lager",
      familyName: "Dark Lagers",
      briefDescription: "A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character.",
      description: "A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character. Hop bitterness can range from very low to medium-high. Brewers may use decoction mash and dry-hopping to achieve advanced flavors. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-amber-lager.jpg",
      OG: "1.042 - 1.056",
      FG: "1.010 - 1.018",
      ABV: "4.8% - 5.4%",
      IBU: "18 - 30",
      BU: "0.43 - 0.54",
      SRM: "6 - 14",
      examples: [ 
          "Sam Adams Boston Lager: Boston Beer Co.", 
          "Lager: Brooklyn Brewery"
      ]
    }, 
    {
      styleName: "German-Style Marzen / Oktoberfest",
      familyName: "Dark Lagers",
      briefDescription: "A beer rich in malt with a balance of clean, hop bitterness. Bread or biscuit-like malt aroma and flavor is common. ",
      description: "A beer rich in malt with a balance of clean, hop bitterness. Bread or biscuit-like malt aroma and flavor is common. Originating in Germany, this style used to be seasonally available in the spring (“Marzen” meaning “March”), with the fest-style versions tapped in October. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-marzen-oktoberfest.jpg",
      OG: "1.050 - 1.060",
      FG: "1.012 - 1.020",
      ABV: "5.1% - 6.0%",
      IBU: "18 - 25",
      BU: "0.36 - 0.42",
      SRM: "4 - 15",
      examples: [ 
          "Rhinofest: Lost Rhino Brewing Co.", 
          "Shiner Oktoberfest: Spoetzl Brewery"
      ]
    }, 
    {
      styleName: "German-Style Schwarzbier",
      familyName: "Dark Lagers",
      briefDescription: "Sometimes called black lagers, they may remind some of German-style dunkels, but schwarzbiers are drier, darker and more roast-oriented.",
      description: "Sometimes called black lagers, they may remind some of German-style dunkels, but schwarzbiers are drier, darker and more roast-oriented.These very dark brown to black beers have a surprisingly pale-colored foam head (not excessively brown) with good cling quality. They have a mild roasted malt character without the associated bitterness. Malt flavor and aroma is at low to medium levels of sweetness. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-schwarzbier.jpg",
      OG: "1.044 - 1.052",
      FG: "1.010 - 1.016",
      ABV: "3.8% - 4.9%",
      IBU: "22 - 30",
      BU: "0.50 - 0.58",
      SRM: "25 - 30",
      examples: [ 
          "Once You Go Schwarz...: Figueroa Mountain Brewing", 
          "Black Bavarian: Sprecher Brewing Co."
      ]
    }, 
    {
      styleName: "Vienna-Style Lager",
      familyName: "Dark Lagers",
      briefDescription: "Vienna Lager ranges from copper to reddish brown in color. The beer is characterized by malty aroma and slight malt sweetness. ",
      description: "Vienna Lager ranges from copper to reddish brown in color. The beer is characterized by malty aroma and slight malt sweetness. The malt aroma and flavor should have a notable degree of toasted and/or slightly roasted malt character. Hop bitterness is low to medium-low. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/vienna-style-lager.jpg",
      OG: "1.046 - 1.056",
      FG: "1.012 - 1.018",
      ABV: "4.8% - 5.4%",
      IBU: "22 - 28",
      BU: "0.48 - 0.50",
      SRM: "12 - 26",
      examples: [ 
          "Eliot Ness: Great Lakes Brewing Co.", 
          "Vienna: Sierra Nevada Brewing Co."
      ]
    }, 
    {
      styleName: "French-Style Biere de Garde",
      familyName: "Hybrid Beers",
      briefDescription: "Biere de Garde translates as “beer for keeping.” This style is popping up more and more from U.S. producers. Blond, amber and brown versions exist. ",
      description: "Biere de Garde translates as “beer for keeping.” This style is popping up more and more from U.S. producers. Blond, amber and brown versions exist. Biere de garde examples are light amber to chestnut brown or red in color. This style is characterized by a toasted malt aroma and slight malt sweetness. Flavor of alcohol is evident. Often bottle-conditioned, with some yeast character. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/biere-de-garde.jpg",
      OG: "1.060 - 1.080",
      FG: "1.012 - 1.024",
      ABV: "4.4% - 8.0%",
      IBU: "20 - 30",
      BU: "0.33 - 0.38",
      SRM: "7 - 16",
      examples: [ 
          "Domaine DuPage: Two Brothers Brewing Co.", 
          "Biere De Garde: Schlafly Beer,  The Saint Louis Brewery"
      ]
    }, 
    {
      styleName: "California Common",
      familyName: "Hybrid Beers",
      briefDescription: "The California common is brewed with lager yeast but fermented at ale fermentation temperatures. There is a noticeable degree of toasted malt and/or caramel-like malt character in flavor and often in aroma.",
      description: "The California common is brewed with lager yeast but fermented at ale fermentation temperatures. There is a noticeable degree of toasted malt and/or caramel-like malt character in flavor and often in aroma. Often referred to as “steam beer” and made famous by San Francisco’s Anchor Brewing Company. Seek out woody and mint flavor from the Northern Brewer hops. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/california-common.jpg",
      OG: "1.045 - 1.056",
      FG: "1.010 - 1.018",
      ABV: "4.6% - 5.7%",
      IBU: "35 - 45",
      BU: "0.78 - 0.80",
      SRM: "8 - 15",
      examples: [ 
          "Anchor Steam: Anchor Brewing Co.", 
          "2x Steam: Southern Tier Brewing Co."
      ]
    }, 
    {
      styleName: "German-Style Brown/Altbier",
      familyName: "Hybrid Beers",
      briefDescription: "Originally from the Düsseldorf area of Germany, the German-Style Brown/Altbier strikes a balance between hop and malt flavors and aromas, but can have low fruity esters and some peppery and floral hop aromas.",
      description: "Originally from the Düsseldorf area of Germany, the German-Style Brown/Altbier strikes a balance between hop and malt flavors and aromas, but can have low fruity esters and some peppery and floral hop aromas. Before Germany had lager beer, it had ales. Alt, meaning “old,” pays homage to one rebel region in Germany which did not lean into lagering. U.S. producers celebrate the ale revolution beautifully with this top-fermented German beer style. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-brownaltbier.jpg",
      OG: "1.044 - 1.052",
      FG: "1.008 - 1.014",
      ABV: "4.6% - 5.6%",
      IBU: "25 - 52",
      BU: "0.57 - 1.00",
      SRM: "11 - 19",
      examples: [ 
          "Deep Roots: Red Cypress Brewery", 
          "Little Red Cap: Grimm Brothers Brewhouse"
      ]
    }, 
    {
      styleName: "German-Style Kolsch",
      familyName: "Hybrid Beers",
      briefDescription: "Crisp, delicate and oh-so-drinkable, the German-style Kolsch is a beer hybrid, meaning that its production and subsequent beer drinking experience saddles qualities of both lager beers and ale beers. ",
      description: "Crisp, delicate and oh-so-drinkable, the German-style Kolsch is a beer hybrid, meaning that its production and subsequent beer drinking experience saddles qualities of both lager beers and ale beers. These light and refreshing ale-lager hybrids are perfect for warm summer days and have become a favored style by American craft brewers and beer lovers alike. In addition to their thirst quenching ability, they also are a fun beer to enjoy with food, including traditional German sausages and kraut.The German-style Kolsch is light in color and malt character. This style’s fermentation process yields a light, vinous character which is accompanied by a slightly dry, crisp finish. Ale yeast is used for fermentation, though lager yeast is sometimes used in the bottle or final cold-conditioning process.Kolsch beer stems from Cologne (Koln), Germany, but has found its way onto America’s craft beer scene like many other German beers. Technically, for beer to be called a Kolsch, it has to come from the city of Cologne, but that hasn’t stopped American craft brewers from embracing the Kolsch style of beers. Craft beer connoisseurs have been enjoying American Kolsch style beers during the warm seasons since the Kolsch was introduced to the American craft scene. This beer style pairs best with bratwurst, nutty cheeses, and even lighter desserts like apricot cake. We want to help you find a brewery that makes your next favorite Kolsch beer.You don’t have to look very hard to find a Kolsch style beer that you enjoy, but we want to help you stay on top of all the small and independent breweries on the craft beer scene. We’ve created an interactive “Find a Brewery” tool to help you do precisely that. By allowing the map to use your precise location, searching for a specific brewery, or searching by state, our map will help you keep track of the breweries in your area and even find new breweries and brewpubs while you’re traveling. We want to help you find your next favorite craft beer — which could be a Kolsch style beer — and our map is designed to do that.Finding your next favorite Kolsch beer doesn’t have to stop here. If you enjoy the website and are interested in a convenient way to learn more about German beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-kolsch.jpg",
      OG: "1.042 - 1.048",
      FG: "1.006 - 1.010",
      ABV: "4.8% - 5.3%",
      IBU: "18 - 28",
      BU: "0.43 - 0.58",
      SRM: "3 - 6",
      examples: [ 
          "Light of Cologne: Ornery Beer Co.", 
          "Travelin' Light Kolsch: Left Hand Brewing Co."
      ]
    }, 
    {
      styleName: "American Cream Ale",
      familyName: "Hybrid Beers",
      briefDescription: "The American cream ale is a mild, pale, light-bodied ale, made using a warm fermentation (top or bottom fermenting yeast) and cold lagering. ",
      description: "The American cream ale is a mild, pale, light-bodied ale, made using a warm fermentation (top or bottom fermenting yeast) and cold lagering. Despite being called an ale, when being judged in competitions it is acceptable for brewers to use lager yeast. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-cream-ale.jpg",
      OG: "1.044 - 1.052",
      FG: "1.004 - 1.010",
      ABV: "4.3% - 5.7%",
      IBU: "10 - 22",
      BU: "0.23 - 0.42",
      SRM: "2 - 5",
      examples: [ 
          "El Sully: 21st Amendment Brewery", 
          "Spotted Cow: New Glarus Brewing Co."
      ]
    }, 
    {
      styleName: "Irish-Style Red Beer",
      familyName: "Hybrid Beers",
      briefDescription: "Irish red ale is known for its unique malty taste and is on the lower side of the bitterness and alcohol content scales. ",
      description: "Irish red ale is known for its unique malty taste and is on the lower side of the bitterness and alcohol content scales. If you love American craft beer, the Irish red ale beer remains a great style for beer lovers to seek out and appreciate.The Irish-style red ale is a balanced beer that uses a moderate amount of kilned malts and roasted barley in the recipe, which gives the beer the color for which it is named. Featuring an approachable hop bitterness which rests on the palate, this typically amber-colored beer is brewed as a lager or an ale, and can often have a medium, candy-like caramel malt sweetness. This style may contain adjuncts such as corn, rice, and sugar, which help dry out the beer’s finish and lessen the body. It also often contains roasted barley, lending low roasted notes, darker color and possible creation of a tan collar of foam on top. With notes of caramel, toffee and sometimes low-level diacetyl (butter), think of the Irish red ale beer style as a cousin to lightly-toasted and buttered bread.Irish-style red ales are an approachable style for people who are new to craft beer, but are also enjoyed and appreciated by even the most discerning of craft connoisseurs. Don’t let these tasty, sessionable beers be relegated to a once-a-year holiday, Irish style reds can be enjoyed throughout the year in a variety of occasions and with a lot of different food options.It’s no secret that Irish beers have played an influential role in the American craft beer scene, and that’s apparent through the Irish red ale beer. It can be challenging to keep up with all of the Irish beer reinventions, and that is why we’ve created an interactive “Find a Brewery” map. The map will help you find small and independent U.S. craft breweries near you; some of those breweries and brewpubs are likely making variations of red ale beer.Finding your next favorite Irish red ale beer doesn’t have to stop here. If you enjoy the website and are interested in a convenient way to learn more about Irish red beer, sign up to have our newsletter delivered directly to your inbox. We can’t send you beer, but we can send you our newsletter, which is almost as good. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/irish-style-red.jpg",
      OG: "1.040 - 1.048",
      FG: "1.010 - 1.014",
      ABV: "4.1% - 4.6%",
      IBU: "20 - 28",
      BU: "0.50 - 0.58",
      SRM: "11 - 18",
      examples: [ 
          "St. James Irish Red Ale: Glenwood Canyon Brewpub", 
          "Conway's Irish Ale: Great Lakes Brewing Co."
      ]
    }, 
    {
      styleName: "American IPA",
      familyName: "India Pale Ales",
      briefDescription: "Characterized by floral, fruity, citrus-like, piney or resinous American-variety hop character, the IPA beer style is all about hop flavor, aroma and bitterness. ",
      description: "Characterized by floral, fruity, citrus-like, piney or resinous American-variety hop character, the IPA beer style is all about hop flavor, aroma and bitterness. This has been the most-entered category at the Great American Beer Festival for more than a decade, and is the top-selling craft beer style in supermarkets and liquor stores across the U.S. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-india-pale-ale.jpg",
      OG: "1.060 - 1.075",
      FG: "1.012 - 1.018",
      ABV: "6.3% - 7.6%",
      IBU: "50 - 70",
      BU: "0.83 - 0.93",
      SRM: "6 - 14",
      examples: [ 
          "Stone IPA: Stone Brewing Co.", 
          "Two Hearted Ale: Bell's Brewery"
      ]
    }, 
    {
      styleName: "Imperial India Pale Ale",
      familyName: "India Pale Ales",
      briefDescription: "American craft beer lovers are huge fans of the IPA. The quest for more of the India pale ale flavor has led them to the imperial India pale ale, a stronger version of the American IPA, which boasts even more hoppy flavor, aroma and bitterness. ",
      description: "American craft beer lovers are huge fans of the IPA. The quest for more of the India pale ale flavor has led them to the imperial India pale ale, a stronger version of the American IPA, which boasts even more hoppy flavor, aroma and bitterness. Imperial India pale ale is darker in color than the American IPA, substantially more bitter, and high in alcohol by volume. This all-American take on the IPA leaves craft beer fans with plenty of new creations to try.The imperial India pale ale features high hop bitterness, flavor and aroma. Hop character is fresh and evident from the utilization of any variety of hops. Alcohol content is medium-high to high and notably evident with a medium-high to full body. This style intends to exhibit the fresh, evident character of hops.Craft beer has grown because of the curiosity that American craft brewers have exhibited through their tweaking of classic beer recipes. The love for the American IPA flavor that craft beer consumers have shown has led American craft brewers to the imperial IPA. The imperial IPA beer style creeps towards some of the strongest of ales in alcohol content, but the increase in hops from the original IPA beer recipe gives it a more bitter taste and doesn’t bring the same malt taste that barley wine does. For fans of the original India pale ale flavor, the imperial IPA is the perfect craft beer for you to explore.It can be challenging to keep up with all the breweries that serve their own variations of the India pale ale. To help you keep up with all of the breweries and brewpubs that make up the craft beer scene, we have created an interactive “Find a Brewery” map to help you do precisely that. By entering your precise location, searching by state, or searching for a specific brewery, you’ll be able to discover craft breweries near you, and many are likely to brew variations of India pale ales.Finding your next favorite imperial IPA beer doesn’t have to stop here. If you enjoy the website and are interested in a convenient way to learn more about imperial India pale ales, sign up to have our newsletter delivered directly to your inbox. We can’t send you beer, but we can send you our newsletter which is almost as good. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/imperial-india-pale-ale.jpg",
      OG: "1.075 - 1.100",
      FG: "1.012 - 1.020",
      ABV: "7.6% - 10.6%",
      IBU: "65 - 100",
      BU: "0.87 - 1.00",
      SRM: "5 - 16",
      examples: [ 
          "Hop JuJu: Fat Heads Brewery", 
          "2x4: Melvin Brewing Co."
      ]
    }, 
    {
      styleName: "New England IPA",
      familyName: "India Pale Ales",
      briefDescription: "Emphasizing hop aroma and flavor without bracing bitterness, the New England IPA  leans heavily on late and dry hopping techniques to deliver a bursting juicy, tropical hop experience. ",
      description: "Emphasizing hop aroma and flavor without bracing bitterness, the New England IPA  leans heavily on late and dry hopping techniques to deliver a bursting juicy, tropical hop experience. The skillful balance of technique and ingredient selection, often including the addition of wheat or oats, lends an alluring haze to this popular take on the American IPA. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/new-england-ipa.jpg",
      OG: "1.060 - 1.070",
      FG: "1.008 - 1.016",
      ABV: "6.3%-7.5%",
      IBU: "50 - 70",
      BU: " - ",
      SRM: "4-7",
      examples: [ 
          "Juicy Bits: Weldworks Brewing Co.", 
          "Juice Box: Great Notion Brewing"
      ]
    }, 
    {
      styleName: "English-Style IPA",
      familyName: "India Pale Ales",
      briefDescription: "No other style represents modern craft brewing excitement quite like the IPA, and while this English beer differs widely from the American version it inspires, this strong member of the English pale ale family has plenty of its own to offer — including all of the history behind this variety.",
      description: "Strong, bitter and completely misunderstood, the English India pale ale (or English IPA) bridges the gap between past and present. No other style represents modern craft brewing excitement quite like the IPA, and while this English beer differs widely from the American version it inspires, this strong member of the English pale ale family has plenty of its own to offer — including all of the history behind this variety.Steeped in lore (and extra hops), the English-style IPA is a stronger version of a pale ale. The English-style pale ale is characterized by a hearty helping of English hop character (earthy, floral) and increased alcohol content. English yeast lend a fruity character to the flavor and aroma, offering a contrast to the earthy English hop additions. Different from its American counterpart, this style strikes a balance between malt and hops for a more rounded flavor.There is also a lot of mythology surrounding the creation of this style, which is still debated today. It is most commonly believed that English style pale ale was birthed from the need for a beer that could survive the journey to and from India, a land too warm for beer brewing without the aid of modern technology. The increased alcohol and hop contents would act as preservatives, giving IPAs the qualities that they are known for to this day. In actuality, the beer style that would become popularly known as an India pale ale bears little in common with the contemporary iteration you enjoy today. Additionally, beers similar to what made the trip to India had been in production for domestic consumption prior to any reports of it being exported and records show that other beer styles, including porter, made their way to the English colony of India and were enjoyed by parched soldiers and colonists.English pale ale beers, like the IPA, always offer great beer pairing opportunities. Strong English cheeses as well as grilled or braised meats, like pork, can make very tasty flavor experiences when paired with an English IPA. The higher alcohol, hops and carbonation all work to cut through fat and cleanse the palate, helping every bite be as tasty as the first.As popular as English beers, particularly IPAs, have become among beer lovers, we want to do our part to keep craft beers fans in the loop when it comes to these English beer styles. Our “Find a Brewery” map is designed to do precisely that. It can be overwhelming to sift through all of the English beers on the craft scene, and we want to make it easy for you to find your first or your favorite English pale ale beer. Search by location, or search by state, and our map will point you in the direction of the nearest brewery where you can find your next favorite beer, which could include the English-style India pale ale beer.Finding your first ever or next favorite English-style India pale ale doesn’t have to stop here. If you enjoy the website and are interested to learn more about English-style India pale ale beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-india-pale-ale.jpg",
      OG: "1.050 - 1.064",
      FG: "1.012 - 1.018",
      ABV: "5.1% - 7.1%",
      IBU: "35 - 63",
      BU: "0.70 - 0.98",
      SRM: "6 - 14",
      examples: [ 
          "Punjabi: CooperSmith's Pub & Brewing", 
          "Sam Adams Lattitude 48 Hallertau Mittelfrueh: Boston Beer Co."
      ]
    }, 
    {
      styleName: "American Amber Ale",
      familyName: "Pale Ales",
      briefDescription: "Like most amber beers, American amber ale is named after the golden to amber color this American version of English pale ale exhibits. ",
      description: "Like most amber beers, American amber ale is named after the golden to amber color this American version of English pale ale exhibits. The color is derived from the use of caramel and crystal malt additions, which are roasted to provide amber beers with the color, body and flavor many beer fans have come to appreciate. Falling under the ale beer type, amber ales ferment at warmer temperatures for what is typically a much shorter amount of time than lager style beers.The American amber ale is one of the most widely enjoyed styles throughout the United States and serves as a cornerstone style of the American craft brewing revolution. American ambers are darker in color than their pale ale cousins, the presence of caramel and crystal malts lending a toasted, toffee flavor, along with the perception of a fuller body when compared to beers without such malts. Amber beer showcases a medium-high to high malt character with medium to low caramel character derived from the use of roasted crystal malts. The American amber is characterized by American-variety hops, which lend the amber ale notes of citrus, fruit and pine to balance the sweetness of the malt.As with many amber beer types, American amber ale is a highly versatile companion to American cuisine, particularly foods that are grilled or barbecued, as roasted malts complement seared, charred and caramelized proteins making this ale beer type a perennial favorite at backyard cookouts.The popularity of the American amber ale makes the style one of the easier amber beers to seek out at small and independent craft breweries or find in a local craft-centric retailer. Across the country, you can discover countless variations of the amber ale. Use our “Find a Brewery” map to help you discover the amber ale beers at a new brewery near you.If you enjoy the website and are interested in a convenient way to learn about amber beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/amber-ale.jpg",
      OG: "1.048 - 1.058",
      FG: "1.012 - 1.018",
      ABV: "4.4% - 6.1%",
      IBU: "25 - 45",
      BU: "0.62 - 0.78",
      SRM: "11 - 18",
      examples: [ 
          "Hop Back Amber: Troegs Brewing Co.", 
          "Boont Amber: Anderson Valley Brewing Co."
      ]
    }, 
    {
      styleName: "American Pale Ale",
      familyName: "Pale Ales",
      briefDescription: "Like many others that have become known as classic American beers, the American pale ale can trace its roots to beer styles from abroad. The American pale ale beer was inspired by the English pale ale, replacing its English counterpart’s earthy, herbal hops with generous additions of boldly citrus and pine-like American varieties. ",
      description: "Like many others that have become known as classic American beers, the American pale ale can trace its roots to beer styles from abroad. The American pale ale beer was inspired by the English pale ale, replacing its English counterpart’s earthy, herbal hops with generous additions of boldly citrus and pine-like American varieties. As one of the most popular American beer styles, pale ale beer is not hard to track down, but the various takes on this iconic style by just as many American craft brewers makes it impossible to jam everything there is to know about American pale ale beer on one page, but we’ll do our best.Characterized by floral, fruity, citrus-like, piney, resinous American hops, the American pale ale is a medium-bodied beer with low to medium caramel, and carries with it a toasted maltiness. American pale ale is one of the most food-friendly styles to enjoy, since the pale ale works wonderfully with lighter fare such as salads and chicken, but can still stand up to a hearty bowl of chili; a variety of different cheeses, including cheddar; seafood, like steamed clams or fish, and even desserts. The American pale ale’s affinity to food can be attributed to the simplicity of its ingredients, which include toasty pale malt, a clean fermenting ale beer yeast, and the counterbalance of American hops to help tease out the flavor or cleanse the palate, preparing you for another bite.While pale ale beer has definitively English roots, many credit the American take on the style to the advent of Sierra Nevada Pale Ale, which employs the use of American Cascade hops and a clean fermenting ale yeast that has become synonymous with today’s West Coast style craft beers. Currently, pale ales offer beer fans a balance between malt and hops, which make pale ales one of the most enjoyed and approachable beer styles available.American pale ale beer remains a staple of the American beer world because it continues to evolve. With each passing day, independent breweries across the country are reimagining the classic pale ale by experimenting with local ingredients to craft flavor profiles that push the boundaries of beer. If you’d like to further explore the world of pale ales and learn more about American pale ale beers, continue to explore our site. Expand your American pale ale knowledge base by responsibly trying beers first hand, and track down craft breweries using our brewery map. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-pale-ale.jpg",
      OG: "1.044 - 1.050",
      FG: "1.008 - 1.014",
      ABV: "4.4% - 5.4%",
      IBU: "30 - 50",
      BU: "0.68 - 1.00",
      SRM: "6 - 14",
      examples: [ 
          "Stick's Pale Ale: Bootstrap Brewing Co.", 
          "Pale Ale: Sierra Nevada"
      ]
    }, 
    {
      styleName: "Blonde Ale",
      familyName: "Pale Ales",
      briefDescription: "One of the most approachable styles, a golden or blonde ale is an easy-drinking beer that is visually appealing and has no particularly dominating malt or hop characteristics. ",
      description: "One of the most approachable styles, a golden or blonde ale is an easy-drinking beer that is visually appealing and has no particularly dominating malt or hop characteristics. Rounded and smooth, it is an American classic known for its simplicity. Sometimes referred to as “golden ale.” These beers can have honey, spices and fruit added, and may be fermented with lager or ale yeast. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/blonde-ale.jpg",
      OG: "1.045 - 1.054",
      FG: "1.008 - 1.016",
      ABV: "4.1% - 5.1%",
      IBU: "15 - 25",
      BU: "0.33 - 0.45",
      SRM: "3 - 7",
      examples: [ 
          "Summer Love Ale: Victory Brewing Co.", 
          "Twilight Summer Ale: Deschutes Brewery"
      ]
    }, 
    {
      styleName: "English-Style Bitter",
      familyName: "Pale Ales",
      briefDescription: "The English-style bitter is a very sessionable, lower-alcohol, malt-driven style. ",
      description: "The English-style bitter is a very sessionable, lower-alcohol, malt-driven style. Broad style description commonly associated with cask-conditioned beers. The light- to medium-bodied ordinary bitter is gold to copper in color, with a low residual malt sweetness. Hop bitterness is medium. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-bitter.jpg",
      OG: "1.033 - 1.038",
      FG: "1.006 - 1.012",
      ABV: "3.0% - 4.2%",
      IBU: "20 - 35",
      BU: "0.61 - 0.92",
      SRM: "5 - 12",
      examples: [ 
          "Midsummer Fling: Harpoon Brewery", 
          "Pale Ale: Rio Blanco Brewing Co."
      ]
    }, 
    {
      styleName: "English-Style Pale Ale (ESB)",
      familyName: "Pale Ales",
      briefDescription: "ESB stands for “extra special bitter.” This style is known for its balance and the interplay between malt and hop bitterness. ",
      description: "ESB stands for “extra special bitter.” This style is known for its balance and the interplay between malt and hop bitterness. English pale ales display earthy, herbal English-variety hop character. Medium to high hop bitterness, flavor and aroma should be evident. The yeast strains used in these beers lend a fruitiness to their aromatics and flavor, referred to as esters. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is medium to medium-high. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-pale-ale-esb.jpg",
      OG: "1.040 - 1.056",
      FG: "1.008 - 1.016",
      ABV: "4.4% - 5.3%",
      IBU: "20 - 40",
      BU: "0.50 - 0.71",
      SRM: "5 - 12",
      examples: [ 
          "5 Barrel Pale Ale: Odell Brewing Co.", 
          "Royal Scandal: Peticolas Brewing Co."
      ]
    }, 
    {
      styleName: "American Lager",
      familyName: "Pilseners and Pale Lagers",
      briefDescription: "American lager has little in the way of hop and malt character. A straw to gold, very clean and crisp, highly carbonated lager.",
      description: "American lager has little in the way of hop and malt character. A straw to gold, very clean and crisp, highly carbonated lager. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-lager.jpg",
      OG: "1.040 - 1.048",
      FG: "1.006 - 1.014",
      ABV: "4.1%-5.1%",
      IBU: "5 - 15",
      BU: "0.13 - 0.31",
      SRM: "2 - 6",
      examples: [ 
          "The Crisp: Sixpoint Brewing", 
          "Two Women: New Glarus Brewing Co."
      ]
    }, 
    {
      styleName: "Bohemian-Style Pilsener",
      familyName: "Pilseners and Pale Lagers",
      briefDescription: "The Bohemian pilsener has a slightly sweet and evident malt character and a toasted, biscuit-like, bready malt character.",
      description: "The Bohemian pilsener has a slightly sweet and evident malt character and a toasted, biscuit-like, bready malt character. Hop bitterness is perceived as medium with a low to medium-low level of noble-type hop aroma and flavor. This style originated in 1842, with “pilsener” originally indicating an appellation in the Czech Republic. Classic examples of this style used to be conditioned in wooden tanks and had a less sharp hop bitterness despite the similar IBU ranges to German-style pilsener. Low-level diacetyl is acceptable. Bohemian-style pilseners are darker in color and higher in final gravity than their German counterparts. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/bohemian-style-pilsener.jpg",
      OG: "1.044 - 1.056",
      FG: "1.014 - 1.020",
      ABV: "4.1% - 5.1%",
      IBU: "30 - 45",
      BU: "0.68 - 0.80",
      SRM: "3 - 7",
      examples: [ 
          "Bohemian Pilsener: Ninkasi Brewing Co.", 
          "Mama’s Little Yella Pils: Oskar Blues"
      ]
    }, 
    {
      styleName: "German-Style Helles",
      familyName: "Pilseners and Pale Lagers",
      briefDescription: "A beer for beer lovers, the German-style helles is a malt accented lager beer that balances a pleasant malt sweetness and body with floral Noble hops and restrained bitterness.",
      description: "A beer for beer lovers, the German-style helles is a malt accented lager beer that balances a pleasant malt sweetness and body with floral Noble hops and restrained bitterness. The helles is a masterclass in restraint, subtly and drinkability which makes it an enduring style for true beer lovers and an elusive style for craft brewers to recreate. The German helles reminds beer lovers that the simple things in life are usually the most rewarding and worth pursuing.“Helles” means “pale in color,” as these beers are often golden. The German-style helles lager is a bit rounder or fuller-bodied than light lager and even all-malt pilsners. Helles lager beers offer a touch of sweetness that balance a measurable addition of spicy German hop flavor and light bitterness. The malt character is soft and bready, making it a terrific complement to light dishes such as salad or fresh shellfish, like clams. Clean and crisp, this is a refreshing beer with substance. Low levels of yeast-produced sulfur aromas and flavors may be common.While the German helles is highly versatile for pairing with food, helles lager is designed for refreshment and makes for the ideal beer on a hot day. Today, small and independent craft brewers offer their own takes on this classic German beer, many following the German tradition exactly, including German malts, spicy German hops and expertly controlled fermentation, offering a balanced yet subtly sweet lager beer. Others have added their own American twist on the helles variety by adding American hops and making this lager beer available in aluminum cans so beer lovers can enjoy this style while out and about. If you have not had the pleasure of tasting and appreciating this beer brewed for beer lovers, do yourself a favor and seek out a brewery near you that offers the style as a taproom option. You won’t be sorry.We’ve assembled an interactive “Find a Brewery” map to help you keep track of all of the breweries and brewpubs near you, and some of those craft breweries are likely making helles beer. By allowing the map to use your specific location, searching by state or searching for a specific brewery, we want to help you find your next favorite craft beer, which could be a helles beer.If you enjoy the website and are interested in a convenient way to learn more about German beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-helles.jpg",
      OG: "1.044 - 1.050",
      FG: "1.008 - 1.012",
      ABV: "4.8% - 5.6%",
      IBU: "18 - 25",
      BU: "0.41 - 0.50",
      SRM: "4 - 5.5",
      examples: [ 
          "Helles: Dry Dock Brewing Co.", 
          "Helles Lager: Victory Brewing Co."
      ]
    }, 
    {
      styleName: "German-Style Pilsner",
      familyName: "Pilseners and Pale Lagers",
      briefDescription: "Quite possibly the most iconic beer style in modern history, the pilsner — also spelled pilsener — captured the attention of beer drinkers across the world and inspired a myriad of regional imitations. ",
      description: "Quite possibly the most iconic beer style in modern history, the pilsner — also spelled pilsener — captured the attention of beer drinkers across the world and inspired a myriad of regional imitations. This lightly colored, exquisitely balanced lager remains one of the most loved beers to enjoy, and one of the most challenging for the brewer to create. Pilsners are characteristically light in color and have a very short finish. The world over, pilsner-style lagers have become the standard beer for many reasons, and American craft brewers have worked hard to put their own unique spin on this classic German beer.A classic German-style pilsner is straw to pale in color with a malty sweetness that can be perceived in aroma and flavor. Perception of hop bitterness is medium to high. Noble-type hop aroma and flavor are moderate and quite obvious. Distinctly different from the Bohemian-style pilsner, this style is lighter in color and body and has a lower perceived hop bitterness.German pilsner lagers have a rich history in the United States. Some of the first breweries in the United States were started in the 1800s by German immigrants and specialized in brewing pilsner beer. Since then, American craft brewers have continued to experiment with the classic style pils. Like other German beers, pilsner lager’s crisp finish makes for a refreshing beer during the warmer months of the year. We want to help you find the next pilsner beer to keep you refreshed on a hot summer day.American craft brewers have worked hard to create their own versions of pilsner beers over the years. If you are a big fan of pilsner, we want to help you find nearby breweries where you can try all the new pilsner beers on the craft scene. Our “Find a Brewery” tool is designed to lead you to breweries and brewpubs near you that carry the beer variety you desire. By entering your precise location, searching for a brewery, or searching by state, we can help you find your next favorite place to grab a pilsner or another German beer.If you enjoy the website and are interested in a convenient way to learn more about German beer, sign up to have our newsletter delivered directly to your inbox. We can’t send you any pilsner lagers, but we can send you our newsletter, which is almost as fun. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-pilsener.jpg",
      OG: "1.044 - 1.055",
      FG: "1.006 - 1.012",
      ABV: "4.6% - 5.3%",
      IBU: "25 - 40",
      BU: "0.57 - 0.73",
      SRM: "3 - 4",
      examples: [ 
          "Pivo Pils: Firestone Walker Brewing Co.", 
          "Paintbrush Pilsener: Snake River Brewing Co."
      ]
    }, 
    {
      styleName: "European-Style Export",
      familyName: "Pilseners and Pale Lagers",
      briefDescription: "Sometimes referred to as a “Dortmunder export,” the European-Style Export has the malt-forward flavor and sweetness of a German-style helles, but the bitter base of a German-style pilsener.",
      description: "Sometimes referred to as a “Dortmunder export,” the European-Style Export has the malt-forward flavor and sweetness of a German-style helles, but the bitter base of a German-style pilsener. This lager is all about balance, with medium hop character and firm but low malt sweetness. Look for toasted malt flavors and spicy floral hop aromas. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/european-style-export.jpg",
      OG: "1.048 - 1.056",
      FG: "1.010 - 1.014",
      ABV: "5.1% - 6.1%",
      IBU: "23 - 29",
      BU: "0.48 - 0.52",
      SRM: "3 - 6",
      examples: [ 
          "Dortmunder Gold: Great Lakes Brewing Co.", 
          "Lager: Bell's Brewery Inc."
      ]
    }, 
    {
      styleName: "American Imperial Porter",
      familyName: "Porters",
      briefDescription: "Medium caramel and cocoa-like sweetness is present, with complementing hop character and malt-derived sweetness.",
      description: "Definitively American, the imperial porter should have no roasted barley flavors or strong burnt/black malt character. Medium caramel and cocoa-like sweetness is present, with complementing hop character and malt-derived sweetness. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-imperial-porter.jpg",
      OG: "1.080 - 1.100",
      FG: "1.020 - 1.030",
      ABV: "7.0% - 12.0%",
      IBU: "35 - 50",
      BU: "0.44 - 0.50",
      SRM: "40+",
      examples: [ 
          "Northstar Imperial Porter: Twisted Pine Brewing Co.", 
          "Imperial Porter: Long Trail Brewing Co."
      ]
    }, 
    {
      styleName: "Baltic-Style Porter",
      familyName: "Porters",
      briefDescription: "The Baltic-style Porter is a smooth, cold-fermented and cold-lagered beer brewed with lager yeast.",
      description: "The Baltic-style Porter is a smooth, cold-fermented and cold-lagered beer brewed with lager yeast. Because of its alcoholic strength, it may include very low to low complex alcohol flavors and/or lager fruitiness such as berries, grapes and plums (but not banana; ale-like fruitiness from warm-temperature fermentation is not appropriate). This style has the malt flavors of a brown porter and the roast of a schwarzbier, but is bigger in alcohol and body. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/baltic-style-porter.jpg",
      OG: "1.072 - 1.092",
      FG: "1.016 - 1.022",
      ABV: "7.6% - 9.3%",
      IBU: "35 - 40",
      BU: "0.47 - 0.49",
      SRM: "40+",
      examples: [ 
          "The Duck-Rabbit Baltic Porter: Duck Rabbit Craft Brewery", 
          "Smuttynose Baltic Porter: Smuttynose Brewing Company"
      ]
    }, 
    {
      styleName: "English-Style Brown Porter",
      familyName: "Porters",
      briefDescription: "The English-style brown porter has no roasted barley or strong burnt/black malt character. Low to medium malt sweetness, caramel and chocolate is acceptable. ",
      description: "The English-style brown porter has no roasted barley or strong burnt/black malt character. Low to medium malt sweetness, caramel and chocolate is acceptable. Hop bitterness is medium. Softer, sweeter and more caramel-like than a robust porter, with less alcohol and body. Porters are the precursor style to stouts. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-brown-porter.jpg",
      OG: "1.040 - 1.050",
      FG: "1.006 - 1.014",
      ABV: "4.4% - 6.0%",
      IBU: "20 - 30",
      BU: "0.50 - 0.60",
      SRM: "30 - 35",
      examples: [ 
          "Old Tom Porter: Piney River Brewing Co.", 
          "Pluff Mud Porter: Holy City Brewing Co."
      ]
    }, 
    {
      styleName: "Robust Porter",
      familyName: "Porters",
      briefDescription: "The Robust Porter features more bitter and roasted malt flavor than a brown porter, but not quite as much as a stout.",
      description: "The Robust Porter features more bitter and roasted malt flavor than a brown porter, but not quite as much as a stout. Robust porters have a roast malt flavor, often reminiscent of cocoa, but no roast barley flavor. Their caramel and malty sweetness is in harmony with the sharp bitterness of black malt. Hop bitterness is evident. With U.S. craft brewers doing so much experimentation in beer styles and ingredients, the lines between certain stouts and porters are often blurred. Yet many deliberate examples of these styles do exist. Diacetyl is acceptable at very low levels. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/robust-porter.jpg",
      OG: "1.045 - 1.060",
      FG: "1.008 - 1.016",
      ABV: "5.1% - 6.6%",
      IBU: "25 - 40",
      BU: "0.56 - 0.67",
      SRM: "30+",
      examples: [ 
          "Pig Iron Porter: Iron Hill Brewery & Restaurant", 
          "Moonlight Porter: Rock Bottom Restaurant & Brewery"
      ]
    }, 
    {
      styleName: "Smoke Porter",
      familyName: "Porters",
      briefDescription: "Typically the base for the smoke porter beer style is a robust porter that is given smoky depth thanks to wood-smoked malt.",
      description: "Typically the base for the smoke porter beer style is a robust porter that is given smoky depth thanks to wood-smoked malt. Traditionally, brewers will cite the specific wood used to smoke the malt, and different woods will lend different flavors to the finished product. Smoke flavors dissipate over time. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/smoke-porter.jpg",
      OG: "1.050 - 1.065",
      FG: "1.010 - 1.018",
      ABV: "5.1% - 8.9%",
      IBU: "20 - 40",
      BU: "0.40 - 0.62",
      SRM: "20+",
      examples: [ 
          "Smoked Porter: Alaskan Brewing Co.", 
          "Smoked Porter: Stone Brewing Co."
      ]
    }, 
    {
      styleName: "Scottish-Style Ale",
      familyName: "Scottish-Style Ales",
      briefDescription: "Scottish-style ales vary depending on strength and flavor, but in general retain a malt-forward character with some degree of caramel-like malt flavors and a soft and chewy mouthfeel.",
      description: "Scottish-style ales vary depending on strength and flavor, but in general retain a malt-forward character with some degree of caramel-like malt flavors and a soft and chewy mouthfeel. Some examples feature a light smoked peat flavor. Hops do not play a huge role in this style. The numbers commonly associated with brands of this style (60/70/80 and others) reflect the Scottish tradition of listing the cost, in shillings, of a hogshead (large cask) of beer. Overly smoked versions  would be considered specialty examples. Smoke or peat should be restrained. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/scottish-style-ale.jpg",
      OG: "1.030 - 1.050",
      FG: "1.006 - 1.018",
      ABV: "2.8% - 5.3%",
      IBU: "9 - 25",
      BU: "0.30 - 0.50",
      SRM: "6 - 15",
      examples: [ 
          "Scottish Ale: Campbell Brewing Co.", 
          "Wee Heavy: Maui Brewing Co."
      ]
    }, 
    {
      styleName: "Scotch Ale/Wee Heavy",
      familyName: "Scottish-Style Ales",
      briefDescription: "The Scotch ale is overwhelmingly malty, with a rich and dominant sweet malt flavor and aroma. A caramel character is often part of the profile. Some examples feature a light smoked peat flavor.",
      description: "The Scotch ale is overwhelmingly malty, with a rich and dominant sweet malt flavor and aroma. A caramel character is often part of the profile. Some examples feature a light smoked peat flavor. This style could be considered the Scottish version of an English-style barley wine. Overly smoked versions would be considered specialty examples. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/scotch-ale-wee-heavy.jpg",
      OG: "1.072 - 1.085",
      FG: "1.016 - 1.028",
      ABV: "6.6% - 8.5%",
      IBU: "25 - 35",
      BU: "0.35 - 0.41",
      SRM: "15 - 30",
      examples: [ 
          "Wee Heavy: Dry Dock Brewing Co.", 
          "Way Heavy: Pizza Port Brewing Co."
      ]
    }, 
    {
      styleName: "American Black Ale",
      familyName: "Specialty Beers",
      briefDescription: "The American black ale is characterized by the perception of caramel malt and dark roasted malt flavor and aroma. Hop bitterness is perceived to be medium-high to high. ",
      description: "The American black ale is characterized by the perception of caramel malt and dark roasted malt flavor and aroma. Hop bitterness is perceived to be medium-high to high. Hop flavor and aroma are medium-high. Fruity, citrus, piney, floral and herbal character from hops of all origins may contribute to the overall experience. This beer is often called a black IPA or Cascadian dark ale. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-black-ale.jpg",
      OG: "1.056 - 1.075",
      FG: "1.012 - 1.018",
      ABV: "6.3% - 7.6%",
      IBU: "50 - 70",
      BU: "0.89 - 0.93",
      SRM: "35+",
      examples: [ 
          "Wookey Jack: Firestone Walker Brewing Co.", 
          "Back in Black: 21st Amendment Brewery"
      ]
    }, 
    {
      styleName: "Barrel-Aged Beer",
      familyName: "Specialty Beers",
      briefDescription: "A wood- or barrel-aged beer is any lager, ale or hybrid beer, either a traditional style or a unique experimental beer, that has been aged for a period of time in a wooden barrel or in contact with wood.",
      description: "A wood- or barrel-aged beer is any lager, ale or hybrid beer, either a traditional style or a unique experimental beer, that has been aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the unique character of the wood and/or the flavor of what has previously been in the barrel. Today’s craft brewers are using wood (mostly oak) to influence flavor and aromatics. Beer may be aged in wooden barrels (new or previously used to age wine or spirits), or chips, spirals and cubes may be added to the conditioning tanks that normally house beer. A variety of types of wood are used including oak, apple, alder, hickory and more. The interior of most barrels is charred or toasted to further enhance the flavor of the wood. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/barrel-aged-beer.jpg",
      OG: "Varies",
      FG: "Varies",
      ABV: "Varies",
      IBU: "Varies",
      BU: "Varies",
      SRM: "Varies",
      examples: [ 
          "Drama Queen: Denver Beer Co.", 
          "Barrel Aged Sump Coffee Stout: Perennial Beer Co."
      ]
    }, 
    {
      styleName: "Coffee Beer",
      familyName: "Specialty Beers",
      briefDescription: "Coffee beer can be either a lager beer or an ale beer, with coffee added to boost flavor. While stouts and porters are popular base styles for coffee beer, many craft breweries are experimenting with other styles, like cream ales and India pale ales.",
      description: "If you had to combine two beverages that Americans love, you would have coffee beer. Craft breweries across the United States have zealously embraced coffee flavored beer. The creations that have resulted from experimenting with the combination of some of the oldest beverages in the world have caught the attention of craft beer lovers everywhere.Coffee beer can be either a lager beer or an ale beer, with coffee added to boost flavor. While stouts and porters are popular base styles for coffee beer, many craft breweries are experimenting with other styles, like cream ales and India pale ales. Brewers may steep the beans in either water or beer to impart java flavor while taking care to avoid the addition of too much acidity. As with any beer, the addition of an ingredient can have a drastic effect on the flavor — but striking a balance is often the goal of brewers.Coffee is a versatile ingredient in beer, and lends a smooth roasted flavor to just about any style, from stouts and porters to pale ales and even sour beers. You can look to pair coffee flavored beers with a wide variety of different foods. Desserts might be an obvious choice, after all, — who wouldn’t enjoy a piece of pecan pie cheesecake alongside a smooth, rich coffee oatmeal stout? Despite how well it pairs with sweeter dishes, there is no reason a coffee beer couldn’t be an excellent companion to a charcoal grilled rib-eye steak at your next cookout. This beer style also makes a nice partner when paired with aged semi-hard cheeses when you’re entertaining.Finding your next favorite beer doesn’t have to stop here. CraftBeer.com’s “Find a Brewery” map is designed to help you find small and independent craft breweries near you. Giving you the option to search for breweries by location, desired brewery name, or state, finding breweries and brewpubs closest to your location could lead you to your next favorite beer, which could be a coffee flavored beer.If you enjoy the website and are interested in a convenient way to learn more about coffee flavored beer, which foods pair best with these beers, or any other beer style, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/coffee-beer.jpg",
      OG: "1.030 - 1.110",
      FG: "1.006 - 1.030",
      ABV: "2.5% - 12.0%",
      IBU: "15 - 45",
      BU: "0.50 - 0.41",
      SRM: "4 - 50",
      examples: [ 
          "Big Bad Baptist: Epic Brewing Co.", 
          "Speedway Stout: AleSmith Brewing Co."
      ]
    }, 
    {
      styleName: "Fruit and Field Beer",
      familyName: "Specialty Beers",
      briefDescription: "Fruit beer is made with fruit, or fruit extracts that are added during any portion of the brewing process, providing obvious yet harmonious fruit qualities.",
      description: "Fruit beer is made with fruit, or fruit extracts that are added during any portion of the brewing process, providing obvious yet harmonious fruit qualities. This idea is expanded to “field beers” that utilize vegetables and herbs. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/fruit-field-or-flavored.jpg",
      OG: "1.030 - 1.110",
      FG: "1.006 - 1.030",
      ABV: "2.5% - 13.3%",
      IBU: "5 - 45",
      BU: "0.17 - 0.64",
      SRM: "5 - 50",
      examples: [ 
          "Apricot Cream Ale: Vertigo Brewing", 
          "Ruby Raspberry Wheat: Mad Anthony Brewing Co."
      ]
    }, 
    {
      styleName: "Herb and Spice Beer",
      familyName: "Specialty Beers",
      briefDescription: "An herb and spice beer is a lager or ale that contains flavors derived from flowers, roots, seeds or certain fruits or vegetables.",
      description: "An herb and spice beer is a lager or ale that contains flavors derived from flowers, roots, seeds or certain fruits or vegetables. Typically the hop character is low, allowing the added ingredient to shine through. The appearance, mouthfeel and aromas vary depending on the herb or spice used. This beer style encompasses innovative examples as well as traditional holiday and winter ales. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/herb-and-spice-beer.jpg",
      OG: "1.030 - 1.110",
      FG: "1.006 - 1.030",
      ABV: "2.5% - 12.0%",
      IBU: "5 - 40",
      BU: "0.17 - 0.36",
      SRM: "5 - 50",
      examples: [ 
          "NoDajito: NoDa Brewing Co.", 
          "Midas Touch: Dogfish Head Brewing Co."
      ]
    }, 
    {
      styleName: "Gluten-Free Beer",
      familyName: "Specialty Beers",
      briefDescription: "Many brewers have recognized the desire for gluten-free customers to enjoy their beer without the concern of ingesting gluten, leading many craft brewers to utilize alternative grains during the brewing process that do not contain gluten.",
      description: "If you are one of the 2 million Americans who suffer from celiac disease, trying craft beers may seem impossible, or at least challenging. But with the growing interest in gluten-free options, many people have found that they no longer have to miss out on enjoying craft beer. Many brewers have recognized the desire for gluten-free customers to enjoy their beer without the concern of ingesting gluten, leading many craft brewers to utilize alternative grains during the brewing process that do not contain gluten. Dedicated gluten-free breweries have also found success catering to people dealing with gluten intolerance as well as health-minded beer drinkers who choose to follow a gluten-reduced or gluten-free diet, but don’t want to give up their favorite beverage.Barley, wheat, oats, rye and spelt are the ingredients that most breweries use to brew the beers that the world has come to love. These ingredients commonly contain gluten, so people who suffer from celiac disease must look for other fermentables to be featured in gluten-free beer. Many craft breweries who make gluten-free beers have turned to malted sorghum and buckwheat, which are grains that do not contain gluten to brew beers for their gluten-averse customers.People have dealt with the effects of celiac disease since the mid-1800s, but the grains responsible for the condition weren’t discovered until the 1940s. Brewers began brewing craft beers in the United States in the mid-1960s, and that path has eventually led to the creation of gluten-free craft beers. Several craft brewers across the United States have brewed reduced-gluten and gluten-free craft beers so that everyone of age can be a part of the craft beer community.Even with the progress the craft beer community has made toward including the gluten-free community, gluten-free beer can still be a difficult thing to find at times. As a solution to this, we’ve created an interactive “Find a Brewery” map to help you find breweries and brewpubs, and some of those craft breweries do serve gluten-free beers. Our map allows you to enter your specific location, search for a particular brewery, or search for a brewery by state. We want to do our part to keep the craft beer community as tight as we can and helping you find new places to try the craft beers that you love is a large part of that.Finding your next favorite gluten-free craft beer doesn’t have to stop here. If you enjoy the website and are interested in a convenient way to learn more about gluten-free beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/gluten-free.jpg",
      OG: "Varies",
      FG: "Varies",
      ABV: "Varies",
      IBU: "Varies",
      BU: "Varies",
      SRM: "Varies",
      examples: [ 
          "Gluten Free: Deschutes Brewing Co.", 
          "Nikki's Gluten Free Honey Pale Ale: Rock Bottom Restaurant & Brewery"
      ]
    }, 
    {
      styleName: "Chocolate Beer",
      familyName: "Specialty Beers",
      briefDescription: "While many beers showcase chocolatey flavors without actually having chocolate as an ingredient, chocolate beers use the ingredient itself to offer a uniquely balanced beer experience that can be appreciated by beer connoisseurs and those with sweet tooths alike.",
      description: "Few flavors are as universally celebrated as chocolate. From ancient civilizations who drank fermented chocolate to rich, decadent and refined chocolate desserts, the cultural significance of chocolate cannot be understated. Like chocolate, beer too is a celebrated, versatile tradition that spans the globe. American craft brewers have embraced the combination of both with a variety of different approaches and applications to create chocolate flavored beers. While many beers showcase chocolatey flavors without actually having chocolate as an ingredient, chocolate beers use the ingredient itself to offer a uniquely balanced beer experience that can be appreciated by beer connoisseurs and those with sweet tooths alike.Chocolate beer can be an ale or lager that benefits from the addition of any type of chocolate or cocoa. Traditionally added to porters, stouts and brown ales, where the grain bill better complements the confectionery ingredient, it can be added to other styles as well. Chocolate character can range from subtle to overt, but any chocolate beer is generally expected to offer some balance between beer and bon-bon. The style can vary greatly in approach as well as flavor profile depending on the brewer.Known for innovation and pushing boundaries, craft brewers have never met an ingredient they didn’t like, or at least an ingredient they didn’t believe could be expressed in a beer. Chocolate flavored beers offer beer lovers a chance to taste just how versatile craft brewers can be. The use of chocolate in chocolate beers offers yet another example of craft beers culinary compatibility, whether as a pairing or show-stopping course all in itself, a well-crafted chocolate flavored beer is a game changer even for those who don’t generally gravitate towards beer.While stouts and porters are the most complementary styles to embrace the addition of chocolate, chocolate beers need not stick to the script. Chocolate can be added to all types of beer styles, even beers as light as pale ales. The key for any flavored beer is that the ingredients and flavors it presents are balanced well with the base style of beer. Chocolate flavored beer may seem like an odd concept, but any beer or chocolate lover owes it to themself to give chocolate beer a try.On the hunt for an American craft brewer that offers a chocolate flavored beer? We want to help you find your first or new favorite. Whether you have a craft beer or chocolate fascination, our “Find a Brewery” map is designed to meet your needs.Finding your first or next favorite beer doesn’t have to stop here. If you are interested in a convenient way to learn more about chocolate beer, or any other kind of beer, sign up to have our newsletter delivered directly to your inbox.Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/chocolate-beer.jpg",
      OG: "1.030 - 1.110",
      FG: "1.006 - 1.030",
      ABV: "2.5% - 12.0%",
      IBU: "15 - 40",
      BU: "0.36 - 0.50",
      SRM: "15 - 50",
      examples: [ 
          "Chocolate Oak Aged Imperial Yeti Stout: Great Divide Brewing Co.", 
          "Brooklyn Black Chocolate Stout: Brooklyn Brewery"
      ]
    }, 
    {
      styleName: "Pumpkin Beer",
      familyName: "Specialty Beers",
      briefDescription: "Pumpkin flavored beers have caught the attention of craft beer and pumpkin lovers everywhere, partially because the flavors can be implemented in several beer styles.",
      description: "Nothing says fall quite like pumpkins and beer, and American craft breweries have done a superb job of combining the two. It’s tough to find anything that hasn’t been “pumpkin spiced,” and beers are no different. Pumpkin flavored beers have caught the attention of craft beer and pumpkin lovers everywhere, partially because the flavors can be implemented in several beer styles. Whether you’re interested in trying pumpkin amber ales, IPAs or pumpkin stouts, there are plenty of options from American craft brewers for you to explore.Perhaps the most seasonal of seasonal beers, the pumpkin beer style can be brewed with pumpkin, just pumpkin spices, or even winter squash. Since the fruit does not have much of a taste by itself, many craft brewers have taken to adding spices typically found in pumpkin pie, like cinnamon and clove. However, these flavors should not overpower the beer. Pumpkin can be found in everything from stouts to pale ales and pilsners.Pumpkin spice beer is so versatile that it is hard to nail down its particular characteristics. Pumpkin flavored beers can range from relatively light to dark, bitter or malt forward, and can be either sessionable or strong as far as the alcohol content is considered. As you’d expect, the pumpkin beer style pairs well with fall food flavors like roasted turkey and coffee ice cream. Camembert cheese is another decadent beer pairing if you’re pouring a glass of pumpkin flavored beer to enjoy.Pumpkin spice beers are a very popular seasonal beer style for a reason. American craft breweries everywhere likely have their own version of pumpkin beer you can explore, so get out and try them this fall (sometimes breweries even release them in late summer). If you are a lover of pumpkin ale, we can help you find a craft brewery that might serve one you haven’t tried yet.Finding your next favorite pumpkin flavored beer doesn’t have to stop here. Feel free to use our interactive brewery map to find a brewery or brewpub near you that could very well be serving a pumpkin spice beer.If you enjoy the website and are interested in a convenient way to learn more about pumpkin flavored beers or the breweries that carry them, sign up to have our newsletter delivered directly to your inbox. We can’t send you beer, but we can send you our newsletter, which is almost as good. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/pumpkin-beers.jpg",
      OG: "1.030 - 1.110",
      FG: "1.006 - 1.030",
      ABV: "2.3% - 12.0%",
      IBU: "5 - 70",
      BU: "0.17 - 0.64",
      SRM: "5 - 50",
      examples: [ 
          "Pump Action Imperial Pumpkin Ale: 4 Noses Brewing Co.", 
          "Pumking: Southern Tier Brewing Co."
      ]
    }, 
    {
      styleName: "Rye Beer",
      familyName: "Specialty Beers",
      briefDescription: "In darker versions, malt flavor can optionally include low roasted malt characters (evident as cocoa/chocolate or caramel) and/or aromatic toffee-like, caramel, or biscuit-like characters.",
      description: "In darker versions, malt flavor can optionally include low roasted malt characters (evident as cocoa/chocolate or caramel) and/or aromatic toffee-like, caramel, or biscuit-like characters. Low-level roasted malt astringency is acceptable when balanced with low to medium malt sweetness. Hop flavor is low to medium-high. Hop bitterness is low to medium. These beers can be made using either ale or lager yeast. The addition of rye to a beer can add a spicy or pumpernickel character to the flavor and finish. Color can also be enhanced and may become more red from the use of rye. The ingredient has come into vogue in recent years in everything from stouts to lagers, but is especially popular with craft brewers in India pale ales. To be considered an example of the style, the grain bill should include sufficient rye such that rye character is evident in the beer. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/rye-beer.jpg",
      OG: "",
      FG: "",
      ABV: "",
      IBU: "aries",
      BU: "aries",
      SRM: "",
      examples: [ 
          "LowRYEder: SweetWater Brewing Co.", 
          "Hoss: Great Divide Brewing Co."
      ]
    }, 
    {
      styleName: "Smoke Beer",
      familyName: "Specialty Beers",
      briefDescription: "When malt is kilned over an open flame, the smoke flavor becomes infused into the beer, leaving a taste that can vary from dense campfire, to slight wisps of smoke.",
      description: "When malt is kilned over an open flame, the smoke flavor becomes infused into the beer, leaving a taste that can vary from dense campfire, to slight wisps of smoke. Any style of beer can be smoked; the goal is to reach a balance between the style’s character and the smoky properties. Originating in Germany as rauchbier, this style is open to interpretation by U.S. craft brewers. Classic base styles include German-style Marzen/Oktoberfest, German-style bock, German-style dunkel, Vienna-style lager and more. Smoke flavors dissipate over time. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/smoke-beer.jpg",
      OG: "Varies",
      FG: "Varies",
      ABV: "Varies",
      IBU: "Varies",
      BU: "Varies",
      SRM: "Varies",
      examples: [ 
          "Smoke Jumper Smoked Imperial Porter: Left Hand Brewing Co.", 
          "Scarlet Fire: Victory Brewing Co."
      ]
    }, 
    {
      styleName: "Session Beer",
      familyName: "Specialty Beers",
      briefDescription: "Session beer is not defined by flavors or aromas, which can place it in almost any style category. Instead, what makes a session beer is primarily refreshment and drinkability.",
      description: "Session beer is not defined by flavors or aromas, which can place it in almost any style category. Instead, what makes a session beer is primarily refreshment and drinkability. Any style of beer can be made lower in strength than described in the classic style guidelines. The goal should be to reach a balance between the style’s character and the lower alcohol content. Drinkability is a factor in the overall balance of these beers. Beer should not exceed 5 percent ABV. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/session-beer.jpg",
      OG: "1.034 - 1.040",
      FG: "1.004 - 1.010",
      ABV: "4.0% - 5.0%",
      IBU: "10 - 35",
      BU: "0.29 - 0.87",
      SRM: "2+",
      examples: [ 
          "Provo Girl: Utah Brewers Co-op", 
          "Twerp: Pizza Port Brewing Co."
      ]
    }, 
    {
      styleName: "Honey Beer",
      familyName: "Specialty Beers",
      briefDescription: "Both lagers and ales can be brewed with honey. Some brewers will choose to experiment with ingredients, while others will add honey to traditional styles.",
      description: "Both lagers and ales can be brewed with honey. Some brewers will choose to experiment with ingredients, while others will add honey to traditional styles. Overall the character of honey should be evident but not totally overwhelming. A wide variety of honey beers are available. U.S. brewers may add honey to the boil kettle (as a sugar source) or post-boil (to preserve more volatile aromatics). Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/honey-beer.jpg",
      OG: "1.030 - 1.110",
      FG: "1.006 - 1.030",
      ABV: "2.5% - 12.0%",
      IBU: "1 - 100",
      BU: "0.03 - 0.91",
      SRM: "",
      examples: [ 
          "Jetty Cream Ale: Great South Bay Brewery", 
          "Westbound Braggot: Twisted Pine Brewing Co."
      ]
    }, 
    {
      styleName: "Specialty Beer",
      familyName: "Specialty Beers",
      briefDescription: "Ingredients used in the specialty beer style should be distinctive and evident in either the aroma, flavor or overall balance of the beer. This style category is a catch-all.",
      description: "Ingredients used in the specialty beer style should be distinctive and evident in either the aroma, flavor or overall balance of the beer. This style category is a catch-all. Any specialty beer that does not fit other specialty beer styles would be appropriately considered here. Examples can include sahti, roggenbier, steinbier, white IPA, session IPA and more. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/specialty-beer.jpg",
      OG: "1.030 - 1.140",
      FG: "1.006 - 1.030",
      ABV: "2.5% - 25.0+%",
      IBU: "1 - 100",
      BU: "",
      SRM: "",
      examples: [ 
          "Chainbreaker White IPA: Deschutes Brewery", 
          "Sam Adams Norse Legend Sahti: Boston Beer Co."
      ]
    }, 
    {
      styleName: "American Imperial Stout",
      familyName: "Stouts",
      briefDescription: "Black in color, these beers typically have an extremely rich malty flavor and aroma with full, sweet malt character. ",
      description: "The American-style imperial stout is the strongest in alcohol and body of the stouts. Black in color, these beers typically have an extremely rich malty flavor and aroma with full, sweet malt character. Bitterness can come from roasted malts or hop additions. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-imperial-stout.jpg",
      OG: "1.080 - 1.100",
      FG: "1.020 - 1.030",
      ABV: "7.0% - 12.0%",
      IBU: "50 - 80",
      BU: "0.62 - 0.80",
      SRM: "40+",
      examples: [ 
          "Expedition Stout: Bell's Brewery", 
          "Old Rasputin Imperial Stout: North Coast Brewing Co."
      ]
    }, 
    {
      styleName: "American Stout",
      familyName: "Stouts",
      briefDescription: "American stout beer is perhaps one of the most identifiable creations of the American beer world. Stout beer is about as dark of an American beer as can be, and has a very noticeable of appearance, aroma and flavor.",
      description: "American stout beer is perhaps one of the most identifiable creations of the American beer world. Stout beer is about as dark of an American beer as can be, and has a very noticeable of appearance, aroma and flavor. As one of the thicker, darker American beers on the craft beer scene, American stout beer is perfect for the colder seasons.Strikingly bold and undeniably beautiful, the American stout beer style blends generous amounts of dark malts with American hops to offer an adventurous experience that is unmatched by other styles of beer. Are you afraid of the dark? When it comes to American stout, don’t be. Allow your senses to run wild with this deceivingly sophisticated take on a European staple.Like many other beer styles that have become prized by American brewers and beer lovers alike, American stout is a distinct variant of a European stout beer counterpart. True to style, American stouts showcase generous quantities of the American hops fans have come to expect, and much like other stout beer types, American stout can be enjoyed year-round but is commonly considered a beer for the fall or winter months. The stout is a terrific companion to bold, hearty foods. Look for hearty game meats, as well as soups and strong cheeses to be particularly suitable for pairing for American stouts, in addition to a variety of after-dinner desserts.Reading about American stout is great, but we encourage you to seek out the style at a local brewery. Take advantage of our “Find a Brewery” map to discover a small and independent brewery near you to try your first, or next, American stout.If you enjoy the website and are interested in a convenient way to learn more about American beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-stout.jpg",
      OG: "1.050 - 1.075",
      FG: "1.010 - 1.022",
      ABV: "5.7% - 8.9%",
      IBU: "35 - 60",
      BU: "0.70 - 0.80",
      SRM: "40+",
      examples: [ 
          "Shakespeare Stout: Rogue Ales", 
          "Obsidian Stout: Deschutes Brewery"
      ]
    }, 
    {
      styleName: "English-Style Oatmeal Stout",
      familyName: "Stouts",
      briefDescription: "The addition of oatmeal adds a smooth, rich body to the oatmeal stout. This beer style is dark brown to black in color.",
      description: "The addition of oatmeal adds a smooth, rich body to the oatmeal stout. This beer style is dark brown to black in color. Roasted malt character is caramel-like and chocolate-like, and should be smooth and not bitter. Coffee-like roasted barley and malt aromas are prominent. This low- to medium-alcohol style is packed with darker malt flavors and a rich and oily body from oatmeal. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-oatmeal-stout.jpg",
      OG: "1.038 - 1.056",
      FG: "1.008 - 1.020",
      ABV: "3.8% - 6.1%",
      IBU: "20 - 40",
      BU: "0.53 - 0.71",
      SRM: "20+",
      examples: [ 
          "Stagecoach Stout: Figueroa Mountain Brewing Co.", 
          "Back Road Stout: Millstream Brewing Co."
      ]
    }, 
    {
      styleName: "English-Style Sweet Stout (Milk Stout)",
      familyName: "Stouts",
      briefDescription: "Sweet stout, also referred to as cream stout or milk stout, is black in color. Malt sweetness, chocolate and caramel should dominate the flavor profile and contribute to the aroma. ",
      description: "Sweet stout, also referred to as cream stout or milk stout, is black in color. Malt sweetness, chocolate and caramel should dominate the flavor profile and contribute to the aroma. It also should have a low to medium-low roasted malt/barley-derived bitterness. Milk sugar (lactose) lends the style more body. This beer does use lactose sugar, so people with an intolerance should probably avoid this style. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-sweet-stout-milk-stout.jpg",
      OG: "1.045 - 1.056",
      FG: "1.012 - 1.020",
      ABV: "3.2% - 6.3%",
      IBU: "15 - 25",
      BU: "0.33 - 0.45",
      SRM: "40+",
      examples: [ 
          "Milk Stout: Left Hand Brewing Co.", 
          "Udder Love: Beachwood Brewery & BBQ"
      ]
    }, 
    {
      styleName: "Irish-Style Dry Stout",
      familyName: "Stouts",
      briefDescription: "Dry stout is black beer with a dry-roasted character thanks to the use of roasted barley. The emphasis on coffee-like roasted barley and a moderate degree of roasted malt aromas define much of the character.",
      description: "Dry stout is black beer with a dry-roasted character thanks to the use of roasted barley. The emphasis on coffee-like roasted barley and a moderate degree of roasted malt aromas define much of the character. Hop bitterness is medium to medium high. This beer is often dispensed via nitrogen gas taps that lend a smooth, creamy body to the palate. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/irish-style-dry-stout.jpg",
      OG: "1.038 - 1.048",
      FG: "1.008 - 1.012",
      ABV: "4.2% - 5.3%",
      IBU: "30 - 40",
      BU: "0.79 - 0.83",
      SRM: "40+",
      examples: [ 
          "Blarney Sisters Dry Irish Stout: Third Street Aleworks", 
          "Seaside Stout: Pizza Port Brewing Co."
      ]
    }, 
    {
      styleName: "American Barley Wine",
      familyName: "Strong Ales",
      briefDescription: "American barley wine ranges from amber to deep red/copper-garnet in color. A caramel and/or toffee aroma and flavor are often part of the malt character along with high residual malty sweetness. ",
      description: "American barley wine ranges from amber to deep red/copper-garnet in color. A caramel and/or toffee aroma and flavor are often part of the malt character along with high residual malty sweetness. Complexity of alcohols is evident. Fruity-ester character is often high. As with many American versions of a style, this barley wine ale is typically more hop-forward and bitter than its U.K. counterpart. Low levels of age-induced oxidation can harmonize with other flavors and enhance the overall experience. Sometimes sold as vintage releases. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-barley-wine.jpg",
      OG: "1.090 - 1.120",
      FG: "1.024 - 1.028",
      ABV: "8.5% - 12.2%",
      IBU: "60 - 100",
      BU: "0.67 - 0.83",
      SRM: "11 - 18",
      examples: [ 
          "Bigfoot: Sierra Nevada Brewing Co.", 
          "Old Numbskull: AleSmith Brewing Co."
      ]
    }, 
    {
      styleName: "British-Style Barley Wine Ale",
      familyName: "Strong Ales",
      briefDescription: "This brawny, malt-forward beer style is often one of the strongest beer styles on any given beer menu, and showcases a complex melange of toffee and fruit flavors counterbalanced by warming alcohol and sturdy hop bitterness. ",
      description: "The name “British-style barley wine” represents a group of strong ales that rival the strength and complexity of some of the world’s most celebrated beverages. This brawny, malt-forward beer style is often one of the strongest beer styles on any given beer menu, and showcases a complex melange of toffee and fruit flavors counterbalanced by warming alcohol and sturdy hop bitterness. The barley wine beer style is a sipper, enjoyed responsibly, stylishly — preferably in front of a fire in a comfy chair amongst a plethora of leather-bound books.Barley wine beer is a strong ale that leans heavily on malt characteristics for flavor. With a wide color range and characteristically high in alcohol content, this is a style that is often aged, as it evolves well over time. As barley wine beers advance in age, they develop oxidative characteristics, including honey and toffee flavors as well as aromas, darker colors, lessened bitterness and more.The origin of the barley wine name brings confusion and its exact origin remains unclear. Strong, wine-strength beers have been around before the name barley wine was first used, but it is often said that barley wine does refer to a wine-strengthened beer. In history, few things are that simple, but regardless of origin, barley wine remains a strong ale with complex malts flavors and sturdy hop bitterness. While no grapes are harmed in the making of this ale, barley wines share wine’s compatibility with food, favoring rich dishes, desserts, the strongest of cheeses and even make for a great after meal digestif.Many craft breweries, microbreweries and brewpubs in the United States brew barley wines for beer lovers to hunt down, and we want to help you find the places to try them. Our “Find a Brewery” map is designed to help you find a location near you to try your first, or next, barley wine beer, and it might be closer to you than you think.If you enjoy the website and are interested in a convenient way to learn more about barley wine, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/british-style-barley-wine-ale.jpg",
      OG: "1.085 - 1.120",
      FG: "1.024 - 1.028",
      ABV: "8.5% - 12.0%",
      IBU: "40 - 60",
      BU: "0.47 - 0.50",
      SRM: "14 - 22",
      examples: [ 
          "Blithering Idiot: Weyerbacher Brewing Co.", 
          "Old Stock Ale: North Coast Brewing Co."
      ]
    }, 
    {
      styleName: "English-Style Old Ale",
      familyName: "Strong Ales",
      briefDescription: "A distinctive quality of these ales is that their yeast undergoes an aging process (often for years) in bulk storage or through bottle conditioning, which contributes to a rich, wine-like and often sweet oxidation character. ",
      description: "A distinctive quality of these ales is that their yeast undergoes an aging process (often for years) in bulk storage or through bottle conditioning, which contributes to a rich, wine-like and often sweet oxidation character. Old ales are copper-red to very dark in color. Complex estery character may emerge. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-old-ale.jpg",
      OG: "1.058 - 1.088",
      FG: "1.014 - 1.030",
      ABV: "6.3% - 9.1%",
      IBU: "30 - 65",
      BU: "0.52 - 0.74",
      SRM: "12 - 30",
      examples: [ 
          "Irish Walker: Olde Hickory Brewing", 
          "Heini's Hooch: The Church Brew Works"
      ]
    }, 
    {
      styleName: "American Imperial Red Ale",
      familyName: "Strong Ales",
      briefDescription: "The use of American hops in the American imperial red ale lends to the perception of medium hop bitterness, flavor and aroma. Coupled with a solid malt profile, this should be a beer with balance between hop bitterness and malt sweetness. ",
      description: "The use of American hops in the American imperial red ale lends to the perception of medium hop bitterness, flavor and aroma. Coupled with a solid malt profile, this should be a beer with balance between hop bitterness and malt sweetness. Some breweries will choose to bottle-condition this style, leading to possible fruity esters and some haze in their appearance. This is another example of modern American brewers taking an established style and boosting the flavor. California brewers are credited with creating this innovative style. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-imperial-red-ale.jpg",
      OG: "1.080 - 1.100",
      FG: "1.020 - 1.028",
      ABV: "8%-10.6%",
      IBU: "55 - 85",
      BU: "0.69 - 0.85",
      SRM: "10 - 17",
      examples: [ 
          "The Red Glove: Boxing Bear Brewing Co.", 
          " Shark Attack Double Red Ale: Port Brewing Co."
      ]
    }, 
    {
      styleName: "American-Style Wheat Wine Ale",
      familyName: "Wheat Beers",
      briefDescription: "Part of the “strong ale” category, the American-Style Wheat Wine Ale is not derived from grapes as its name might suggest. ",
      description: "Part of the “strong ale” category, the American-Style Wheat Wine Ale is not derived from grapes as its name might suggest. Made with at least 50 percent wheat malt, this full-bodied beer features bready and candy flavors, and finishes with a great deal of malty sweetness. These beers may be oak-aged and sometimes have small amounts of darker malts added. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-style-wheat-wine-ale.jpg",
      OG: "1.088 - 1.120",
      FG: "1.024 - 1.032",
      ABV: "8.5% - 12.2%",
      IBU: "45 - 85",
      BU: "0.51 - 0.71",
      SRM: "5 - 15",
      examples: [ 
          "Wheat Wine: Smuttynose Brewing Co.", 
          "Winter Wheat Wine: Rubicon Brewing Co."
      ]
    }, 
    {
      styleName: "American Wheat",
      familyName: "Wheat Beers",
      briefDescription: "American wheat beers are some of the most approachable beers in the craft beer world, and the versatility of wheat beer allows it to be combined with a variety of ingredients or enjoyed on its own alongside a wide variety of food options.",
      description: "American wheat beers are some of the most approachable beers in the craft beer world, and the versatility of wheat beer allows it to be combined with a variety of ingredients or enjoyed on its own alongside a wide variety of food options. The sizable portion of wheat malt used to brew wheat beer lends a lighter, distinctive experience compared to beers brewed with barley exclusively.Typically lighter in appearance, wheat beer can be made using either ale or lager yeast, and American wheat beer can be brewed with at least 30 percent malted wheat. Like the traditional German hefeweizen, these beers are typically served unfiltered and can have a cloudy appearance when roused. Traditionally hoppier than its German cousin, American wheat beer differs in that it does not offer flavors of banana or clove, which is indicative of the weizen yeast strain. Nevertheless, the American wheat beer is known worldwide as a refreshing summer style.Malted wheat imparts a distinctively light, flour-like character that differs from all-barley malt beer varieties. American craft brewers were likely inspired by the fruit and spice forward, unfiltered wheat beers of Bavaria. But without access to the specialty Bavarian weizen yeast so critical to the hefeweizen, brewers were forced to use clean fermenting American ale and lager yeast. The American wheat’s composition gives it a particularly inviting style, accepting of additional ingredients, particularly raspberries, watermelon and even chilis.The versatility of wheat beer is a large part as to why it is such a popular craft beer option across the country year-round. Its light character makes it a smooth American beer to pair with lighter foods like salads, shellfish and fresh cheeses. American beer brewers have successfully mastered their own version of the wheat beer, and we want to do our part to help you find your new favorite. Our “Find a Brewery” map is designed to help you find a place near you to try your first, or next, American wheat beer.Finding your new favorite wheat beer doesn’t have to stop here. If you enjoy the website and are interested in a convenient way to learn more about American beer, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-wheat.jpg",
      OG: "1.036 - 1.056",
      FG: "1.004 - 1.018",
      ABV: "3.5% - 5.6%",
      IBU: "10 - 35",
      BU: "0.28 - 0.62",
      SRM: "2 - 10",
      examples: [ 
          "Whacked Out Wheat: Telluride Brewing Co.", 
          "Oberon: Bell's Brewery Inc."
      ]
    }, 
    {
      styleName: "Berliner-Style Weisse",
      familyName: "Wheat Beers",
      briefDescription: "Low in alcohol, refreshingly tart, and often served with a flavored syrup like Woodruff or raspberry, the Berliner-style Weisse presents a harmony between yeast and lactic acid.",
      description: "Low in alcohol, refreshingly tart, and often served with a flavored syrup like Woodruff or raspberry, the Berliner-style Weisse presents a harmony between yeast and lactic acid. These beers are very pale in color, and may be cloudy as they are often unfiltered. Hops are not a feature of this style, but these beers often do showcase esters. Traditional versions often showcase Brettanomyces yeast. Growing in popularity in the U.S., where many brewers are now adding traditional and exotic fruits to the recipe, resulting in flavorful finishes with striking, colorful hues. These beers are incredible when pairing. Bitterness, alcohol and residual sugar are very low, allowing the beer’s acidity, white bread and graham cracker malt flavors to shine. Carbonation is very high, adding to the refreshment factor this style delivers. Many examples of this style contain no hops and thus no bitterness at all. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/berliner-style-weisse.jpg",
      OG: "1.028 - 1.032",
      FG: "1.004 - 1.006",
      ABV: "2.8% - 3.4%",
      IBU: "3 - 6",
      BU: "0.11 - 0.19",
      SRM: "2 - 4",
      examples: [ 
          "Berliner Weisse: Nodding Head Brewery & Restaurant", 
          "Athena: Creature Comforts Brewing Co."
      ]
    }, 
    {
      styleName: "German-Style Dunkelweizen",
      familyName: "Wheat Beers",
      briefDescription: "The German-style Dunkelweizen can be considered a cross between a German-style dunkel and a hefeweizen.",
      description: "The German-style Dunkelweizen can be considered a cross between a German-style dunkel and a hefeweizen. Distinguished by its sweet maltiness and chocolate-like character, it can also have banana and clove (and occasionally vanilla or bubblegum) esters from weizen ale yeast. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-dunkelweizen.jpg",
      OG: "1.048 - 1.056",
      FG: "1.008 - 1.016",
      ABV: "4.8% - 5.4%",
      IBU: "10 - 15",
      BU: "0.21 - 0.27",
      SRM: "10 - 25",
      examples: [ 
          "Samuel Adams Dunkelweizen: Boston Beer Co.", 
          "Shiner Dunkelweizen: Spoetzl Brewery"
      ]
    }, 
    {
      styleName: "German-Style Hefeweizen",
      familyName: "Wheat Beers",
      briefDescription: "Arguably one of the most recognizable beer styles, the German-style hefeweizen offers a striking beer experience thanks to the use of distinctive wheat malt, unique yeast and uncharateristic appearance. ",
      description: "Arguably one of the most recognizable beer styles, the German-style hefeweizen offers a striking beer experience thanks to the use of distinctive wheat malt, unique yeast and uncharateristic appearance. This wheat beer breaks from the German beer mold, showcasing yeast-driven fruit and spice as well as bearing an eye-catching mystique. Don’t let the cloudy hefeweizen deter you, this beer is one of the world’s most enjoyable styles for beer geeks and neophytes, alike. The refreshing qualities of this highly-carbonated style have kept it alive for centuries. Try one for yourself and experience why that is, firsthand.The German-style hefeweizen is straw to amber in color and brewed with at least 50 percent malted wheat. The aroma and flavor of a weissbier comes largely from the yeast and is decidedly fruity (banana) and phenolic (clove). The intensity of these wildly differing flavor qualities varies depending on the brewer, but the two are most commonly balanced. Hefeweizen typically contains a low to moderate alcohol content and is considered to be the most popular amongst the German weissbier variety.In German, “hefe” refers to the yeast which remains in suspension giving the German beer its cloudy appearance, and “weizen” denotes the use of wheat. This wheat beer is at its best when poured into a weizen vase, a large curvaceous glass which showcases the beer’s beautiful glow and corrals its large, persistent foam cap given the style’s characteristic effervescence. A German weissbier must showcase the weizen yeast’s one-two punch of fruit and spice to be recognized as a German hefeweizen. The bright fruitiness of banana alongside the pungency of clove allow this beer to work well with a variety of lighter foods, such as salads, seafood and even a variety of egg dishes.German hefeweizen beer, like any other beer, tastes best when freshly poured at a brewery, and we want to help you find the breweries near you that serve the German hefeweizen that you seek. Use our “Find a Brewery” feature to locate breweries based on your location or search for a specific brewery by name. You can even search by state to find a small and independent brewer near you in order to track down your next favorite beer, which could be a German hefeweizen beer.Finding your next favorite German hefeweizen doesn’t have to stop here. If you enjoy the website and are interested in a convenient way to learn more about German beer, or any other kind of beer for that matter, sign up to have our newsletter delivered directly to your inbox. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-hefeweizen.jpg",
      OG: "1.047 - 1.056",
      FG: "1.008 - 1.016",
      ABV: "4.9% - 5.6%",
      IBU: "10 - 15",
      BU: "0.21 - 0.27",
      SRM: "3 - 9",
      examples: [ 
          "DreamWeaver Wheat: Troegs Brewing Co.", 
          "Big Horn Hefeweizen: CB and Potts Restaurant & Brewery"
      ]
    }, 
    {
      styleName: "Belgian-Style Witbier",
      familyName: "Wheat Beers",
      briefDescription: "Belgian-style witbier is brewed using unmalted wheat, sometimes oats and malted barley. ",
      description: "Belgian-style witbier is brewed using unmalted wheat, sometimes oats and malted barley. Witbiers are spiced with coriander and orange peel. A style that dates back hundreds of years, it fell into relative obscurity until it was revived by Belgian brewer Pierre Celis in the 1960s. This style is currently enjoying a renaissance, especially in the American market. “Wit” means “white.” Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-wit.jpg",
      OG: "1.044 - 1.050",
      FG: "1.006 - 1.010",
      ABV: "4.8% - 5.6%",
      IBU: "10 - 17",
      BU: "0.23 - 0.34",
      SRM: "2 - 4",
      examples: [ 
          "Optimal Wit: Port City Brewing Co.", 
          "Ommegang Witte Ale: Brewery Ommegang"
      ]
    }, 
    {
      styleName: "American Brett",
      familyName: "Wild/Sour Beers",
      briefDescription: "Horsey, goaty, leathery, phenolic and some fruity acidic character derived from Brettanomyces organisms may be evident, but in balance with other components of an American Brett beer.",
      description: "These unique beers vary in color and can take on the hues of added fruits or other ingredients. Horsey, goaty, leathery, phenolic and some fruity acidic character derived from Brettanomyces organisms may be evident, but in balance with other components of an American Brett beer. Brett beer and sour beer are not synonymous. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-brett.jpg",
      OG: "",
      FG: "",
      ABV: "",
      IBU: "Varies",
      BU: "Varies",
      SRM: "",
      examples: [ 
          "Touch of Brett: Alesong Brewing & Blending", 
          "Sanctification: Russian River Brewing Company"
      ]
    },
    {
      styleName: "American Sour",
      familyName: "Wild/Sour Beers",
      briefDescription: "The acidity present in sour beer is usually in the form of lactic, acetic and other organic acids naturally developed with acidified malt in the mash, or produced during fermentation by the use of various microorganisms.",
      description: "The acidity present in sour beer is usually in the form of lactic, acetic and other organic acids naturally developed with acidified malt in the mash, or produced during fermentation by the use of various microorganisms. These beers may derive their sour flavor from pure cultured forms of souring agents or from the influence of barrel aging. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/american-sour.jpg",
      OG: "",
      FG: "",
      ABV: "",
      IBU: "Varies",
      BU: "Varies",
      SRM: "",
      examples: [ 
          "Ching Ching: Bend Brewing Co.", 
          "Le Petite Prince: Jester King Brewery"
      ]
    }, 
    {
      styleName: "Belgian-Style Flanders",
      familyName: "Wild/Sour Beers",
      briefDescription: "The Belgian-style Flanders is an ale with character and balance, thanks to lactic sourness and acetic acid. Cherry-like flavors are acceptable, as is malt sweetness that can lend bitterness and a cocoa-like character. ",
      description: "The Belgian-style Flanders is an ale with character and balance, thanks to lactic sourness and acetic acid. Cherry-like flavors are acceptable, as is malt sweetness that can lend bitterness and a cocoa-like character. Oak or other wood-like flavors may be present, even if the beer was not aged in barrels. Overall, the style is characterized by slight to strong lactic sourness, and Flanders “reds” sometimes include a balanced degree of acetic acid. Brettanomyces-produced flavors may be absent or very low. This style is a marvel in flavor complexity, combining malt, yeast, microorganisms, acidity and low astringency from barrel aging. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-flanders.jpg",
      OG: "1.044 - 1.056",
      FG: "1.008 - 1.016",
      ABV: "4.8% - 6.6%",
      IBU: "5 - 18",
      BU: "0.11 - 0.32",
      SRM: "12 - 25",
      examples: [ 
          "Enigma: New Glarus Brewing", 
          "Oud Tart: The Bruery"
      ]
    }, 
    {
      styleName: "Belgian-Style Lambic/Gueuze",
      familyName: "Wild/Sour Beers",
      briefDescription: "Belgian-style Lambic or Gueueze beers are naturally and spontaneously fermented with high to very high levels of esters, plus bacterial and yeast-derived sourness that sometimes includes acetic flavors.",
      description: "Belgian-style Lambic or Gueueze beers are naturally and spontaneously fermented with high to very high levels of esters, plus bacterial and yeast-derived sourness that sometimes includes acetic flavors. Lambics are not blended, while the gueuze style blends old and new lambics which are re-fermented in the bottle. Historically, they are dry and completely attenuated, exhibiting no residual sweetness either from malt, sugar or artificial sweeteners. Sweet versions may be created through the addition of sugars or artificial sweeteners. Many examples of this style are made to resemble the gueuze lambic beers of the Brussels area, where it originated. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-lambic-gueuze.jpg",
      OG: "1.044 - 1.056",
      FG: "1.000 - 1.010",
      ABV: "6.3% - 8.9%",
      IBU: "9 - 23",
      BU: "0.20 - 0.41",
      SRM: "6 - 13",
      examples: [ 
          "American Blackberry Sour: New Glarus Brewing", 
          "Sour Reserve: Upland Brewing Co."
      ]
    }, 
    {
      styleName: "Contemporary Gose",
      familyName: "Wild/Sour Beers",
      briefDescription: "Straw to medium amber, the contemporary Gose is cloudy from suspended yeast. A wide variety of herbal, spice, floral or fruity aromas other than found in traditional Leipzig-Style Gose are present, in harmony with other aromas.",
      description: "Straw to medium amber, the contemporary Gose is cloudy from suspended yeast. A wide variety of herbal, spice, floral or fruity aromas other than found in traditional Leipzig-Style Gose are present, in harmony with other aromas. Salt (table salt) character is traditional in low amounts, but may vary from absent to present. Body is low to medium-low. Low to medium lactic acid character is evident in all examples as sharp, refreshing sourness. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/contemporary-gose.jpg",
      OG: "1.036 - 1.056",
      FG: "1.008 - 1.012",
      ABV: "4.4-5.4",
      IBU: "10 - 15",
      BU: "0.28 - 0.27",
      SRM: "3 to 9",
      examples: [ 
          "Old Pro Gose: Union Craft Brewing", 
          "The Kimmie, The Yink & The Holy Gose: Anderson Valley Brewing Co."
      ]
    }, 
    {
      styleName: "Belgian-Style Fruit Lambic",
      familyName: "Wild/Sour Beers",
      briefDescription: "Often known as cassis, framboise, kriek, or peche, a fruit lambic takes on the color and flavor of the fruit it is brewed with. It can be dry or sweet, clear or cloudy, depending on the ingredients.",
      description: "Often known as cassis, framboise, kriek, or peche, a fruit lambic takes on the color and flavor of the fruit it is brewed with. It can be dry or sweet, clear or cloudy, depending on the ingredients. Notes of Brettanomyces yeast are often present at varied levels. Sourness is an important part of the flavor profile, though sweetness may compromise the intensity. These flavored lambic beers may be very dry or mildly sweet. Source: CraftBeer.com",
      image: "http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/belgian-style-fruit-lambic.jpg",
      OG: "1.040 - 1.072",
      FG: "1.008 - 1.016",
      ABV: "5.0% - 8.9%",
      IBU: "15 - 21",
      BU: "0.29 - 0.38",
      SRM: "",
      examples: [ 
          "Cherry Lambic: Upland Brewing Co.", 
          "Coolship Red: Allagash Brewing Co."
      ]
    }
  ];

  db.Beer
    .remove({})
    .then(() => db.Beer.collection.insertMany(beerStylesSeed))
    .then(data => {
      console.log(beerStylesSeed.length + " beers inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });



  