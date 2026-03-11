const db = require('../config/db');

class Contact {
  static async create(messageData) {
    const { name, email, message } = messageData;
    const [result] = await db.execute(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    return result.insertId;
  }
}

module.exports = Contact;