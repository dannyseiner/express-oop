import db from "./database"

export const getPosts = (req, res) => {
    db.query(`SELECT * FROM posts`, (response) => {
        res.type('json');
        res.send(response);
    })

}
