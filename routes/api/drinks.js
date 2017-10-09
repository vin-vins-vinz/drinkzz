const router = require("express").Router();
const drinksController = require("../../controllers/drinksController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/drinks/:ingredient"
router
  .route("/search/:ingredient")
  .get(drinksController.find)
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(drinksController.findById)
  // .put(drinksController.update)
  // .delete(drinksController.remove);

module.exports = router;
