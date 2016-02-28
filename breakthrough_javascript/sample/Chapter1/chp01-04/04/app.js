function Human(name) {
  this.name = name;
}
function greet(arg1, arg2) {
console.log(arg1 + this.name + arg2);
}
var mike = new Human("Mike");
var greetMorning = greet.bind(mike);
greetMorning("Good Morning　", "!!"); // Good Morning　Mike!!
