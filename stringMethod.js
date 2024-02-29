// String Methods
// Extracting String Characters
let text="AZCDEFGHIJKLMN";
let res = text.charAt(1);

console.log(res);
console.log(text.charCodeAt(0));
console.log(text.at(1));
// The at() method is a new addition to JavaScript.
 
//It allows the use of negative indexes while charAt() do not.

//Now you can use myString.at(-2) instead of charAt(myString.length-2).
