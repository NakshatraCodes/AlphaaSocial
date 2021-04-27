const { users } = require(__basedir + "/db/controllers");

/**
 * Method to add new user
 * @param {object} userObj User object.
 * */
const addUserData = async userObj => {
    const user = await users.getUser({ email: userObj.email });
    if (user) {
        return {
            user
        };
    }
    const result = await users.createUser(userObj);
    return {
        user: result
    };
};

module.exports = {
    addUserData
};