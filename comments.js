const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/post/:postId', commentController.getCommentsByPost);
router.post('/', commentController.createComment);

module.exports = router;