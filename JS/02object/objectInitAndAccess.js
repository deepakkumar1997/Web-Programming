// creating object
var user = {
    firstName: "Deepak",
    lastName: "Pandey",
    age: 24,
    DOB: "12-04-1997",
    role: "Team lead",
    email: "dkpandey@gmail.com",
    isSignedInFromGoogle: false
};

// Accessing user object and its elements or properties 
//console.log(user);
//console.table(user);
//console.log(user.email);
//console.log(user["firstName"]);

// updating value of an element
console.table(user.role);
user.role = "Project Manager";
console.table(user.role);

// Creating one more object iPhone
var iPhone = {
    model: "iPhone 13 Max",
    size: 6,// 6 inch
    rolloutDate : "10-10-2021",
    iosVersion: "latest version",
    isEarPhoneProvided: false,
    isChargerProvided: false,
    storage: "128gb"
};

console.table(iPhone);
console.table(iPhone.model);
console.log(iPhone["isChargerProvided"]);