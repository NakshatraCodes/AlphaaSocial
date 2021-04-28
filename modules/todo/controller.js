/**
 * @file controller.js
 * @summary Todo controllers
 * @description This file contains controller definition for todo entity.
 * Each method is responsible for extracting data, passing to corresponding action and
 * send response back to client.
 * */

const { getTodoData, addTodoData, updateTodoData, deleteTodoData } = require("./actions");
const { constants } = require(__basedir + "/config");
const { SUCCESS } = constants;

/**
 * Controller to get todo data by id
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next next method
 * */
const getTodo = async (req, res, next) => {
    try {
        const { todoId } = req.params;
        const data = await getTodoData(todoId, { user: req.user._id });
        return res.status(SUCCESS.CODE).send({ data });
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        });
    }
};

/**
 * Controller to add/create new todo
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next next method
 * */
const addTodo = async (req, res, next) => {
    try {
        let todoObj = req.body;
        todoObj.user = req.user._id;
        const data = await addTodoData(todoObj);
        return res.status(SUCCESS.CODE).send({ data });
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        });
    }
};

/**
 * Controller to update todo
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next next method
 * */
const updateTodo = async (req, res, next) => {
    try {
        const { todoId } = req.params;
        const updates = req.body;
        await updateTodoData(todoId, updates);
        return res.status(SUCCESS.CODE).send({ message: "todo updated successfully" });
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        });
    }
};

/**
 * Controller to delete todo
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next next method
 * */
const deleteTodo = async (req, res, next) => {
    try {
        const { todoId } = req.params;
        await deleteTodoData(todoId);
        return res.status(SUCCESS.CODE).send({ message: "todo deleted successfully" });
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        });
    }
};

module.exports = {
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
};