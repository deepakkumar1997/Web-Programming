// Creating object student and inside it it's propertie and behaviour(functions, methods)
var student = {
    firstName: "Deepak",
    lastName: "Pandey",
    regNo: 2019202009,
    age: 24,
    branch: "MCA",
    semester: 5,
    coursesTaken: [],
    course: function(subject){
        this.coursesTaken.push(subject);
        //this referes to current object that is student in this case so using this we can access
        // elements of student object we can't use student here
    },
    getCourseCount: function(){
        return `${this.firstName} enrolled in ${this.coursesTaken.length} course`;
    },
    getInfo: function(){
        return `
        Name: ${this.firstName} ${this.lastName}
        Registration No: ${this.regNo}
        Age: ${this.age}, Branch ${this.branch}
        Sem: ${this.semester}
        Enrolled Courses: [${this.coursesTaken}]
        `;
    }
};

//sole.table(student);

// console.log(student.getCourseCount());
student.course("Javascript");
student.course("React JS");
student.course("Cpp");
student.course("DSA");
//console.log(student.getCourseCount());  */

/* console.log(student);
console.table(student); */
console.log(student.getInfo());