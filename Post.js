const db = require('../config/db');

class Post {
  static async findAllPublished() {
    const [rows] = await db.execute(
      'SELECT * FROM posts WHERE status = "published" ORDER BY published_at DESC'
    );
    return rows;
  }

  static async findBySlug(slug) {
    const [rows] = await db.execute(
      'SELECT * FROM posts WHERE slug = ? AND status = "published"',
      [slug]
    );
    return rows[0];
  }
}

module.exports = Post;