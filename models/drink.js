const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  ingredient: { type: Array, required: true },
  picture: { type: String, required: true },
  instruction: { type: String, required: true }, 
  favorite: {type: Boolean, default: false}
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
