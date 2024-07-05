const score=200

if(score>100){
    const power = "fly"
    console.log(`user power is ${power}`)

}
// console.log(`user power is ${power}`) //the power should not be declared outside the scope but when we write var power="fly" it can also be called outside the scope and print it which is not good 
//var is a Global scope,so we should use let and const.


//IMPLICIT SCOPE (executes in same line)
const balance = 1000
if(balance > 500) console.log("test");

const userLoggedIn =true
const debit=true
const loggedInFromGoogle=true
const loggedInFromEmail = true

if(userLoggedIn && debit){
    console.log("shop now")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}

//SWITCH 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January")
        
        break;
    case 2:
        console.log("february")
        
        break;
    case 3:
        console.log("March")
        
        break;                              //if there will be no break stmt then it will execute all the case except default
    case 4:
        console.log("April")
        
        break;

    default:
        console.log("no match")
        break;
}

//=>Truthy & Falsy value:-

//****Nullish coalescing operator (??): null undefined --> this will return the 1st valuable value and if there will not be any value then only returns null value.

let val1;
// val1= 4 ?? 20
// val1 = null ?? 10
// val1 = 10 ?? 20
// val1 = undefined ?? 40
// val1 = null ?? 10 ?? 200

console.log(val1)
