const myArr = [0,1,2,3,4,5]
// console.log(myArr[0])

const myArr2 = new Array(1,2,3,4)    //declaration of array

// myArr.unshift(40)
// myArr.shift()               //no parameter and removes 1st elemnt

// console.log(myArr.includes(5));   //return true or false either the element is present or not in the array 

// const newArr = myArr.join()   //join will make the array string

// console.log(newArr)
// console.log(typeof newArr)

// console.log("A",myArr)
// const myn1 = myArr.slice(1,3)  //donot take the last index

// console.log(myn1);
// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);         // splice will give from 1th index to 3rd and (change in original array)
// console.log("c ",myArr)    // the origianl array will contain the remaining value except the splice value    
   

// ------------Next Day ------------
// const f1 = ["Apple", "Mango" , "Grapes"]
// const f2 = ["Guava","Blackberry","Pineapple"]
// f1.push(f2)         //perform on existing array
// console.log(f1);
// console.log(f1[3][1]);   //access the element of nested array

// const allfruit = f1.concat(f2) //concat will retrn new array combine f1&f2 in single array
// console.log(allfruit);
  //  OR
// => Spread operator (...arr1,...arr2) it will spread all element separtely in same inside ("")quotes separately
// const all_fruits = [...f1,...f2]
// console.log(all_fruits);

// const nxtArr = [1,2,3,[4,5,6],7,[6,7,[3,4]]]
//  flat() will make this complicated array in single array
// const real_next = nxtArr.flat(Infinity) //or we can write flat(the no. of arrays)
// console.log(real_next );

// console.log(Array.from("Muskan")) //Array.from will make it in array form.
//  let score1 =  100
//  let score2 = 200
//  let score3 = 300
//  console.log(Array.of(score1,score2,score3));  //Array.of will make all the objects in string from 