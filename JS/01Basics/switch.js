var key = "admin";
key = "user";
key = "dk";

switch (key) {
    case "admin":
        console.log("You have full access!");
        break;
    case "subAdmin":
        console.log("You've access to course to delete or add.");
        break;
    case "tester":
        console.log("You've access to test the s/w.");
        break;
    case "user":
        console.log("User have access to use courses.");
        break;
    default:
        console.log("New user");
        break;
}