/**
 * @file users.js
 * @summary Defines user schema
 * */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    avatar: {
        type: String
    }
});

module.exports = {
    Users: mongoose.model("Users", userSchema)
};
