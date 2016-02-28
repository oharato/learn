# ブレイクスルーJavaScript

## Chapter01_オブジェクト指向
- 再利用性、保守性、拡張性
- プロトタイプ、クロージャ、オブザーバ、this

### クロージャ
- 関数の中に関数を定義し、外側の関数内で変数を定義する。内側の関数からその変数にアクセスする。外側の関数の返り値を内側の関数にすると、内側の関数が定義された環境が保持される。

```JavaScript
function createCounter(){
  var count = 0;
  return function(){
    count++;
    console.log(count);
  }
}

var counter1= createCounter();
counter1();
```

### オブザーバ
- Observerと呼ばれるオブジェクトに監視者を登録する
    - Observerインスタンスは監視者名(監視イベント)の配列を持つ
    - onで監視者を登録するときに、名前と関数を登録する
    - 通知者は、イベント名を引数として、Observerインスタンスのtrigerメソッドを実行する

```JavaScript
function Observer() {
  this.listeners = {};
}

Observer.prototype.on = function(event, func) {
  if (! this.listeners[event] ) {
    this.listeners[event] = [];
  }
  this.listeners[event].push(func);
};

Observer.prototype.off = function(event, func) {
  var ref = this.listeners[event],
      len = ref.length;
  for (var i = 0; i < len; i++) {
    var listener = ref[i];
    if (listener === func) {
      ref.splice(i, 1);
    }
  }
};


var observer = new Observer();
var greet = function () {
  console.log("Good morning");
};
observer.on("morning", greet);
```

- 通知者がイベントを通知する

```JavaScript
Observer.prototype.trigger = function(event) {
  var ref = this.listeners[event];
  for (var i = 0, len = ref.length; i < len; i++) {
    var listener = ref[i];
    if(typeof listener === "function") listener();
  }
};

observer.trigger("morning"); //Good morning

```

- 監視者はイベント通知を受け取り、それぞれの目的を実行する

## this
- call(object, arg1, arg2, ...), apply(object, Array) 関数をすぐに実行

```JavaScript
function Human(name) {
  this.name = name;
}
function greet(arg1, arg2) {
console.log(arg1 + this.name + arg2);
}
var mike = new Human("Mike");
// mikeをthisとして実行する
greet.call(mike, "Hello　", "!!"); // Hello　Mike!!
```

- bind(object, arg1, arg2, ...) 呼びだされた時に新しい関数を生成し、値を束縛。

```JavaScript
function Human(name) {
  this.name = name;
}
function greet(arg1, arg2) {
console.log(arg1 + this.name + arg2);
}
var mike = new Human("Mike");
// mikeをthisに束縛した新しい関数を返す。
var greetMorning = greet.bind(mike);
greetMorning("Good Morning　", "!!"); // Good Morning　Mike!!

```

## Chapter02
