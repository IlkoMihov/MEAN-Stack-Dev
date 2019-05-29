// function* fibonnaci(){
//     let [val1, val2, result] = [0, 1, 0]
//     while (true) {
//         result = val1+val2
//         val1 = val2
//         val2 = result
//         yield result
//     }
// }
// for(i = 0; i<25; i++){
//     iteration= fibonnaci().next()
// console.log(iteration.value, iteration.done)
// }

function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    yield 0
    yield 1
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}
function* evenFibonnaci () {
    const myFibs = fibs()
    while (true) {
        fibNumber = myFibs.next().value
        while (fibNumber % 2 != 0) fibNumber = myFibs.next().value
        yield fibNumber
        myFibs.next()
    }
}

const fiveEvenFibs = number => {
        const fibNumber = evenFibonnaci()
    for( i=0; i<number; i++){
        console.log(fibNumber.next().value)
    }
}
fiveEvenFibs(5)