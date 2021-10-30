function fibonacci(num){
    if(num<2)
        return num;
    else
        return fibonacci(num-1) + fibonacci(num-2);
}

//var fib = fibonacci(n = prompt("Enter a postion to find fibonacci number:"));
//document.write(n+"th Fibonacci number is "+fib);