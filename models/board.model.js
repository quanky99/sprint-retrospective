const db = require("../utils/db");

module.exports = {
    loadAllByUser: (userId) => db.load(`SELECT ID, name FROM BOARD WHERE owner = ?`, userId),
    addByUser: (userId, name) => db.insert("BOARD", {name, owner: userId})
}