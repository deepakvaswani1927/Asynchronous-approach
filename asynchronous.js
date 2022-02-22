const firstName = "Deepak";
const lastName = "Vaswani";

function myName(){
    setTimeout(function first() {
        console.log(firstName);
}, 5000);

    setTimeout(function second() {
        console.log(lastName);
}, 2000);
}
myName();





