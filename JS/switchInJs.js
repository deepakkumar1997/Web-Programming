var ch = window.prompt("Enter your choice : \n1 : Check palindrome\n2 : Find factorial\n3 : Find Prime number\nEnter your choice : ");
/* document.write("");
document.write("");
document.write("");
 *///document.write("Enter your choice : ");
//var ch = window.prompt("");

switch(Number(ch)){
    case 1:
        // Take a user input and check for palindrome
        var n = window.prompt("Enter a number to check palindrome");
        var copyofN = n, rem=0, new1=0;
        while(n>0){
            rem = n%10;
            new1 = new1*10+rem;
            n = parseInt(n/10);
        }
        if(new1==copyofN)
            document.write(new1+" is a palindromic number");
        else document.write(new1+" is not = "+copyofN+" so it is not a palindrome");
        break;
    case 2:
        var facto = 1, n = window.prompt("Enter a num to find its factorial : ");
        if(n<0)
            document.write("Factorial can't be calculated");
        else if(n==1 || n==0)
            document.write("Factorial of "+n+" is 1");
        else{
        for(var i=2; i<=n; ++i)
            facto*=i;
        document.write("Factorial of "+n+" is "+facto);
        }
        break;
    case 3:
        var n = window.prompt("Enter a num to find it is prime or not");
        var count=0;
        if(n<2)
            document.write("Not a prime number");
        else{
            for(var i=2; i<=Math.sqrt(n); ++i){
                if(n%i==0)
                    ++count;
            }
            if(count==0)
                document.write("It is a prime number");
            else document.write("Not a prime number");
        }
        break;
    default:
        document.write("Wrong choice! Please try again!");
}