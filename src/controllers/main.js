export const Main = function (req, res) {
    res.json({
        status: "OK",
        routes: [
            { path: "/", params: ["?:username"], result: "json" },
            { path: "/users", params: [], result: "json/users" },
        ]
    })
};

export const PostTest = function (req, res) {
    res.json({
        status: "OK",
        params: req.body
    })
}


