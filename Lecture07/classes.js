class Person{
    constructor(name,age){
        this.name=name
        this.age=age
        
        
    }
    isAdult(){
        return this.age >=18
         
    }
}

let p1=new Person('John Doe',25)
let p2=new Person('Jahn Doe',12)

class Student extends Person{
    constructor(name,age,grade){
    super(name,age)
    this.grade=grade
    }
}


console.log(typeof p)