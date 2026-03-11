const Comment = require('../models/Comment');

exports.getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.findByPostId(req.params.postId);
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

exports.createComment = async (req, res) => {
  try {
    const { post_id, author_name, author_email, content } = req.body;
    if (!post_id || !author_name || !author_email || !content) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const commentId = await Comment.create(req.body);
    res.status(201).json({ id: commentId, message: 'Comment posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
};