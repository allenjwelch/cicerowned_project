const router = require("express").Router();
const pubDeckController = require("../../controllers/pubDeckController");

// Matches with "/api/pubdecks"
router.route("/")
  .get(pubDeckController.findPub)
  .post(pubDeckController.create);


// Matches with "/api/pubDecks/id
router.route("/:id")
  .get(pubDeckController.findById)
  .put(pubDeckController.update)
  .delete(pubDeckController.remove);

module.exports = router;
