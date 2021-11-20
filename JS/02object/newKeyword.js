// Create a functional object
var User = function (firstName, courseCount) {
    // Functional approach of defining an object here this.firstname is an object
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log("Course count is ", this.courseCount);
    }
}
//var deepak = User("Deepak", 2);//This will give result undefined as for creating an object you should
// use new keyword to create an object  
// new key is responsible for invoking constructor and and creating a new instance of it
// without new, if we call User() then it will find all data into global object but it will not find
// and new will also take care of this keyword and through it we can print all value inside User();

// Through prototype we can inject properties and methods to an object
User.prototype.getFirstName = function(){
    console.log(`Your first name is ${this.firstName}`);
}// new keyword also find these prototypes and injects to the original object
// Through proto you can inject any method and properties and can also override properties and 
// methods as well


// Let's create an object with the help of new keyword

var deepak = new User("Deepak", 3);
//console.log(deepak);
deepak.getFirstName();

var ghanti = new User("Ghanshyam", 1);
//console.log(ghanti);
ghanti.getFirstName();