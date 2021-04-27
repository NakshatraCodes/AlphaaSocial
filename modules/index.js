/**
 * @file index.js
 * @summary Initiate and expose routes
 * */
const user = require('./user');
const auth = require('./auth');
const todo = require('./todo');

const initiateRoutes = router => {
    // all modules with routes will be added here
    user(router);
    auth(router);
    todo(router);
};

module.exports = initiateRoutes;