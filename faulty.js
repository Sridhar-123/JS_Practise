
/* Create a faculty calculator using JavaScript

 This faulty calculator does following:
 1. It takes two numbers as input from the user
 2. It performs wrong operations as follows:

 + ---> -
 * ---> +
 - ----> /
 / ----> **

 It performs wrong operation 10% of the times


*/
let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the operation");

let obj = {
    "+" : "*",
    "*" : "+",
    "-" : "/",
    "/": "**",
}
let random=Math.random();
document.getElementById("dem").innerHTML=random;
if(random>0.1){
   
  alert(`The result is ${eval(`${a}${c}${b}`)}`);
}
else{
     c=obj.c;
    alert(`The result is ${eval(`${a}${c}${b}`)}`);
}
