const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Matches with "/api/styles"
router.route("/")
  .get(beersController.findByStyle);

module.exports = router;
