const {db,Student} = require('./model')

const task = async()=>{
    try{

       await db.sync({alter:true})
       //inserting students

       const students = await Student.findAll({
        
        where: {
            Age: {
              [Op.or]: {
                [Op.lt]: 18,
                [Op.gt]: 12
              }
            }
        },
            
          
           
           /*order: [
               ['Age','ASC'],
               ['Name','DESC']
           ]*/
           
       })
       students.forEach(s => console.log(`Name:${s.dataValues.Name}\t\tAge:${s.dataValues.Age}\n`))

               
           
       
    }
    catch(e){
        console.error(e)
    }
}

task();