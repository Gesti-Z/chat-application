const express = require('express');

const { signup, login } = require('../controllers/auth.js');

const router = express.Router();

//routes to send data from fe to be
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
