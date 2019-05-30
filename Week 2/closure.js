// let funcs = [];
//
// for (var num=0; num<4; num++) {
//     funcs.push(
//         () => console.log(`Num: ${num}`)
//     )
// }
// funcs[0]();

// let spr = (a, b, c, ...restOfThem) => console.log(a,b,c, restOfThem);
 let anArray = [1,2,3,4,5,6];
// spr(...anArray);

// let func = (...args) => {
//     console.log(args);
//     for (const arg of args) {
//         console.log(arg);
//     }
// }
// func(1,2,3,4,5,6);
//
// let foo = {
//     color: 'red',
//     size: 'large'
// };
// for (const key in anArray) {
//     console.log(key);
//     console.log(`${key} is ${anArray[key]}`);
// }
// console.log(`foo.color=${anArray.color}`);
//
// console.log(foo.hasOwnProperty('color'));
// console.log(foo.hasOwnProperty('bingo')); //better way to do this?
//
// console.log(`0 is ${0 == false}`);

// function foo(x,y) {
//     x = (0 in arguments) ? x : 11;
//     y = (1 in arguments) ? y : 31;
//
//     console.log( x + y );
// }
//
// foo( 5 );				// 36
// foo( 5, undefined );	// NaN

//let bar = (a = baz(b), b=22) => a + b;
// let bar = ({a: 20, b: baz(a)}) => a + b;
//
// let baz = a => a*2;
//
// console.log(
//     bar()
// )

// let bar = (a = 22, b = baz(a)) => a + b;
//
// let baz = a => a*2;
//
// console.log(
//     bar(20), bar()
// )

//var names have to match
let foo = ({a = baz(b), b = baz(a)} ) => a/b;
let a = 20; let b= 42;
let baz = val => val*2;
console.log(`foo({20,42}) = ${foo({b,a})}`);
