function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log("Animal sound");
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() {
    console.log("Woof! My name is " + this.name);
}
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Woof! My name is Buddy