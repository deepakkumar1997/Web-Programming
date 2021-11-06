// let and const are keyword to declare a variable
// Variable declared with const should be declared and initialized together.
// let variable can't be used before initialization unlike var
// let and const variables are hoisted but not in global space it is another(script) memory space
// we can't declare a let variable twice in same scope.

//console.log(a);// this 'a' variable in temporal dead zone can't be accessed
console.log(b);// It will be printed because it is in global memory space
let a = 10; // Above this line all are temporal dead zone for this variabke a;
var b = 20;
console.log(a,b); // now variable is accessed means after initialization.
//const c;// You must initialize a const var at time of declaration.
/*const c;
c = 100; A const variable can't be initialized after declration*/
const c = 100;
console.log(c);
//console.log(c++);// It can't be incremented or decremented as it is constant.
console.log(c*5);// It is valid because we are tempring with var c