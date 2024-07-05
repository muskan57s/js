// signletone = made with cconstructor 
//when we use with literals then singletone will not form
// Object.create //creation of object also known as constructor method and singletone is also made thorugh this.


//objects literals
const mySym = Symbol("Key1")

const jsUser ={
    name: "Muskan",
    [mySym]:"musu", //when we have to refer symbol we use sq. brackets in key
    age:18,
    location : "patna",
    email: "muskan@gmail.com",      //keys and value pair keys are bydefault string
    isLoggedIn : false,
    lastLoginDays : ["Monday","Friday"]
}          

//Accessing methods :2 methods
console.log(jsUser.name)
console.log(jsUser["name"])  // square notation method
console.log(jsUser[mySym])

//change of values 
jsUser.email = "muskan2.com"
console.log(jsUser["email"])

//method for permanent change in the values so that no one can change it
// Object.freeze(jsUser) 
// jsUser.email = "musu@.com"        //now it'll not be changed.
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello ");
}

jsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`) 
}
// jsUser.greeting()
console.log(jsUser.greeting())
console.log(jsUser.greeting2())
