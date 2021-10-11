// In this program I'm going take one number as a user input and going to print all its factor.

var n = parseInt(prompt("Enter a number to find its factors : "));
document.write("Factors of "+n+" is ");
for(var i=1; i<=n; ++i){
    if(n%i==0)
        document.write(i+", ");
}
document.write("\b \b");