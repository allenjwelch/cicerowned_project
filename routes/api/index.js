const router = require("express").Router();
const beerRoutes = require("./beers");
const userRoutes = require('./users');
const flashCardRoutes = require('./flashcards');
const pubRoutes = require('./pubdecks')

// Routes
router.use("/beers", beerRoutes);
router.use("/decks", flashCardRoutes);
router.use("/users", userRoutes);
router.use('/pubdecks', pubRoutes);

module.exports = router;
