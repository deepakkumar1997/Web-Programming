function x(){
    var a = 16;
    function y(){
        console.log(a);
    }
    //y();
    return y; // It wiil return closure if function y() means function y() along with it's 
    // lexical parent memory address from there it will able to access var 'a';
}
var d = x();
console.log(d);
d();// Due to closure it will able to print value in variable a as it has all closures inside it.
/*
Closure: Function along with its lexical environment or scope bundled together forms a closure.

Lexical environment: Local memory space with pointer to it's parent lexical environment;
*/
