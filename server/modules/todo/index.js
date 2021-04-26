/**
 * @file index.js
 * @summary Todo routes
 * @description This file contains routes for todo entity
 * */
const { authenticateUserWithToken } = require(__basedir + "/middlewares");
const { getTodo, addTodo, updateTodo, deleteTodo } = require('./controller');

module.exports = router => {

    /**
     * @swagger
     * /todos:
     *  get:
     *      tags:
     *          - todos
     *      security:
     *      - JWT: []
     *      summary: Get all todos
     *      description: Returns all todos
     *      produces:
     *          - application/json
     *      responses:
     *          200:
     *              description: An array of Todo Objects
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: '#/definitions/TodoRes'
     *          400:
     *              description: Bad Request
     *          403:
     *              description: Forbidden
     *          500:
     *              description: Internal Error
     *
     */
    router.get("/todos",
        authenticateUserWithToken,
        getTodo);

    router.get("/todo/:todoId",
        authenticateUserWithToken,
        getTodo);

    router.post("/todo",
        authenticateUserWithToken,
        addTodo);

    router.put("/todo/:todoId",
        authenticateUserWithToken,
        updateTodo);

    router.delete("/todo/:todoId",
        authenticateUserWithToken,
        deleteTodo)

};

    /**
     * Add model definitions
     * @swagger
     * definitions:
     *  TodoRes:
     *      type: object
     *      properties:
     *          _id:
     *              type: string
     *              example: my first todo
     *          description:
     *              type: string
     *              example: go to the gym
     */
