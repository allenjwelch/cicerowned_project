const router = require("express").Router();
const beerRoutes = require("./beers");
const userRoutes = require('./users');
const styleRoutes = require('./styles');

// Routes
router.use("/beers", beerRoutes);
router.use("/styles", styleRoutes);
router.use("/users", userRoutes);

module.exports = router;
