//for


for (let index = 0; index <=10; index++) {
    const element = index;
    if (element == 5){
        // console.log("5 is the best number")
    }
    // console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    // console.log(`outer loop value ${i}`)
    for (let j = 0; j<=10; j++) {
        // console.log(`Inner loop value ${i} and ${j}`)
        
        
    }
    
}

//break and continue
 for (let i = 0; i < 10; i++) {
    if (i ==5 ){
        // console.log("Detected 5")
        break                            //through break the loop while not continue further and breaks at 5.
    }
    // console.log(`value of i is ${i}`)
 }

 for (let i = 0; i < 10; i++) {
    if (i ==5 ){
        // console.log("Detected 5")
        continue                            //through continue the loop while  continue further by giving the console message and will not print 5.
    }
    // console.log(`value of i is ${i}`)
 }

 //Higher Order List

 const arr =[1,2,3,4,5]

 for (const num of arr) {           // for-of loop
    // console.log(num)
 }

 const greetings= "Hello World!"
 for (const greet of greetings){
    // console.log(`Each chat is ${greet}`)
 } 

 //Map:- is an ordered key-value pair collection and doesnot take duplicate value or key

 const map = new Map()
 map.set("In","India")
 map.set("USA","United States")
 map.set("FR","France")
 map.set("USA","United States")

//  console.log(map);

 for (const [key , value] of map){           //****--:square bracket is used to destructing the array and then the key and value will seperately be accessed.
    // console.log(key,'-:',value)
 }

 //We can't use for-of loop with object so we have another loop that is for-in and it is also be used at many places

 const myObject = {
    js :'javascript',
    cpp :'c++',
    rb:'rubby',
    swift :'swift by apple'
 }

 for (const key in myObject) {                      //for-in LOOP
    // console.log(myObject[key]);
    console.log(`${key} is shortcut for ${myObject[key]}`);
 }
