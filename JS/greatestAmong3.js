var x,y,z;
x = window.prompt("Enter first number : ");
y = window.prompt("Enter second number : ");
z = window.prompt("Enter third number : ");

alert("Greatest among "+x+" "+y+" "+z+" is "+(x>=y?(x>=z?x:z):(y>=z?y:z)));