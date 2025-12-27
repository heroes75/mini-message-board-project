const pool = require('./pool')

async function getAllMessages() {
    const {rows} = await pool.query(`SELECT * FROM messages`);
    console.log('rows:', rows)
    return rows
}

async function addMessage(message) {
    await pool.query(`INSERT INTO messages (username, text, added) VALUES ($1, $2, NOW())`,[message.username, message.text]);
    console.log(`${message.username}'s message added`)
}

async function getMessageInfo(userId) {
    const {rows} = await pool.query(`SELECT * FROM messages WHERE id = $1`, [userId]);
    return rows
}

module.exports = {
    getAllMessages,
    addMessage,
    getMessageInfo
}