let myDate= new Date()
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let mycreateDate = new Date(2024, 0, 7)  //In js months starts from 0 by deafult
// console.log(mycreateDate.toDateString());

let mybddyDate = new Date(2004, 3 , 21)
console.log(mybddyDate.toDateString());

let mycreateDate = new Date("2024-01-21")  //yy-mm-dd
// console.log(mycreateDate.toLocaleString());

let myTimeStamp = Date.now()    //used in quizes/polls etc
console.log(myTimeStamp);
console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now()/1000));
