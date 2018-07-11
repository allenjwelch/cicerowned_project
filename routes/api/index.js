const router = require("express").Router();
const beerRoutes = require("./beers");
const userRoutes = require('./users');
const flashCardRoutes = require('./flashcards');

// Routes
router.use("/beers", beerRoutes);
router.use("/decks", flashCardRoutes);
router.use("/users", userRoutes);

module.exports = router;
