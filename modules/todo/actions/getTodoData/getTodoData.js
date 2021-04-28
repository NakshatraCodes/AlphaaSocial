const { todos } = require(__basedir + "/db/controllers");
const { isObjectIdValid } = require("../../../util");
const { throwNotFoundError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

/**
 * Method to get todo data by id
 * @param {string} todoId Todo Id
 * */
const getTodoData = async (todoId, conditionObj) => {
    if(todoId){
        const checkObjectId = isObjectIdValid(todoId);
        if(!checkObjectId){
            throwNotFoundError(messages.INVALID_TODO_ID);
        }
        const todo = await todos.getTodoById(todoId);
        if (!todo) {
            throwNotFoundError(messages.TODO_NOT_FOUND);
        }
        return todo;
    }else{
        const allTodos = await todos.getTodos(conditionObj);
        if (!allTodos) {
            throwNotFoundError(messages.NO_TODOS_FOUND);
        }
        return allTodos;
    }   
};

module.exports = {
    getTodoData
};