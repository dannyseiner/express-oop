import db from "./database"

export const getUserName = (req, res) => {
    db.query(`SELECT * FROM users WHERE user_name like '%${req.params.username}%'`, (response) => {
        res.type('json');
        res.send(response);
    })

}
export const getAllUsers = (req, res) => {
    db.query(`SELECT * FROM users`, (response) => {
        res.send(response);
    })
}