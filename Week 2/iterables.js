
//
// console.log([1,2,3,4,5].next());
// console.log([1,2,3,4,5].next());
// console.log([1,2,3,4,5].next());

// let anArray = [5,4,3,2,1]
// let anotherIter = anArray[Symbol.iterator]();
//
// let iter = [1,2,3,4,5][Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
//

//
// let foo = "This is a test";
// let iter = foo[Symbol.iterator]();
//
// let bar = iter.next();
// console.log(`iter: ${JSON.parse(JSON.stringify(iter.next()))}`);
// console.log(iter.next());


function* listGen () {
    yield 1;
    yield 2;
    yield 3;
}

const x = listGen();

console.log(`${x}`) //this is just a ref to the generator
let theValue = x.next();
console.log(theValue);
//console.log(`Value: ${x.next().value} ${x.next().done}`);


