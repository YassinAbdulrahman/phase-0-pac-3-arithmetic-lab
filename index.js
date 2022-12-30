function add() {
    return 5 + 9;
}
function subtract() {
    return 5 - 9;
}
function multiply() {
    return 5 * 9;
}

function divide() {
    return 5 / 9;
}

function add(a, b) {
    return `${a + b} `
}
console.log(add(5, 5))

function subtract(a, b) {
    return `${a - b} `
}
console.log(subtract(5, 5))

function multiply(a, b) {
    return `${a * b} `
}
console.log(multiply(5, 5))

function divide(a, b) {
    return `${a / b} `
}
console.log(divide(5, 5))

function increment(n) {
    return `${++n}`;
}
console.log(increment(5))

function decrement(n) {
    return `${--n}`;
}
console.log(decrement(5))

function makeInt(n) {
    return `${parseInt(n, 10)}`;
}
console.log(makeInt(5))


function preserveDecimal(n) {
    return `${parseFloat(n)}`
}
console.log(preserveDecimal("2.222"))
console.log(preserveDecimal("jhgjkl"))



