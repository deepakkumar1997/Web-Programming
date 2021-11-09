const states = ["Bihar", "Delhi", "Arunachal", "Himachal", 1997, "Tamilnadu", "Kerala"];

//states.forEach((e) => (console.log(e)));

states.forEach(e => {
    if(typeof e === "string")
        console.log(e);
});
// break and continue is not going to work in forEach() as it considerd as method not as a loop