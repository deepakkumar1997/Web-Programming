// Typically for in is used in abjects and for of used with arrays
// for of is used in iterable things like array 
// for in is used to find keys in object and index in array and so on


const states = ["Bihar", "Delhi", "Arunachal", "Himachal", 1997, "Tamilnadu", "Kerala"];

for(const n in states){
    console.log("Index-"+n+":"+states[n]);// here n is accessing the index of element and then printing
}

const shortNames = {
    fb: "Facebook",
    ig: "Instagram",
    idk: "I don't know",
    dk: "Don't know",
    dk: "Deepak Kumar",// so here is more than one key with same name so it is going to replace prev value
    typo: "Typing mistake"
};

/* for(const n in shortNames){
    //console.log(n);// It will print key of object shortNames
    console.log(`Key is: ${n} and key value is: ${shortNames[n]}`);
} */