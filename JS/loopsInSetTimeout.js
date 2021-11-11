/* var i = 0;
for(i; i<6; ++i){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
//console.log("Hello! Deepak!");
} */
// It will print 6 six times to the console because due to setTimeout() goes in timeout state at that
// time the for loop will already exexuted and now value of i is 6 so after 1 second it will start
// printing i then it will look for reference of i and it will find value 6
// how we can overcome this: so simply we can declare variable with let keyword because evertime loop
// runs with let variable it creates a new copy of let variable and it binds with setTimeout() func
// but in case of var keyword i refers to same memory location that's why it prints 6 everytime.
/* for(let i = 0; i<6; ++i){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
} */

/* so now how we can solve this with var keyword what we have to do is that we can create one more closure
and can we can call that function with every time a new value of i like: */

for(var i=0; i<6; ++i){
    function close(d){
        setTimeout(function(){
            console.log(d);
        }, d*1000);
    }
    close(i);
}