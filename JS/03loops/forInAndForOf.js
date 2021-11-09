// Typically for in is used in abjects and for of used with arrays

const states = ["Bihar", "Delhi", "Arunachal", "Himachal", 1997, "Tamilnadu", "Kerala"];

/* for(const n of states){
    console.log(n);// states element is stored in n and getting printed
} */

const shortNames = {
    fb: "Facebook",
    ig: "Instagram",
    idk: "I don't know",
    dk: "Don't know",
    dk: "Deepak Kumar",// so here is more than one key with same name so it is going to replace prev value
    typo: "Typing mistake"
};

for(const n in shortNames){
    //console.log(n);// It will print key of object shortNames
    console.log(`Key is: ${n} and key value is: ${shortNames[n]}`);
}