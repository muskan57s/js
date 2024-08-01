//to add items in cart
//method-1
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2000,4000,5000)) 

//Rest and spread operator(...n1,)----(method-2)
function calculateCartPrice(val1,val2,...num1){    
    return num1
}
// console.log(calculateCartPrice(2000,4000,5000,6000))   //it'll only print 5000 & 6000 bcoz 1st two value will be in val 1&2
                                                          // and here we only returned num1 so, rest value will be printed.
//passing object in a function
const user={
    name:"Muskan",
    roll:57
}
function handleObject(anyobject){         //(user/anyobject)-anything we can write
    console.log(`usename is ${anyobject.name} and roll is ${anyobject.roll}`);
}
handleObject(user)          //passing object (function call):(user) is compulsory
    //OR
// handleObject({
//     name:"Muskan",
//     roll:57
// })

    //passing arrays in function
const myArr = [200,300,400,500]
function returnValue(getArray){
    return getArray[2]
}
console.log(returnValue(myArr));
// console.log(returnValue([200,300,400,500]));


//this function:-
const user1 ={
    username:"HP",
    price:9990,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}

// user1.welcomeMessage()
user1.username="sam"
user1.welcomeMessage()

// console.log(this);

//                 --------------next----------------------

// function chai(){
//     let username="Marie"
//     console.log(this.username);
// }
// chai()

// const myfun =function () {
//     let username="Marie"
//     console.log(this.username);
// }
// myfun() 

//-------------> ARROW FUNCTION:-
const myfun = ()=>{
    let username="Marie"
    console.log(this.username);
}
myfun() 

//explicit return (when we use return keyword)-:
const add=(n1,n2)=>{
    return n1+n2
}
console.log(add(3,6))

//Implicit return(remove culry barces ->return wla line ko same  in 1st line->then remove return keyword)
// const addTwo=(n1,n2)=>  n1+n2
           //OR
const addTwo = (n1,n2) =>  (n1+n2)   //IMPORTANT:(if return in curly braces then use return keyword and if not then in parenthesis without return keyword)  

console.log(addTwo(2,5))
 //To reurn object
const add2 = ()=> ({username:"Malti"})   //{}is for object and we have to wrap the object in parenthesis to get the object.
console.log(add2())