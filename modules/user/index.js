/**
 * @file index.js
 * @summary User routes
 * @description This file contains routes for user entity
 * */
const { authenticateUserWithToken } = require(__basedir + "/middlewares");
const { getUser, updateLayoutByUserId } = require('./controller');

module.exports = router => {

    /**
     * @swagger
     * /users:
     *  get:
     *      tags:
     *          - users
     *      security:
     *      - JWT: []
     *      summary: Get all users
     *      description: Returns all users
     *      produces:
     *          - application/json
     *      responses:
     *          200:
     *              description: An array of User Objects
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: '#/definitions/UserRes'
     *          400:
     *              description: Bad Request
     *          403:
     *              description: Forbidden
     *          500:
     *              description: Internal Error
     *
     */
    router.get("/user",
        authenticateUserWithToken,
        getUser);

    router.put("/user",
        authenticateUserWithToken,
        updateLayoutByUserId);
};