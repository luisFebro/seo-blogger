const express = require('express');
const router = express.Router();
const { create } = require('../controllers/blog');

const { requireSignin } = require('../controllers/auth');

router.post('/blog', requireSignin, create);

module.exports = router;
