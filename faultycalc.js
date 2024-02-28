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

let add = (a,b) =>{
    if(Math.random()<0.1)
        return a-b;
    else
      return a+b;
}
  
let subtract = (a,b) =>{
    if(Math.random()<0.1)
    return a/b;
else
    return a-b;
}
    let multiply = (a,b) =>{
        if(Math.random()<0.1)
        return a+b;
       else
       return a*b;
         
    }

    let divide = (a,b) => {
        if(Math.random()<0.1)
        return a**b;
    else 
       return a/b;
    }

let res;
  res=divide(8,2);
  console.log(res);