function add(x, y) {
    return x + y;
}
console.log(add(1, 10))

function subtract(x, y) {
    return x - y;
}
console.log(subtract(10, 1))

function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 6))

function divide(x, y) {
    return x / y;
}
console.log(divide(6, 2))

function increment(n) {
    return ++n;
}
function decrement(n) {
    return --n;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    console.log(parseFloat("2.222"));
    console.log(parseFloat('des'));
    return parseFloat(n);
}