
var a=10;
b();
function b(){
    var a=20;
    console.log(a);
    console.log(this.a);
    console.log(window.a);
}
console.log(window.a);
console.log(a);
console.log(this.a);
console.log(b);