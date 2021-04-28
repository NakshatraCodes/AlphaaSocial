/**
 * @file todos.js
 * @summary Defines todo schema
 * */

 const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
});

module.exports = {
    Todos: model("Todos", todoSchema)
};