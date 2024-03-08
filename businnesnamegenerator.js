/*             
Create a bussiness name generator by combining list of adjective and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let obj1={
 0 : "Crazy",
 1 : "Amazing",
 2 : "Fire",

}
let obj2={
    0:"Engine",
    1:"Foods",
    2:"Garments",
}
let obj3={
    0:"Bros",
    1:"Limited",
    2:"Hub",
}
let random1=Math.floor(Math.random()*3);
let random2=Math.floor(Math.random()*3);
let random3=Math.floor(Math.random()*3);

console.log(obj1[random1]+obj2[random2]+obj3[random3]);
