const {MongoClient} = require('mongodb');
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

//ASYNC IIFE
async function readTodo(){
    const client =await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos= tododb.collection('todos')
    /*find({}) == findAll in mongodb . this find return a cursor which points to a pirticular thing.
    this is becoz it is not feasable to to get all the data at once as it might be very large.
    hence it returns a cursor or we can say pointer to some data */

    const todoArr = await todos.find({owner:manager}) //toArray //returns array cursor


    todoArr.forEach((todo) =>console.log(JSON.stringify(todo)))
   
    


}

readTodo()