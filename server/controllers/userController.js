// import { User } from "../models/userModel";
const { User } = require("../models/userModel");
const { uniqueValidator } = require("../errorHandlers/schemaErrors");


const userRegister = async (req, res,next) => {
    const { userName, email, password, mobile } = req.body;
    try {
        const dbResponse = await User.create({ userName, email });
        res.json({ message: 'Account created successfully' });

    } catch (error) {
        uniqueValidator(res, error, 'email');
        next(error);
    }
}

const userLogIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        //! authenticaton
        res.json({ message: 'log in successful' });

    } catch (error) {
        next(error);
    }
}

const getUsers = async (req, res) => {
    try {
        const dbResponse = await User.find();
        res.json(dbResponse);
        // res.json('user data fetched successfully');
    } catch (error) {
        next(error);
    }
}

module.exports = { userRegister, userLogIn, getUsers };









