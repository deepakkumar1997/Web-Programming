var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if(count<1153){
        ++count;
        counter.innerText = count;
    }
}, 1);

setInterval(() => {
    followers.innerText = "Followers on Sololearn!";
}, 4900);