let score = "33abc"; //print number as datatype
let score1 = null; //print 0 on datatype check

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number return karega
// console.log(valueInNumber); //NaN return karega


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1; // iska output true dega

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true dega // 0=> false dega
// "" => false
// "hitesh" => true


let someNumber = 33;

let stringNumber =  String(someNumber);

//console.log(stringNumber); //this will return number 33


//console.log(typeof someNumber); //this will print number as number



//***********************   Operations   ***************************//

let value = 3
let negValue = -value;
//console.log(negValue); // output will be -3;

//console.log(2+2); //addition operation
//console.log(2-2); // subtraction operation
//console.log(2*2); // multiplication operation
//console.log(2**3); // 2 to the power 3 hai ye
//console.log(2/3); // division operation
//console.log(2%3); // modulous or reminder operation

let str1 = "hello";
let str2 = " Roshan";

let str3 = str1+str2;
console.log(str3); // hello Roshan output aayega


// console.log("1" + 2);  //12 output aayega
// console.log(1 +"2"); // 12 output aayega // pahla data jo rahega usko 
// //wo total usi tarah treat karega
// console.log("1" + 2 + 2);  // 122 output aayega
// console.log(1+ 2+ "2"); //iska output 32 aayega

// //the given codes given above are not acceptable in the 
// //big companies and also not a good practice of writing

// console.log((3+4) * 5%3); // avoid such type of practice or provide specific parenthesis
// in such type of coding


console.log(+true); // 1 output aayega
console.log(+""); // 0 output aayega kyoki "" null ki tarah treat kia jata hai

let num1, num2 , num3;

num1 = num2 = num3 = 2 + 2; // is tarah ki harkate manjur nhi hai

let gameCounter = 100;
gameCounter++; // postfix Presedence operator
++gameCounter; //prefix presedence operator
console.log(gameCounter);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// preffix and postfix study link