const {db,Student} = require('./model')

const task = async()=>{
    try{

       await db.sync({alter:true})
       //inserting students
       for(let i=0;i<30;i++){
           await Student.create({
               Name:(['Ajay','Akshay','Akshat','Tarun','Tanmay','Tahir','Vishal','Geetika','Shruti','Aarushi'])[parseInt(Math.random() * 10)], 
               Age:10 + parseInt(Math.random() * 10)
           })
       }
               
           
       
    }
    catch(err){
        console.error(err)
    }
}

task();