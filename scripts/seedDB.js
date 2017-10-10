const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

This file empties the Drinks collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/drinkDB",
  {
    useMongoClient: true
  }
);

const drinkSeed = [
  {
    name: "old-fashioned",
    title: "Old Fashioned",
    ingredient: ['simple syrup', 'angostura Bitters', 'rye Whiskey', 'whiskey'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2012/09/18160012/bourbon-old-fashioned.jpg",
    instructions: "In a mixing tin add:, .5 oz simple syrup, 2 dashes bitters, 2oz rye whiskey or whiskey, Stir and pour over old fashioned glass with ice, garnish with an orange peel, Enjoy!"
  },{
    name: "manhattan",
    title: "Manhattan",
    ingredient: ['sweet vermouth', 'whiskey', 'bitters'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2010/01/04120930/manhattan1.jpg",
    instructions: "In a mixing tin add:, 1oz Sweet Vermouth, 2.5 oz Whiskey, 2 dashes bitters, Stir and strain, Garnish with a cherry"
  },{
    name: "moscow-mule",
    title: "Moscow Mule",
    ingredient: ['vodka', 'lime juice', 'ginger beer'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2014/11/recipe-moscow-mule.jpg",
    instructions: "In a copper mug or rocks glass with ice add:, 2 oz Vodka, .5 oz lime juice, Fill with ginger beer, stir, garnish with lime"
  },{
    name: "negroni",
    title: "Negroni",
    ingredient: ['gin', 'campari', 'sweet vermouth'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2013/04/18110158/negroni-720x720-recipe.jpg",
    instructions: "In a mixing tin add: ,1oz gin, 1oz campari, 1oz sweet vermouth, Stir in tin and pour over ice in an old fashioned glass, garnish with orange peel."
  },{
    name: "whiskey-sour",
    title: "Whiskey Sour",
    ingredient: ['whiskey', 'lemon juice', 'sugar'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2011/07/05125158/fa-Whiskey-Sour.jpg",
    instructions: "In a mixing tin add: ,2 oz whiskey, .75 oz lemon juice, 1 tsp. sugar or sugar cube, Shake and stir over cocktail glass, Garnish with cherry or lemon wedge"
  },{
    name: "mint-julep",
    title: "Mint Julep",
    ingredient: ['bourbon', 'simple syrup', 'mint leaves'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2017/09/01105647/mint-julep-720x720-recipe-Molly.jpg",
    instructions: "In a copper tin or rocks glass: Muddle mint leaves with .5 oz of simple syrup, Fill with ice, Pour 1.5 oz of bourbon, stir and garnish with mint leaf."
  },{
    name: "red-bull-vodka",
    title: "Red Bull Vodka",
    ingredient: ['vodka', 'red bull'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2016/12/22114511/vodka-red-bull-720x720-recipe.jpg",
    instructions: "In a highball glass with ice add: ,1.5oz vodka, Fill with Red Bull"
  },{
    name: "scooby-snack",
    title: "Scooby Snack",
    ingredient: ['malibu rum', 'creme de banana', 'midori', 'pineapple juice', 'whipped cream'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2015/10/21175947/images1.jpg",
    instructions: "In a mixing tin with ice add:, .25 oz of each ingredient above, Shake and strain into a chilled shooter glass, Garnish with a lemon twist."
  },{
    name: "jaeger-bomb",
    title: "Jaeger Bomb",
    ingredient: ['red bull', 'jagermeister'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2015/10/16191117/il_570xN.528303243_h6ai.jpg",
    instructions: "In a pint glass add:, 1/2 can of Red Bull, drop a shot of Jagermeister into the glass."
  },{
    name: 'french-75',
    title: 'French 75',
    ingredient: ['gin', 'simple syrup', 'lemon juice', 'champagne'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2016/08/11115525/french-75-720x720-article.jpg",
    instructions: "In a mixing tin add:, 1 oz gin, .5 oz simple syrup, .5 oz lemon juice, Shake and strain into a chilled champagne flute glass, Fill the glass with champagne."
  },{
    name: 'kentucky-buck',
    title: 'Kentucky Buck',
    ingredient: ['whiskey', 'lime juice', 'ginger beer','lime'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2013/08/30223457/kentucky-buck-720x720-recipe.jpg",
    instructions: "In a copper mug or collins glass with ice add:, 2.5 oz whiskey, .5 oz lime juice, Fill with ginger beer, Stir and garnish with lime."
  },{
    name: 'irish-coffee',
    title: 'Irish Coffee',
    ingredient: ['coffee', 'sugar', 'irish whiskey'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2017/02/22140200/irish-coffee-720x720-recipe1.jpg",
    instructions: "In a coffee mug add:, 1.5 oz irish whiskey, 1 tsp. sugar, Fill with hot coffee and stir, Top with cream if desired"
  },{
    name: 'mimosa',
    title: 'Mimosa',
    ingredient: ['orange juice','champagne'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2016/07/23122415/mimosa-recipe-720-square.jpg",
    instructions: "In a champagne flute glass add:, Half orange juice., Half Champagne."
  },{
    name: 'jack-and-cola',
    title: "Jack and Coke",
    ingredient: ['jack daniels', "coke"],
    picture: "https://cdn.liquor.com/wp-content/uploads/2015/10/16234757/dsc_00081-1024x678.jpg",
    instructions: "In a Highball glass add:, 1.5 oz Jack., Fill with coke."
  },{
    name:'7-&-7',
    title: '7&7',
    ingredient: ["seagram's 7", "7-up"],
    picture: "https://cdn.liquor.com/wp-content/uploads/2012/04/seven-and-seven.jpg",
    instructions: "In a highball glass with ice add:, 1.5 oz Seagram's 7., Fill with 7-up."
  },{
    name:'cuba-libre',
    title: 'Cuba Libre',
    ingredient: ['rum', 'coke', 'lime juice'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2009/11/05135407/cuba-libre.jpg",
    instructions: "In a highball glass with ice add:, 1.5 oz Light Rum, .25 lime juice, Fill with coke."
  },{
    name:'greyhound',
    title: 'Greyhound',
    ingredient: ['vodka', 'grapefruit juice'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2011/04/Greyhound-newest.jpg",
    instructions: "In a highball glass with ice add:, 1.5 oz Vodka, Fill with grapefruit juice"
  },{
    name:'cape-cod',
    title: 'Cape Cod',
    ingredient: ['vodka', 'cranberry juice'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2015/10/16224335/imgres.jpg",
    instructions: "In a highball glass with ice add:, 1.5 oz Vodka, Fill with cranberry juice"
  },{
    name:'tequila-sunrise',
    title: 'Tequila Sunrise',
    ingredient: ['tequila', 'grenadine', 'orange juice'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2017/03/07152925/tequila-sunrise-720x720-recipe.jpg",
    instructions: "In a collins glass with ice add:, .5 oz grenadine, 1.5 oz Tequila, Fill with orange juice, Garnish with cherry"
  },{
    name:'madras',
    title: 'Madras',
    ingredient: ['vodka', 'orange juice', 'cranberry juice'],
    picture: "https://mixthatdrink.com/wp-content/uploads/2012/02/madras-cocktail.jpg",
    instructions: "In a highball glass with ice add:, 1.5 oz Vodka, 1 oz orange juice, Fill with cranberry juice, garnish with lime wedge."
  },{
    name:'sex-on-the-beach',
    title: 'Sex on the Beach',
    ingredient: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2017/09/01105701/sex-on-the-beach-720x720-Molly.jpeg",
    instructions: "In a collins glass with ice add:, 1 oz Vodka, .5 oz Peach Schnapps, Fill 1/2 orange juice, 1/2 cranberry juice."
  },{
    name:'sidecar',
    title: 'sidecar',
    ingredient: ['cognac', 'cointreau', 'lemon juice'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2011/09/21090019/sidecar2.jpg",
    instructions: "In a mixing tin add:, 1.5oz Cognac, .5 oz cointreau, .5 oz lemon juice, Shake and strain into cocktail glass, Sugar rim is optional, Lemon twist is optional"
  },{
    name:'tom-collins',
    title: 'Tom Collins',
    ingredient: ['gin', 'lemon juice', 'simple syrup', 'club soda'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2010/12/16130814/tom-collins.jpg",
    instructions: "In a mixing tin add:, .75 oz fresh lemon juice, .75 oz simple syrup, 1.5 oz Gin, Shake and strain into highball or collins glass with ice, Fill with club soda, Garnish with lemon wheel and or cherry."
  },{
    name:'long-island-iced-tea',
    title: 'Long Island Ice Tea',
    ingredient: ['vodka', 'gin', 'tequila', 'rum', 'triple sec', 'sweet and sour', 'coke'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2017/03/07152907/long-island-iced-tea-720x720-recipe.jpg",
    instructions: "In a collins glass with ice add:, .5 oz Vodka, .5 oz Gin, .5 oz Tequila, .5 oz Rum, .5 oz triple sec, 1.5 oz sweet and sour(lemon juice), Splash of coke, Garnish with lemon wedge"
  }
  ];



// ,{
//     name: '',
//     title: '',
//     ingredient: [],
//     picture: '',
//     instructions: 
//   }


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