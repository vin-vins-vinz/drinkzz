const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Drinks collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/drinkDB",
  {
    useMongoClient: true
  }
);

const drinkSeed = [
  {
    name: "old-fashion",
    title: "Old Fashion",
    ingredient: ['angostura bitters', 'sugar', 'orange', 'cherry', 'bourbon', 'soda'],
    picture: "http://thechurchontheway.org/wp-content/uploads/2016/05/placeholder1.png",
    instruction: "Comming soon..."
  },
  {
    name: "manhatten",
    title: "Manhatten",
    ingredient: ['whiskey', 'sweet vermouth'],
    picture: "http://thechurchontheway.org/wp-content/uploads/2016/05/placeholder1.png",
    instruction: "Comming soon..."
  },
  {
    name: "moscow-mule",
    title: "Moscow Mule",
    ingredient: ['vodka', 'lime', 'ginger syrup'],
    picture: "http://thechurchontheway.org/wp-content/uploads/2016/05/placeholder1.png",
    instruction: "Comming soon..."
  },
  {
    name: "negroni",
    title: "Negroni",
    ingredient: ['campari', 'gin', 'sweet vermouth', 'orange'],
    picture: "http://thechurchontheway.org/wp-content/uploads/2016/05/placeholder1.png",
    instruction: "Use 1 oz Campari, 1 oz Gin, 1 oz Sweet vermouth; Garnish: Orange half-wheel; Glass: Rocks. PREPARATION: Add all the ingredients to an Old Fashioned glass and fill with ice. Stir until cold and garnish with an orange half-wheel."
  },
  {
    name: "whiskey-sour-cocktail",
    Title: "Whiskey Sour Cocktail",
    ingredient: ['bourbon', 'lemon', 'sugar', 'cherry'],
    picture: "http://thechurchontheway.org/wp-content/uploads/2016/05/placeholder1.png",
    instruction: "Use 1 1⁄2 oz Bourbon, 3⁄4 oz Fresh lemon juic, 3⁄4 oz Simple syrup (1 part water, 1 part sugar), 1  Cherry  PREPARATION: Add all the ingredients to a shaker filled with ice and shake. Strain into a rocks glass filled with fresh ice. Garnish with a cherry and lemon wedge."
  },
  {
    name: "mint-julep-cocktail",
    title: "Mint Julep Cocktail",
    ingredient: ['sugar', 'mint', 'bourbon'],
    picture: "http://thechurchontheway.org/wp-content/uploads/2016/05/placeholder1.png",
    instruction: "Use 1⁄4 oz Raw sugar syrup, 8 Mint Leaves, 2 oz Bourbon. PREPMINT JULEP COCKTAIL: In a Julep cup or rocks glass, lightly muddle the mint and syrup. Add the bourbon and pack tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome and garnish with a few drops of bitters, if desired, and a mint sprig."
  },
//   {
//     name: ,
//     title: ,
//     ingredient: [],
//     picture: ,
//     instruction: 
//   },

];

db.Drink
  .remove({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });