// primitive  datatypes

// String, Number, Boolean, null, undefined, Symbol

const score = 100 //String
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //Null
let userEmail;  //undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//bigInt
const bigNumber = 123123n 

//Non-primitive datatypes or Reference datatypes

// Array, Objects, Functions

const movies = ["Don no.1", "Rumal", "Kushu mero rumal"] // array


//objects write inside the curly braces
let myDetails = {
    name: "Roshit",
    age: 16
}

//functions

const myFuction = function(){
    console.log("hello, Namaste");
}


console.log(typeof anotherId);