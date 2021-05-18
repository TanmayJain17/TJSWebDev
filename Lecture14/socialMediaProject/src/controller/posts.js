const {Posts,Users} = require('../db/model')

async function createPost(idEntered,titleEntered,bodyEntered){
    const postBody = await Posts.create({
        userId:idEntered,
        title:titleEntered,
        body:bodyEntered
    }) 
    return postBody
}
async function getPost(query){
    const getPost = await Posts.findAll({
        include: [ Users ]
    })
    return getPost
    
}

module.exports = {
    createPost,
    getPost
}