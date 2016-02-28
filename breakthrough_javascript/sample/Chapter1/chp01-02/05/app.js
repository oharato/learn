function createCounter() {
  var count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

var counter1 = createCounter();
counter1(); // 1
counter1(); // 2
counter1(); // 3

var counter2 = createCounter();
counter2(); // 1
counter2(); // 2

count = 100;

counter1(); // 4