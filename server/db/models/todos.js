/**
 * @file todos.js
 * @summary Defines todo schema
 * */

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = {
    Todos: mongoose.model("Todos", todoSchema)
};