/* var countries = ["India", "Pakistan", "Japan", "USA", "UK", "Russia", "Greece", "Egypt"];
var states = ["Bihar", "Jharkhand", "Bengal", "UP", "Madhya Pradesh"];

console.log(countries);
console.log(states);

console.log(countries.length, states.length);

var dostLog = new Array("Shabbir", "Ghanti", "Rishav", "Sam", "Muki", "Anjan", "Agru", "Maurya", "JP");

console.log(dostLog.length);
console.log(dostLog.indexOf("Shabbir"));
dostLog[dostLog.indexOf("Shabbir")] = "Md. Shabbir Alam";
console.log(dostLog);

console.log(dostLog.shift());
console.log(dostLog);

console.log(dostLog.unshift("Md. Shabbir Alam"));
console.log(dostLog);

dostLog.pop();
dostLog.pop();
console.log(dostLog);

dostLog.push("Maurya", "JP");
dostLog.push("Deepak");
dostLog.reverse();
console.log(dostLog);

console.log(Array.from("Deepak Pandey"));
 */
var arr = [] ;
for(var i=0; i<6; ++i){
    arr[i] = i;
}
console.log(arr);

var student = ["Deepak", 8935885567, 2019202009, 24, "Dk@yahoo.com"];
// Not a best way to include different categories of value in an array.
console.log(student);