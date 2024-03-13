/*  
Write a program to calculate factorila of a number using reduce and using for loops
*/
let map = (arr)=>{
   //let arr = loop(a)
  arr.map((e)=>{
    return e;
  })
}


let loop =(a)=>{
  
    let arr=[];
    for(let i=0;i<=a;i++){
      arr.push(i);
    }
    return arr;
 }

 console.log(loop(5));
 console.log(map(4));