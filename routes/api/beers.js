const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Matches with "/api/beers"
router.route("/")
  .get(beersController.findAll)
  .post(beersController.create);

// Matches with "/api/beers/:id"
router.route("/:id")
  .get(beersController.findById)
  .put(beersController.update)
  .delete(beersController.remove);

// Matches with "/api/beers/styles"
router.route("/styles")
  .get(beersController.findByStyle);

module.exports = router;
