const mysql = require("mysql")
require('dotenv').config();

class DB {
    constructor() {
        this.establishedConnection = null;
        this.resultData = null
        this.connection()
        console.log(process.env.DB_HOST)
    }

    connection() {
        const conn = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        }
        if (process.env.DB_USE_SOCKET_PATH === "true") {
            conn.socketPath = "/Applications/MAMP/tmp/mysql/mysql.sock"
        }
        this.establishedConnection = mysql.createConnection(conn);

        this.establishedConnection.connect(function (err) {
            if (err) {
                console.log("DB:", "\x1b[31mFAILED");
                throw err
            };
        });
    }

    query(sql, callback) {
        this.establishedConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            callback(result)
        });
    }
}

const db = new DB()

export default db