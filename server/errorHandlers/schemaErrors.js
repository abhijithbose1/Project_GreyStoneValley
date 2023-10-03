
//* use this function only when the 'unique' propery is used in the document declaration. 
// this fn return custom error message when the document with same value exists.

/**  
    @param {Response} res Response from the db 
    @param {Object} error The Object
    @param {String} documentName The string 
*/
//  expected datatype is not showing for 'error' 

const uniqueValidator = (res, error, documentName) => {
    if (error.code == 11000 && error.keyPattern[documentName] === 1) {
        return res.status(400).json({
            message: `${documentName} already exists`
        });
    }
}


module.exports = { uniqueValidator }