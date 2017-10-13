const router = require("express").Router();
const drinksController = require("../../controllers/drinksController");

// Matches with "/api/drinks/:ingredient"
router
  .route("/search/:ingredient")
  .get(drinksController.find)
// Matches with "/api/drinks/:id"
router
  .route("/:id")
  .get(drinksController.findById)
// Matches with "/api/drinks"
router
  .route("/")
  .get(drinksController.findAll)
  // .put(drinksController.update)
  // .delete(drinksController.remove);

module.exports = router;
