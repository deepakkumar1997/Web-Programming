const states = ["Bihar", "Delhi", "Arunachal", "Himachal", 1997, "Tamilnadu", "Kerala"];

for(let i=0; i<states.length; ++i){
    if(typeof states[i] != "string") continue;
        console.table(states[i]);
}