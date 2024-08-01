const score =500          //score is bydfault number type
console.log(score);

const balance = new Number(200)      //we are defining here num type by defining it in a new object that is of Number type
console.log(balance);

console.log(typeof(balance.toString()));

console.log(balance.toString().length);

const point = new Number(600)
console.log(point.toFixed(2))    //this method will add zero by putting decimal a/c the parameter provided to toFixed(2,3,4...)

const otherNumber = 123.8654
console.log(otherNumber.toPrecision(3))   //it will increase the last digt value by +1 either its after or before decimal(a/c to nearest 10 0r 10)

const myNumber = 1238
console.log(otherNumber.toPrecision(4))

//*********** */ Maths library is default in js************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(-99));

console.log(Math.round(75.4));
console.log(Math.round(75.9));

console.log(Math.ceil(4.2));  //ceil  will conver a number into top value here:(5)
console.log(Math.floor(4.8));  //opp.  to ceil 

console.log(Math.min(2,88,93,5));
console.log(Math.max(2,88,93,5));

console.log(Math.random());       // Math.random()=>values will be btwn 0 to 10
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);       //Math.floor: generally,rounds down a number to it's nearest integer.


const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)) +min)
