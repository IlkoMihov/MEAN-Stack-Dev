














const doMath = (value, operation) => operation(value);

let result = doMath(
    30,
    val => val + 12
)
console.log(result);
