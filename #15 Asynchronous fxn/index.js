// console.log("start");
// console.log("logic");
// console.log("end");

// console.log("start");

// setTimeout(() => {
//     console.log("logic");
// },5000);
// console.log("end");

a = 10;
b = 5;

setTimeout(() => {
    b = 40;
},5000);

console.log(a+b);
setTimeout(() =>{
    console.log(b);
}, 2000);
console.log(a+b);