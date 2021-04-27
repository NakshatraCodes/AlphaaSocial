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

const { ENABLE_ACCESS_LOGS, CLIENT_HOME_PAGE_URL } = constants;

const app = express();

app.use(urlencoded({
    extended: true
}));

app.use(json({
    extended: true
}));

// set up cors to allow us to accept requests from our client
app.use(
    cors({
        origin: CLIENT_HOME_PAGE_URL, // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    })
);

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

initiateSwagger(router);
initiateRoutes(router);

if (ENABLE_ACCESS_LOGS) {
    router.use(accessLogger);
}

app.use('/api/v1', router);

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access", "application/json");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

if(process.env.ENV="production"){
    app.use(express.static(path.resolve('client', 'build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

// For serving files statically from "public" directory
app.use(express.static("public"));

module.exports = {
    app,
    router
};
