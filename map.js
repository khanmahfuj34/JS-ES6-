const numbers = [1, 2, 3, 4, 5];
const names = ['MahfUj', 'Khan', 'Rafiq', 'Jamal'];
const name = []
const double = []
for (const num of numbers) {
    const result = num * 2;
    double.push(result);

}
console.log(double);

const double2 = numbers.map(numbers => numbers * 2);
const langths = names.map(name => name.length);
const lowerCase = names.map(name => name[0].toLowerCase());
// const firstLetter = names.filter.length(num => {
//     return num.length > 5;
// })
console.log(langths);
console.log(lowerCase);
// console.log(firstLetter);

function min(nums) { return Math.min(nums) }
console.log(min([1, 3, 2]));

const cube = x => x * x * x;
console.log(cube(2))

const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(x, y, z);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output)