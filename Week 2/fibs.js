






//
//
//
// function* fibs () {
//     let [val1, val2, result] = [0, 1, 0]
//     while (result < 100) {
//         result = val1+val2
//         val1 = val2
//         val2 = result
//         yield result
//     }
// }
//
//
// //Get a few fibs
// myFibs = fibs()
// let count = 5;
// while (count--> 0) {
//     console.log(myFibs.next().value)
// }
// console.log(...myFibs);
//
// console.log(...myFibs);

//TODO Fix this for x = 0;
function* fibs (x = 0) {
    let [val1, val2, result] = [x,x-1,0];
    if (!x) {val2 = 1; yield 0;}
    //    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        if (result > Number.MAX_SAFE_INTEGER) throw new Error()
        yield result
    }
}
//Get a few fibs
myFibs = fibs(0) //not really fib(4), just shows passing param
let count = 5;
while (count --> 0) {
    console.log(myFibs.next().value)
}
console.log(Number.MIN_SAFE_INTEGER);
