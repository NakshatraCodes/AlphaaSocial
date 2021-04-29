/**
 * @file users.js
 * @summary Defines user schema
 * */

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    layout: {
        type: Array
    },
    todos: {
        type: Schema.Types.ObjectId,
        ref: "Todos"
    }
});

module.exports = {
    Users: model("Users", userSchema)
};
