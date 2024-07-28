// primitive  datatypes

// String, Number, Boolean, null, undefined, Symbol

const score = 100 //String
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //Null
let userEmail;  //undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

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


// console.log(typeof anotherId);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap(Non- primitive) Memory

// example of stack -copy milx

let myYoutubeName = "Hello@gmail.com"

let anotherName = myYoutubeName
anotherName = "roshit@gmail.com"

console.log(myYoutubeName);
console.log(anotherName);

// Heap --kunai value rakhin reference milx (Reference means actually j ...
// pani change and update garinx orginal value vitrai garin)

let userOne = {
    email: "user@gmail.com",
    upi: "user@npl"
}

let userTwo = userOne

userTwo.email = "roshit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);