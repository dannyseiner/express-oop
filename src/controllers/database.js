const mysql = require("mysql")

class DB {
    constructor() {
        this.establishedConnection = null;
        this.resultData = null
        this.connection()
    }

    connection() {
        this.establishedConnection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "test"
        });

        this.establishedConnection.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
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