const promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("promise created")
        resolve()
    },1000)
})
promise.then(function(){
    console.log("for execution of .then() we have to call resolve in the new promise");
});

//2nd method :directly creating promise (object) without putting it in any variable
new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("without variable")
        resolve()
    },2000)
}).then(function(){
    console.log("then executed")
})

//3rd method: passing parameter to the resolve and it will pass in .then() by an obj. 
const promiseTwo =new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("second promise")
        resolve({username:"Muskan" , id:"23212"})           //here in resolve() we can pass any array/obj/functions etc..
    },3000)
})
promiseTwo.then(function(detail){        //in "detail" the resolve's() parameter will pass in .then(e)  in the form of obj. 
    console.log(detail)
})

//4th method: 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false                             //if there may be error happens due to some reason.
        if(!error){
            resolve({username:"Juhi",password:"1231"})
        }
        else{
            reject('Error : something went wrong')
        }
    },5000)
})

promiseThree.then((user)=>{
    console.log(user);
    return user.username
}).then((myuser)=>{
    console.log(myuser);
}).catch(function(error) {
    console.log(error);
}).finally(()=> console.log("promise is either resolve or reject"));

//5th Method (same as 4th): promise handle by async-await  (it is used in place of .then()) also used at the time of database connectivity.
const promiseFour =new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Juhi",password:"1231"})
        }
        else{
            reject('Error : something went wrong')
        }
    },6000)
});

async function consumePromiseFour(){
   try{
     const response = await promiseFour        //promise is an object so we cannot access it like promiseFive()this.
    console.log(response)   
   }         
   catch(error) {
    console.log(error);

   }
}
consumePromiseFour()

//fetch method :
// async function getAllUsers(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
//    }
//    catch (error){
//     console.log("E:",error)
//    }
// }

// getAllUsers()


//fetch Method :
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{                  //in second .then(data) the result rom 1sr .then() will come in 2nd data. 
    console.log(data)
}).catch((error)=> console.log(error))