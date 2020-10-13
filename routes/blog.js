const express = require('express');
const router = express.Router();
const { create, list, listAllBlogsCategoriesTags, read, remove, update } = require('../controllers/blog');

const { requireSignin } = require('../controllers/auth');

router.post('/blog', requireSignin, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, remove);
router.put('/blog/:slug', requireSignin, update);

module.exports = router;
