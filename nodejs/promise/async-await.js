// REF: https://www.shecodes.io/athena?tag=asynchronous

// Code:1
// // setTimeout without params
// function greeting() {
//   console.log("clg");
// }
// setTimeout(greeting, 1000);

// // setTimeout with params
// function greetingWithParams(name, lastName) {
//   console.log(`Hello ${name} ${lastName}`);
// }
// setTimeout(greetingWithParams, 1000, "Hafiz", "islam");
// // setTimeout(greetingWithParams('Hafiz'), 1000,);// TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
// // console.log(typeof greetingWithParams("Hafiz")); // undefined
// // console.log(typeof greetingWithParams); // function

// // console.log("-----------------promise and async/await------------------");

// function functionExecutionAfterNSec(n, x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(x);
//     }, n);
//   });
// }
// (function () {
//   const start = performance.now();

//   const a = functionExecutionAfterNSec(1000, 1);
//   a.then(async function(x) {
//     const y =  functionExecutionAfterNSec(2000, 2);
//     const z = await functionExecutionAfterNSec(1000, 3);

//     const p = functionExecutionAfterNSec(2000, 4);
//     const q = functionExecutionAfterNSec(1000, 5);
//     console.log(x + y + z + (await p) + (await q));
//     const end = performance.now();
//     console.log((end - start)/1000);
//   });
// })();

console.log(Number.EPSILON)
console.log(.1+.2-.3)
