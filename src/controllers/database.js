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
            database: process.env.DB_DATABASE
        });

        this.establishedConnection.connect(function (err) {
            if (err) {
                console.log("DATABASE STATUS:", "\x1b[31mFAILED");
                throw err
            };
            console.log("DATABASE STATUS:", '\x1b[36mACTIVE\x1b[0m');
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