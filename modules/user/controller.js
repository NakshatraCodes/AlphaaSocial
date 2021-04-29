/**
 * @file controller.js
 * @summary User controllers
 * @description This file contains controller definition for user entity.
 * Each method is responsible for extracting data, passing to corresponding action and
 * send response back to client.
 * */

const { getUserData, addUserData, updateLayoutData } = require("./actions");
const { constants } = require(__basedir + "/config");
const { SUCCESS } = constants;

/**
 * Controller to get user data by id
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next next method
 * */
const getUser = async (req, res, next) => {
    try {
        const { _id: userId } = req.user;
        const data = await getUserData(userId);
        return res.status(SUCCESS.CODE).send({ data });
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        });
    }
};

/**
 * Controller to add/create new user
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next next method
 * */
const addUser = async (req, res, next) => {
    try {
        const userObj = req.body;
        const data = await addUserData(userObj);
        res.status(SUCCESS.CODE).send({ data });
        next();
    } catch (error) {
        res.status(error.code).send({
            error: error.message
        });
        next();
    }
};

/**
 * Controller to update layout
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next next method
 * */
 const updateLayoutByUserId = async (req, res, next) => {
    try {
        const { _id: userId } = req.user;
        const updates = req.body;
        await updateLayoutData(userId, updates);
        return res.status(SUCCESS.CODE).send({ message: "layout updated successfully" });
    } catch (error) {
        return res.status(error.code).send({
            error: error.message
        });
    }
};

module.exports = {
    getUser,
    addUser,
    updateLayoutByUserId
};