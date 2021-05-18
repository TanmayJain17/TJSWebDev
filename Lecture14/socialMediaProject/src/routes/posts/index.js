const route = require('express').Router()
const {createPost,getPost} = require('../../controller/posts')

route.post('/',async (req, res) =>{
    const {id,title,body} = req.body
    if ((!id) || (!title) || (!body)) {
        return res.status(400).send({
            error: 'Need userid, title and body to create post'
        })
    }
    else{
        const feedPost = await createPost(req.body.id, req.body.title, req.body.body)
        res.status(201).send(feedPost)
    }

})

route.get('/', async (req, res) => {
    const posts = await getPost()
    res.status(200).send(posts)
})

module.exports = route