const ObjectId = require('mongoose').Types.ObjectId;

/**
 * True if provided object ID valid
 * @param {string} id 
 */
function isObjectIdValid(id){ 
    return ObjectId.isValid(id) && new ObjectId(id) == id;
};

module.exports = {
    isObjectIdValid
}