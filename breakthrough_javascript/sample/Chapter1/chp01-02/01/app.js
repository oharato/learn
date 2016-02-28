var a = 10;
function add() {
var b = 5;
console.log(a + b);
}
add(); // 15
console.log(a + b); // Uncaught ReferenceError: b is not defined