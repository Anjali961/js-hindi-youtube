// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("02" >1);
/**the reason is that an equality check == and comparisons ><>=
 * <= work differently.
 * Comparisons convert null to a number,treating it as 0.
 * that's why (3) null>=0 is true and(1) null>0 is false. 
 */

console.log(null > 0);
console.log(null == 0);/**is tarah ka conversion hme kabhi bhi confusion me daal sakta hai */
console.log(null >= 0);

console.log(undefined == 0);  //most of the cases me hame is tarah k conversion ko avoid karna chahiye
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2"===2);













