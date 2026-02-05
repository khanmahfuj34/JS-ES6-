// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const p1 = new person('Mahfuj', 25);
// console.log(p1);

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(amount + " deposited");
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        console.log(amount + " withdrawn");
    }

    showBalance() {
        console.log("Balance:", this.balance);
    }
}
const myAccount = new BankAccount('Mahfuj', 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.showBalance();