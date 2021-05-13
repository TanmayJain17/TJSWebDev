const {MongoClient} = require('mongodb');
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

//ASYNC IIFE
async function writeTodo(){
    const client =await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)
    const todos = tododb.collection('todos')

    const todo = {
        task:'an important task',
        priority:2, 
        owner:'manager'
    }

    const result = await todos.insertOne(todo)
    console.log(result)

}
async function writeTodos(){
    const client =await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)
    const todos = tododb.collection('todos')

    /*const todo = {
        task:'an important task',
        priority:2, 
        owner:'manager'
    }*/
   //it is not important that every object will have same no. of attributes like in another function we can ommit priority
    const result = await todos.insertMany([
        {task:'regular task', priority:4,owner:'sequrity'},
        {task:'very imp task', priority:1,owner:'CEO'},
        {task:'admin task', priority:2,owner:'manager'},
        {task:'project task', priority:3,owner:'executive'}
    ])
    console.log(result)

}
writeTodos()