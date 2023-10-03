const express = require('express');
const { getResorts, addResort, updateResort } = require('../controllers/resortController');
const router = express.Router();

router.get('/', getResorts);
router.post('/', addResort);
router.put('/',  updateResort);


module.exports = { resortRoute: router };