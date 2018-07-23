const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id/:familyName/:badgesEarned/:score")
  .get(usersController.findById)
  .put(usersController.updateScore)
  .delete(usersController.remove);

module.exports = router;
