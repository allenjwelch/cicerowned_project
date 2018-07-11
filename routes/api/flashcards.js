const router = require("express").Router();
const flashCardController = require("../../controllers/flashCardController");

// Matches with "/api/decks"
router.route("/")
  .get(flashCardController.findByStyle);

router.route("/user")
  .get(flashCardController.findUserDecks);


module.exports = router;