const db = require("../models");

// Defining methods for the drinksController
module.exports = {
    
  findAll: function(req, res) {
      db.Drink
        .find(req.query)
        .sort({ name:-1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },


  find: function (req, res) {
    var search = {};
    // creating this search option with empty object can allow multiple matching find from DB.
    if(req.params.ingredient) {
      search.ingredient = req.params.ingredient;
    }
    console.log('req.params:', req.params);
    db.Drink
    .find(search, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },


  findById: function(req, res) {
    db.Drink
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
};
