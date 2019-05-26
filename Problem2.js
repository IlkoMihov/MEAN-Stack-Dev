const evaluate = (string) => calculate[string[1]](string[0],string[2])
const calculate = {
    '+': function(left,right) {return left+right},
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

console.log(`${expression} = ${evaluate(expression)}`)
console.log(`${expression} = ${evaluate(expression1)}`)
console.log(`${expression} = ${evaluate(expression2)}`)
console.log(`${expression} = ${evaluate(expression3)}`)
console.log(`${expression} = ${evaluate(expression4)}`)