// Safe way of injecting properties and methods to an object

var Student = function(name, roll, age){
    this.name = name;
    this.roll = roll;
    this.age = age;
    this.getName = function(){
        console.log("Your name is ",this.name);
    }
}

// injecting getRollNumber method to object student
Student.prototype.getRollNumber = function(){
    console.log("Your roll number is ",this.roll);
}

// creating object
var dk = new Student("Deepak", 2019202009, 24);

// now we have one instance of object student that is dk
dk.getRollNumber();// this is not a safe way of calling function as if roll is not found in Student
// object then it will print undefined that is very bad to solve
// so safe way of calling this or any kind of method related to this object
if(dk.hasOwnProperty("roll")){
    dk.getRollNumber();
}