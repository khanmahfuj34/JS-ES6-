function add(num1, num2) {
    return num1 + num2;
}
//function expression
const addition = function(num1, num2) {
    return num1 + num2;
}
const result = addition(5, 10);
console.log(result);

//arrow function

const add2 = (num1, num2) => num1 + num2;
const result2 = add2(20, 30);
console.log(result2);

//miultiLine arrow function
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const makeTriple = y * 3;
    const total = makeDouble + makeTriple;
    return total;

}
const result3 = doMath(5, 15);
console.log(result3);

//20% discount
const getTax = (amount, taxtRate) => amount * taxtRate / 100;
const add3 = (p, q) => p + q;

//single parameter arrow function
const getSquare = (x) => x * x;
console.log("square is", getSquare(5));
console.log("Tax are", getTax(1000, 15));
console.log("Value added", add3(10, 20));

//annymous function