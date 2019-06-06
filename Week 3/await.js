












//  async function delayed ( ) {
// //    return new Promise(function (resolve, reject) {
//         setTimeout(
//             function () {
//                 let x = 42
//                 return x
//             }, 2000)
//
//
// }

// function delay(x) {
//     return new Promise(
//         resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, 2000);
//     });
// }

function delay(x) {
    return x;
}
console.log('starting run');

async function f1() {
    var x = await delay(10);
    console.log(x); // 10
}
f1();

//
// const x =  delayed()
//     .then((x) => console.log(`Got ${x}`))
//
// console.log('x is now', x)
// console.log('ending run')
