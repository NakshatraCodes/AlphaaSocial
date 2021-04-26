const { todos } = require(__basedir + "/db/controllers");
const { isObjectIdValid } = require("../../../util");
const { throwNotFoundError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

/**
 * Method to delete todo data by id
 * @param {string} todoId Todo Id
 * */
const deleteTodoData = async todoId => {
    const checkObjectId = isObjectIdValid(todoId);
    if(!checkObjectId){
        throwNotFoundError(messages.INVALID_TODO_ID);
    }
    const todo = await todos.getTodoById(todoId);
    if (!todo) {
        throwNotFoundError(messages.TODO_NOT_FOUND);
    }
    await todos.deleteTodoById(todoId);
    return todo;
};

module.exports = {
    deleteTodoData
};