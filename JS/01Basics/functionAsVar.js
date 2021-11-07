// admin : access to all resources
// subAdmin : access to delete/add courses
// testprep : can create test and can delete
// user : user wiil consume contents

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return console.log(`${name} have all access means admin.`);
        case "subAdmin":
            return console.log(`${name} can crete/delete courses.`);
        case "testprep":
            return console.log(`${name} can create/drop a test.`);
        case "user":
            return console.log(`${name} can use contents.`);
        default:
            return console.log("No valid user found!");
    }
}

getUserRole("Deepak","admin");

var dk = getUserRole("Rishav","subAdmin");

console.log(dk);