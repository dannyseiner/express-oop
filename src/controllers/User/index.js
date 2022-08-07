import db from "../database"

export const getUser = (req, res) => {
    db.query("SELECT * FROM users", (response) => {
        res.type('text');
        res.status(200);
        res.json({
            _id: '{{objectId()}}',
            index: '{{index()}}',
            guid: '{{guid()}}',
            isActive: '{{bool()}}',
            data: response
        });
    })
};


export const getUserName = (req, res) => {
    db.query(`SELECT * FROM users WHERE user_name = '${req.params.username}'`, (response) => {
        if (response.length === 0) {
            res.type('json');
            res.status(404);
            res.send({
                error: 404,
                message: "no users found"
            });
            return
        }
        res.type('json');
        res.status(200);
        res.send(response);
    })

}
export const getAllUsers = (req, res) => {
    db.query(`SELECT * FROM users`, (response) => {
        res.type('json');
        res.status(200);
        res.send(response);
    })
}