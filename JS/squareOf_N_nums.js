
document.write("Let's print square of first N numbers : <br/>");

var n = window.prompt("Enter a value till you want to print ths squares");

// This is for loop in js
for(var i=1; i<=n; ++i)
    document.write(i*i+"  ");

// Here goes while loop of javascript
i = window.prompt("Enter a value");
document.write("<br/>");
while(i>0){
    document.write(i+" ");
    --i;
}

// Here goes first sum first n natural numbers
var j=1;
n = window.prompt("For calculating sum of 1st n natural nums. Please, enter value of n");
var sum = 0;
do {
    sum +=j++;
}while(n>=j);
document.write("<br/>Sum of 1st "+n+" numbers is "+sum);