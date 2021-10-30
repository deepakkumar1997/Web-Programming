var x=confirm("Do you wanna proceed?");
var y;
document.write(x);
if(x){
    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    y = window.confirm("Oh, you really want to proceed");
    document.write(y);
    if(y) document.getElementsByTagName("h1")[0].style.fontSize = "60px";
    else document.getElementsByTagName("h1")[0].style.backgroundColor = "white";
}
else{
    document.getElementsByTagName("body")[0].style.backgroundColor = "grey";
    document.getElementsByTagName("h1")[0].style.value.color = "white";
}