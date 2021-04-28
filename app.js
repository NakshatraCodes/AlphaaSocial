/**
 * @file app.js
 * @summary Create and expose express app instance
 * @description This file is responsible for creating instance of express and initializing swagger. All application specific
 * middleware will be used here.
 * The app instance along with the express router are exposed to be used by HTTP server.
 * */
const express = require("express");
const path = require("path");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const passport = require("passport");
const router = express.Router();
const initiateSwagger = require("./swagger");
const initiateRoutes = require("./modules");
const { accessLogger } = require("./middlewares");
const { constants } = require("./config");

const { ENABLE_ACCESS_LOGS } = constants;

const app = express();

app.use(urlencoded({
    extended: true
}));

app.use(json({
    extended: true
}));

// set up cors to allow us to accept requests from our client
app.use(cors());

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

initiateSwagger(router);
initiateRoutes(router);

if (ENABLE_ACCESS_LOGS) {
    router.use(accessLogger);
}

app.use(express.static(path.join(__dirname, 'client/build'), {
    index: ["index.html"]
}));

app.use('/api/v1', router);

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.use("*", express.static("client/build"));


module.exports = {
    app,
    router
};
