import db from "./database"

const posts = [
    { uuid: 1, title: "Post 1", content: "This is the first post" },
    { uuid: 2, title: "Post 2", content: "This is the second post" },
]

export const getPosts = (req, res) => {
    res.status(200)
    res.json(posts)
}

export const getPostsByUUID = (req, res) => {
    const uuid = req.params.uuid
    const post = posts.find(post => post.uuid.toString() === uuid)
    if (post) {
        res.status = 200
        res.json(post)
    } else {
        res.status = 404
        res.json({ error: 404, message: "Post not found" })
    }
}
