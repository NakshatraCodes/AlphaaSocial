const { users } = require(__basedir + "/db/controllers");
const { isObjectIdValid } = require("../../../util");
const { throwNotFoundError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

/**
 * Method to update layout data by user id
 * @param {string} userId User Id
 * */
const updateLayoutData = async (userId, updates) => {
    const checkObjectId = isObjectIdValid(userId);
    if(!checkObjectId){
        throwNotFoundError(messages.INVALID_USER_ID);
    }
    const user = await users.getUserById(userId);
    if (!user) {
        throwNotFoundError(messages.USER_NOT_FOUND);
    }
    await users.updateUserById(userId, updates);
    return user;
};

module.exports = {
    updateLayoutData
};