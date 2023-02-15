import { Router } from 'express';
export const Main = function (req, res, routes) {
    let formatedRoutes = ""
    routes.stack.forEach(route => {
        formatedRoutes += `<div>
            <span style='color:red;text-transform: uppercase;font-weight:bold'>${route.route.stack[0].method}</span>
            <span>${route.route.path}</span>
        </div>`
    })
    res.status = 200
    res.send(formatedRoutes)
};

export const PostTest = function (req, res) {
    res.json({
        status: "OK",
        params: req.body
    })
}