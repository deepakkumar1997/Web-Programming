const uid = "dk_1998";

var firstName = "Deepak";
var lastName = "Pandey";
var email = "dk.pandey@sololearn.com";
var password = "password";
var confirmPassword = "password";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// Different printing style in JS

console.log("User id : ",uid);
console.log("Your first Name is "+firstName+" and last name is "+lastName);
console.log("Email : "+email);

// Printing with backtics and ${}

console.log(`
    With unique ID : ${uid}
    User is : ${firstName} ${lastName}
    and his email is: ${email}
    and uses the password: ${password}
`);
// Above displaying style is also known as interpolation.