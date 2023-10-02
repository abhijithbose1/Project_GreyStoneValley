const express = require('express');
const { User } = require('../models/userModel');
const router = express.Router();
// const User = require('../models/userModel');

router.get('/', async (req, res) => {
    try {
        const dbResponse = await User.find();
        res.json(dbResponse);
        // res.json('user data fetched successfully');
    } catch (error) {
        res.status(400).json(error.message);        
    }
})

// user sign-up 
router.post('/', async (req, res) => {
    const { userName, email, password, mobile} = req.body;

    try {
        const isExist = await User.find({ email: email });
        if (isExist) {
            res.json({ message: `User with Email ID : ${email} already exists` });
        }
        const dbResponse = await User.create({ userName, email });
        res.json({ message: 'Account created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
})

// user log-in
router.post('/', async (req, res) => {
    const { userName, email } = req.body;

    try {
        const isExist = await User.find({ email: email });
        if (isExist) {
            res.json({ message: `User with Email ID : ${email} already exists` });
        }
        const dbResponse = await User.create({ userName, email });
        res.json({ message: 'Account created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
})



module.exports = router;
