// jis basis pr data ko memory me store kiya jata hai us basis pr data k 2 types hai
// primitive and  non-primitive


// Primitive

// 7 types k hote hai : String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//const bigNumber = 4579895661484995451n  // jaise hi aap iske aage n lga dete hai ye bigInt bn jata hai



//Reference type or (non- primitive)

//Array, Objects, functions


const heros = ["shaktiman","naagraj","doga"]  //ye array type hai
let myObj = {
    name: "Roshan",
    age: 22,        //curly braces k ander jo kuchh bhi hai wo object hota hai
}


const myFunction = function(){
    console.log("Hello roshan");
}


//kisi bhi value ka datatype pta kaise kre

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction); // function actually me function hi return karta hai but isko bola jata hai object function
console.log(typeof heros); // returns array object
console.log(typeof anotherId); //return symbol

//






