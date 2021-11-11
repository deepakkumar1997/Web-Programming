var timer = 0;
var i=0,j=0;
function x(){
    function y(){
        setTimeout(function (){
            console.log(j++);
        }, timer);
    }
    while(i++<6){
        timer=timer+1000;
        y();
    }
}
x();