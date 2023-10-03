const express = require('express');
const { userRegister, userLogIn, getUsers } = require('../controllers/userController');
const router = express.Router();
// const User = require('../models/userModel');


router.get('/', getUsers);
router.post('/', userRegister);
router.put('/login', userLogIn);


module.exports = { userRoute: router };
