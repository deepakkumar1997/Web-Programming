var year = window.prompt("Enter year value to find it is leap or not ");
if(year%100==0&&year%400==0)
    alert(year+" is a leap year");
else if(year%100!=0&&year%4==0)
    alert(year+" is a leap year");
else alert(year+" is not a leap year");