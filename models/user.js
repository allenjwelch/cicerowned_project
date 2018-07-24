const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true},
    email: { type: String, required: true },
    signUpDate: { type: Date, default: Date.now },
    userDecks: {type: Array, default:[]},
    decksCompleted: [],
    decksLearned:[],
    decksCreated: {type: Array, default:[]},
    badgesEarned: {type: Array, default:[]},
    loggedInDates: {type: Array}
});

const User = mongoose.model("User", userSchema);

module.exports = User;