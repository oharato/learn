function Human(name) {
  this.name = name;
}
Human.prototype.greet = function () {
  console.log("My name is " + this.name);
};
var alice = new Human("Alice");
alice.greet(); // My name is Alice
var bob = new Human("Bob");
bob.greet(); // My name is Bob
