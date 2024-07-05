//signletone:---- 

// const tinderUser = new Object()    //and this is singletone object
const tinderUser = {} // the only diff. is this is non-singletone object

tinderUser.name="Sam"
tinderUser.id="21sa"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regUser = {
    email:"sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Muskan",
            lastname:"singh"
        }
    }
}
console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//1st mehtod for combining the objects
// const obj3 = Object.assign({},obj1,obj2)  //without '{}' all the values will merge in obj1 but when we put'{}' new array will form

//2nd method(spread method)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))      //to check this key or property is present or not.

//Destructuring of objects:-
const course = {
    coursename: "js classes",
    price: "1000",
    courseInstructor:"Hitesh"
}
// console.log(course.courseInstructor)

//To make code more clean:
// const {courseInstructor:instructor} =course  // const {which key to be extarcted:make name sorter} =from where the value to be extracted.
// console.log(courseInstructor);
// console.log(instructor);

//JSON : it is also object without name,here keys and value both are in string format.
// {
//     "name":"Muskan",
//     "coursename": "js classes",
//     "price":"free"
// }

const bioData ={
    name:"Muskan",
    roll:57,
    age:18
};
 const jsonData = JSON.stringify(bioData);  //to convert object into json. 
 console.log(jsonData);
 
 const objData = JSON.parse(jsonData);     //to convert json into object.
 console.log(objData);
