/**
 * @file todos.js
 * @summary Defines and exposes methods for todos entity
 * */
const { Todos } = require(__basedir + "/db/models");

/**
 * Method to get todo by id from DB
 * @param {string} todoId Todo id
 * @param {object} [selection] Object with DB projection
 * */
const getTodoById = (todoId, selection = {}) => Todos.findOne({
    _id: todoId
}, selection).lean();

/**
 * Method to get todo info from DB
 * @param {string} condition Condition by which todo will be fetched
 * @param {object} [selection] Object with DB projection
 * */
const getTodo = (condition = {}, selection = {}) => Todos.findOne(condition, selection).lean();

/**
 * Method to get all todos info from DB
 * @param {string} condition Condition by which todo will be fetched
 * @param {object} [selection] Object with DB projection
 * */
const getTodos = (condition = {}, selection = {}) => Todos.find(condition, selection).lean();

/**
 * Method to create todo in DB
 * @param {object} userObj Todo info to save
 * */
const createTodo = (todoObj) => {
    const todo = new Todos(todoObj);
    return todo.save();
};

/**
 * Method to update todo by id from DB
 * @param {string} todoId Todo id
 * @param {object} updates Data to update
 * */
const updateTodoById = (todoId, updates) => Todos.updateOne({
    _id: todoId
}, {
    $set: updates
});

/**
 * Method to remove todo by id from DB
 * @param {string} todoId Todo id
 * */
const deleteTodoById = (todoId) => Todos.deleteOne({
    _id: todoId
});

module.exports = {
    getTodos,
    getTodo,
    getTodoById,
    createTodo,
    updateTodoById,
    deleteTodoById
}; 