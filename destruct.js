const product = { name: "Laptop", price: 1200, specs: { ram: "16GB", storage: "512GB SSD" } };
const discount = product.price * 20 / 100;
const yourPay = product.price - discount;
const vatAmount = yourPay * 7 / 100;
const totalAmount = yourPay + vatAmount;
console.log("Product Price:", totalAmount);

//more short
const total = product.price - (product.price * 20 / 100) + ((product.price - (product.price * 20 / 100)) * 7 / 100);
console.log("Total Amount:", total);