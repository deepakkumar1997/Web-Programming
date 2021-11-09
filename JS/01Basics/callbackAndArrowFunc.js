function isEven(num) {
    /* if (num % 2 === 0)
        return true;
    else return false; */
    return num%2===0;
}

//console.log(isEven(5));

/* var result = [2,4,5,8,10].every(isEven);
console.log(result); */

/* var res2 = [2,4,7,,8,10].every((elm) => {
    return elm%2 === 0;
});
console.log(res2); */

var res3 = [2,4,6,8,10].every((e) => (e%2 === 0));
console.log(res3);