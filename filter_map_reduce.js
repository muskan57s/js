//For checking each value in array conditionally or only return in JS (for-each) donot work we use =>FILTER 

//FILTER( (callback)):---- is a callback function. Only returns the value that is present in the array and do not perform any changes . 

// const myNums=[2,3,4,55,63,6,7,12,14]

// const newNums =myNums.filter( (num) =>num < 9) 
// console.log(newNums)

// console.log(myNums)

//2nd method when we use scope{} here in the arrow function we have to use (return) keyword
const myNums=[2,3,4,55,63,6,7,12,14]

const newNums =myNums.filter( (num) =>{
    return num >20
}) 
// console.log(newNums)

const books = [
    {title:'book1',genre:'science',publish:1979},
    {title:'book2',genre:'science',publish:1999},
    {title:'book3',genre:'fiction',publish:2004},
    {title:'book4',genre:'non-fiction',publish:2005},
    {title:'book5',genre:'history',publish:2007},
    {title:'book6',genre:'science',publish:2009}

]
const newbook= books.filter( (bk)=> bk.genre === 'science')
// console.log(newbook)

// MAP( () => condition ):- is also a callback function ,In map we can make changes here and it iterates

const num=[1,2,3,4,5,6,7]
const newNum = num.map( (n)=>{
    return n + 2
})
// console.log(newNum);

   //-->Chaining Method in MAP :We can use multiple-method (map or filter) methods togther
const arr_1 =[2,4,6,8,10,12,3,5]
const newArr = arr_1
            .map( (num)=> num*4)
            .map( (num)=> num +2)         //the num parameter that has been passed here in the 2nd map function will receive the value of  1st map() condition and give the value of last map () return value
            .filter( (num) => num>22)
// console.log(newArr);

// =>REDUCE() :--  .reduce(accumulator , currentValue),initialValue  => here in reduce() accumulator donot know where to start so it takes 
//initial value as a start value and starts operation 
//and accumulator = initial value => operation => accumulator will get the opearated value as initial value and continue until the array length or condition.
//we'll get initial value i.e (0) in acc. at first & then acc. will take the operated value one-by-one in it from initial (1) to last (4)
const myNum =[1,2,3,4]

const myTotal = myNum.reduce( function (acc , currVal) {
    // console.log(`acc:${acc} and currVal:${currVal}`)
    return acc + currVal  // 1st: (0+1) => 2nd: (1+2)...
}, 0)
console.log(myTotal);

// :=Reduce() by using array function:
// const total = myNum.reduce( (acc , currVal) => acc+currVal,0)
// console.log(total)

const Myarr =[
    {
        itemName:"js",
        price:2990
    },
    {
        itemName:"py",
        price:2392
    },
    {
        itemName:"c",
        price:1994
    },
    {
        itemName:"mobile app",
        price:1299
    }
]
 const totalPrice = Myarr.reduce( (acc , item) =>acc + item.price ,0)
 console.log(totalPrice);
