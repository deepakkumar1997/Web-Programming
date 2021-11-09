// For all regular function calls, this keyword points to window object that is global object

const friend = {
    Name: "Anjan",
    category: "PG: MCA",
    Occupation: "Dev at TCS, Skecher",
    sports: "Not so interested",
    mode: "Disturbed",
    database: "Filled with heartbreaks and computer science",
    setMode: function(mode){
        this.mode = mode;
        console.log(this);
        function zone(){
            console.log("Skeching");
        }
        zone();
    }
}
console.log(friend.mode);
// this is not regular function call this function is going to called from friend object
friend.setMode("Stable");// But inside setMode() there is regular function call that is zone() so it
// will be a function of global object window just like given below
console.log(friend.mode);
console.log(this);
function sayFriendName(name){
    console.log(this,name);
}
sayFriendName("Rishav");// regular function call and it is a method of window object

/* for(const n in friend){
    console.log(`Key: ${n} and value ${friend[n]}`);
} */