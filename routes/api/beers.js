const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Matches with "/api/beers"
router.route("/")
  .get(beersController.findAll)
  .post(beersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(beersController.findById)
  .put(beersController.update)
  .delete(beersController.remove);

module.exports = router;
