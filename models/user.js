const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    decksCompleted: [],
    decksCreated: [],
    badgesEarned: [],
    loggedInDates: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;