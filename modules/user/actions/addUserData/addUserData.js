const { users } = require(__basedir + "/db/controllers");
const { createToken } = require(__basedir + "/middlewares");
const { throwBadRequestError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

/**
 * Method to add new user
 * @param {object} userObj User object.
 * */
const addUserData = async userObj => {
    const user = await users.getUser({ email: userObj.email });
    const token = await createToken(user);
    if (user) {
        return {
            user,
            token
        };
    }
    const result = await users.createUser(userObj);
    return {
        user: result,
        token
    };
};

module.exports = {
    addUserData
};