const numbers = [23, 4, 56, 67, 89, 12];
console.log(numbers);
console.log(...numbers);
const max = Math.max(...numbers);
console.log("Maximum number is:", max);

//copy array
const first = [1, 2, 3, 4, 5];
const second = [...first];
second.push(6);
console.log("first array", first);
console.log("second array", second);

const person = { name: "Mahfuj Khan", age: 32, job: "Developer" };
const employee = { designation: "swe", ...person, country: "Bangladesh" };
console.log(person);
console.log(employee);