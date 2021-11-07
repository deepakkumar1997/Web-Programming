function sayHello(name){
    console.log(`Hello ${name}, How are you?`);
}

sayHello("DK");
console.log(sayHello);

var bye = function (name){ // Saying that var bye is a function
    return `Bye ${name}, We'll meet soon`;
}

console.log(bye("Deepak"));
var message = bye("Rishav");
console.log(message);
console.log(bye);