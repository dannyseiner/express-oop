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
        this.establishedConnection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_DATABASE,
            socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //optional for macos
        });

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