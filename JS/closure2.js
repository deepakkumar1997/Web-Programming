function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var closure = x();
console.log(closure);
closure();

function a(){
    var a = 7;
    return function b(){
        console.log(a);
    }
    a = 100;
}
var closure2 = a();
console.log(closure2);
closure2();