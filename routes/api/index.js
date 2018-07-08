const router = require("express").Router();
const beerRoutes = require("./beers");
// const userRoutes = require('./users');

// Routes
router.use("/beers", beerRoutes);
// router.use("/users", userRoutes);

module.exports = router;
