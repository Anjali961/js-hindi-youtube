const accountId = 144553   //ab isko change nhi kiya ja sakta // ye constant declare karne ka tarika hai
let accountEmail = "roshan@google.com"  
var accountPassword = "12345"
accountCity = "Ghazipur"  // aisa bhi possible hai lekin ye tarika galat hai
let accountState; // agar iski value initialise nhi karenge to iski value undefined ho jayegi


// accountId = 2  //ye illegal hai ya not allowed hai

accountEmail = "maurya@gmail.com"
accountPassword = "252553"
accountCity = "Varanasi"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope 
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);