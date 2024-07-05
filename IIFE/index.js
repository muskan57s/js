// Immediatly invoked function expression(IIFE)

// function chai(){
//     console.log("Document")
// }
// chai()

//IIFE Method :It is a function which executes immediately.As many time there is a problem due global scope's pollution so IIFE helps in removing the global scope variable's pollution ,IIFE is used
// Syntax :- (Function definition)(Execution call)
(function chai(){       //it is named IIFE as this function has name(chai)
    console.log("Document")
})();       //here semicolon is required beco there is second code (the another IIFE) runnung next to it.
                    //We write two IIFE in dame code by using semicolon(;).
//IIFE by arrow function OR Simple IIFE
( (name)=>{
    console.log(`Databse connected to ${name}`);
})("Muskan")