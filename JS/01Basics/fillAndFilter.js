var number = [1,2,3,4,5,6,7,8,9,0,45,34,67];

//console.log(number.length);
//console.log(number.fill("DK"));// It wiil fill "DK" in every index of number array replacing numbers
//console.log(number.fill("Dk", 2));// It will "DK" to index starting from 2
//console.log(number.fill("DK", 2, 6)); // It will fill DK to index starting from 2 till index 6-1 = 5;
// here index 2 wiil be inclusive and index 6 will be exclusive means index will be left
var myNum = [2,4,6,7,8,11,45,100,1100];

var result = myNum.filter((num) => (num >=8));
console.log(result);