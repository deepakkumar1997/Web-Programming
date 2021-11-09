const states = ["Bihar", "Delhi", "Arunachal", "Himachal", 1997, "Tamilnadu", "Kerala"];

let i = -1;

while(states.length>++i){
    if(typeof states[i] !== "number")
        console.log(states[i])
}
console.table("\n*****************************************\n")
i =0;
do{
    if(typeof states[i] !== "string") continue;
        console.log(states[i]);
}while(++i<states.length);