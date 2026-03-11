const db = require('../config/db');

class Comment {
  static async findByPostId(postId) {
    const [rows] = await db.execute(
      'SELECT * FROM comments WHERE post_id = ? AND status = "approved" ORDER BY created_at DESC',
      [postId]
    );
    return rows;
  }

  static async create(commentData) {
    const { post_id, author_name, author_email, content } = commentData;
    const [result] = await db.execute(
      'INSERT INTO comments (post_id, author_name, author_email, content) VALUES (?, ?, ?, ?)',
      [post_id, author_name, author_email, content]
    );
    return result.insertId;
  }
}

module.exports = Comment;