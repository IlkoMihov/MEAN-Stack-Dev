const evaluate = (string) => calculate[string[1]](string[0],string[2])
const calculate = {
    '+': function(left,right) {return parseInt(left,10)+parseInt(right,10)},
    '-': function(left,right) {return left-right},
    '*': function(left,right) {return left*right},
    '/': function(left,right) {return left/right},
    '%': function(left,right) {return left%right}
};
const expression = '8%3';
const expression1 = '8*3';
const expression2 = '8/3';
const expression3 = '8-3';
const expression4 = '8+3';

let operator = evaluate(expression)
console.log(`${expression} = ${operator}`)
let operator1 = evaluate(expression1)
console.log(`${expression1} = ${operator1}`)
let operator2 = evaluate(expression2)
console.log(`${expression2} = ${operator2}`)
let operator3 = evaluate(expression)
console.log(`${expression3} = ${operator3}`)
let operator4 = evaluate(expression4)
console.log(`${expression4} = ${operator4}`)