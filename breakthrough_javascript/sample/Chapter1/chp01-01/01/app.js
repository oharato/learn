function Human(name) {
  this.name = name;
};
Human.prototype.greet = function() {
  console.log("Hello " + this.name);
};
var mike = new Human("Mike");
mike.greet(); // Hello Mike
