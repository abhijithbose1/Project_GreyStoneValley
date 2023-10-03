const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique:false    //even though unique=false. stil getting error messages on duplicate values.
        },
        email: {
            type: String,
            required: true,
            unique: true    /*since it's not a validator, you can't add custom error message.
                    for that use validation on Controllers or use plug in //? npm mongoose-unique-validator */
        },
        phone: {
            type: Number,
        },
        password: {
            type: String,

        }
    }
);

const User = mongoose.model('User', userSchema);
module.exports = { User };