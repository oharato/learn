# Java SE 8 Silver

## オラクル認定資格教科書 Javaプログラマ Silver SE 8
- 第1章　Javaプログラミング基礎
- 第2章　配列
- 第3章　演算子と分岐文
- 第4章　繰り返し文と繰り返し制御文
- 第5章　クラス定義とオブジェクトの生成・使用
- 第6章　継承とポリモフィズム
- 第7章　Java APIの利用
- 第8章　例外処理
- 模擬試験


## 徹底攻略 Java SE 8 Silver問題集［1Z0-808］対応
- 1第1章 Javaの基本, 第2章 Javaのデータ型の操作
- 2第4章 配列の作成と使用
- 3第3章 演算子と判定構造の使用
- 4第5章 ループ構造の使用
- 5第6章 メソッドとカプセル化の操作
- 6第7章 継承の操作
- 7第9章 Java APIの主要なクラスの操作
- 8第8章 例外の処理
- 第10章 総仕上げ問題（1）
- 第11章 総仕上げ問題（2）

# 手軽にjava実行

```docker
docker run -v //c/Users/ohrtmk/Dropbox/memo/learn/JavaSE8Silver/src:/src -it java:8

docker run -it passy/java-repl
```

# 01 Javaプログラミング基礎
- 基本形
```java
class Sample1_1{
  public static void main(String[] args) {
    System.out.println("Hello!");
  }
}
```

- コンパイル
```sh
# ファイル名を指定
javac Sample1_1.java
# Sample1_1.classファイルが生成される
```

- 実行
```sh
# mainメソッドを持つクラスを指定
java Sample1_1
```

- コンパイル後に生成されるクラスファイルのファイル名にはclass宣言が使われる
```java
// Sample1_2.java
class Foo{}
```

```sh
javac Sample1_2.java
# Foo.class
```

- １つのファイルに複数のクラスを定義可能。コンパイルするとクラスファイルが複数生成される
```java
// Sample1_3.java
class Bar{}
class Sample1_3{
  public static void main(String[] args){
    System.out.println("Hello!");
  }
}
```

```sh
javac Sample1_3.java
# Bar.class, Sample1_3.class
```

- public指定のクラスは１ソースファイルにつき１つ
- public指定のクラスを定義したとき、そのソースファイル名はpublic指定したクラス名と同じ

```java
// OK
// Foo.java
public class Foo{}
class Bar{}
```

```java
// NG
// Foo.java
public class Foo{}
public class Bar{}
```

```java
// NG
// Bar.java
public class Foo{}
class Bar{}
```

## 整数リテラル
```java
0b101 // 2進数 先頭に0b
0373 // 8進数 先頭に0
0xff // 16進数 先頭に0x
```

## 浮動小数点数リテラル
```java
3e4 // 30000.0
```

## 文字リテラル
```java
'A' // 1つの文字
'\u3012' // Unicode \u
// 0-65535までの正の整数がはいる
char c = 89; // Y
```
## _がある数値リテラル
- ルール
  - 先頭、末尾は不可
  - 小数点の前後不可
  - float値、long値を表現するf, lの前には不可
  - 0x, 0bの途中及び前後は不可
  - 要するに、リテラルの先頭及び末尾、記号の前後は不可

```java
//OK
5_2
5___2
0x5_2
0_52

//NG
_52
52_
3_.1415F
3._1415F
999_L
0_x52
0x_52

```

## 変数
- ルール
  - 1文字目はa-z, A-Z, 通貨記号($, \, £), _
  - 2文字目以降は数字可
  - 予約語不可
    - abstract, assert, boolean, break, byte, case, catch, char, class, const, continue, default, do, double, else, enum, extends, final, finally, float, for, goto, if, implements, import, instanceof, int, interface, long, native, new, package, private, protected, public, return,  short, static, strictfp, super, switch, synchronized, this, throw, throws, transient, try, void, volatile, while 
  - 大文字小文字は区別する
  - 文字数制限なし

## 基本データ型
- 8種類
  - byte 8bit -128..127
  - short 16bit -32768..32767
  - int 32bit
  - long 64bit
  - float 32bit
  - double 64bit
  - char 16bit \u0000..\uFFFF
  - boolean 1bit

## 変数宣言と代入
- long型の変数にlong値を代入するときはリテラルにLまたはlを不可、floatはFまたはf

```java
// NG
long num3 = 10000000000;
float num4 = 10.0;

// OK
long num1 = 10000000000L;
float num2 = 10.0F;
```

## 定数
- finalつける
```java
final int num2 = 10;
```

## import static
```java
package ex6
public class Sample{
  public static int num = 0;
  public static void print(){
    System.out.println(num);
  }
}
```

```java
import static ex6.Sample.num
import static ex6.Sample.print

public class Main{
  public static void main(String[] args){
    num = 10;
    print();
  }
}
```

- staticメソッドをインポートするときはメソッド名だけ。カッコはいらない。


## 問題のポイント
- パッケージ名は慣習としてドメイン名を逆にしたものが使われるが必須ではない
- パッケージ宣言は必ず先頭(その前にコメントは書ける)。次にインポート宣言。
- インポート宣言をしなくても、java.langパッケージに属するクラスと同じパッケージに属するクラスが自動的にインポートされる
- *を使ってもサブパッケージはインポートされない。
    - `import java.util.*;`は `java.util.regex`に属するクラスをインポートしない 
- `int e = 0827;` 8進数は8使えない
- ` byte a = 0b10000000;` は右辺が2進数リテラルでint型なのでコンパイルエラー。キャストすればOK。`byte a = (byte)0b10000000;`
- `float d = 10.0;` は右辺が浮動小数点リテラルでdouble型なのでコンパイルエラー

# 02 配列

```Java
String[] array = new String[3];
array[0] = 'hoge';
String name = array[0];
int l = array.length;
int[] id = {100, 101, 102};
```

- 配列の初期値
```java
int i;
//下記はエラーになる
System.out.println("iの値は"+i);

int[] array = new int[5];
//下記はエラーにならない
System.out.println("array[0]の値は"+array[0]);
```

- byte, short, int, long => 0
- float, double => 0.0
- char => \u0000
- boolean => false
- 参照型 => null



```java
import java.util.ArrayList;
// 初期サイズを指定しないとデフォルト10
// <>のデータ型に指定できるのは参照型のみ。基本データ型は指定できない。
ArrayList<String> array = new ArrayList<String>(3);
// 右辺のデータ型は省略できる。ダイヤモンド演算子
//ArrayList<String> array = new ArrayList<>(3);
array.add('hoge');
array.add(2, 'fuga');
String name = array.get(0);
int l = array.size();
```

- ジェネリクスを使用しない場合取り出し時にキャストが必要になる
```java
ArrayList array = new ArrayList();
array.add(10);
int num = array.get(0); //コンパイルエラー
int num = (Integer)array.get(0); //OK

ArrayList<String> array = new ArrayList<>();
array.add("hoge");
String str = array.get(0); //OK
```

- コマンドラインで指定した値を数値として処理したい時はInteger.parseInt
```java
class Sample2_10 {
  public static void main(String[] args) {
    int num = Integer.parseInt(args[0]);
    System.out.println(num);
  }
}
```

## 問題のポイント
- 宣言時の要素数と矛盾する添字(インデックス)を使うと実行時エラー
- 型の不一致でコンパイルエラー


# 03 演算子と分岐文
```java
10 / 3     // 3
10.0 / 3   // 3.3333
```

- 前置は先に計算して、代入

```java
int a = 10;
int b = ++a;
// a 11, b 11
```

- 後置は先に代入して、計算

```java
int a = 10;
int b = a++;
// a 11, b 10
```

- 後置インクリメントの後ろに加算演算子は、自分には影響を及ぼさず、後ろの変数に影響する

```java
int a = 10;
a = a++ + a;
// a = 10 + 11
// a = 21
```

- 前置インクリメントの後ろに加算演算子は、自分に影響を及ぼし、後ろの変数に影響する

```java
int a = 10;
a = ++a + a;
// a = 11 + 11
// a = 22
```

```java
int a = 10;
a = a++ + a + a-- - a-- + ++a;
// a = 10 + 11 + 11 - 10 + 10
// a = 32
```

- 論理演算子の&,|は両辺必ず評価される

- 論理演算子の^は両辺が異なるときにtrue

- 文字列の長さはlength()

```java
StringBuilder sb = new StringBuilder("abc");
sb.append("x"); // abcx
StringBuilder sb = new StringBuilder("abc");
sb.insert(1, "x"); // axbc

StringBuilder sb = new StringBuilder("abc");
// 2番目の引数の前まで
sb.delete(0, 1); // bc

StringBuilder sb = new StringBuilder("abcdefg");
// 1番目の引数から2番目の引数の1つ前までを3番めの引数で置換
sb.replace(1, sb.length(), "yy"); // ayy

StringBuilder sb = new StringBuilder("abcdefg");
// 1番目の引数から2番目の引数の1つ前までの部分文字列を返す
sb.substring(2, 4); // cd

// 1番目の引数から最後までの部分文字列を返す
sb.substring(2); // cdefg

```

- 文字列の比較はequals

```java
s1.equals(s2)
```

- Stringオブジェクトの比較に注意

```java
String s1 = new String("tanaka");
String s2 = new String("tanaka");
s1 == s2 //false

String s1 = "tanaka";
String s2 = "tanaka";
s1 == s2 //true
```

- if文の{}省略時の処理対象は1行だけ

```java
if(num < 10)
  System.out.pringln("a");
  System.out.pringln("b");
// bは必ず出力される
```

- switch 文
  - switchの括弧内の式には`byte, char, short, int, enum, String, Integer` のいずれか。`long, double, float, Double`などは不可
  - 要するにint型以下の整数型とそのラッパークラス、文字と文字列、列挙型(enum)はOK、booleanやlongなどはダメ

```java
int num = 2;
switch(num){
  case 1:
    System.out.pringln("1");
    break;//switchから抜ける
  case 2:
    System.out.pringln("2");
    //breakが無いのでdefaultへ
  default:
    System.out.pringln("default");
}

```

```java
class Q3_9 {
    public static void main (String[] args) {
        int i = 2;
        switch (i) {
            case 1: System.out.println("case 1");
            case 2: System.out.println("case 2");
            case 3: System.out.println("case 3");
            case 4: System.out.println("case 4");
            default: System.out.println("default");
        }
    }
}
// break文がないとマッチしなくても処理が実行される
// case 2
// case 3
// case 4
// default
```

- 同じ文字列リテラルがプログラム内で再登場した時に参照が使いまわされる(コンスタントプール)

```java
String a = "sample";
String b = "sample";
System.out.print(a == b);
```

- elseのあとのカッコ省略はその下丸ごと全部

```java
int num = 10;
if(num == 100)
  //hoge
else
if(num == 10)
  //fuga
else
if(num == 10)
  // piyo
```

```java
int num = 10;
if(num == 100){
  //hoge
}else{
  if(num == 10){
    //fuga
  }else{
    if(num == 10){
      // piyo
    }
  }
}
```

## 問題のポイント

- if文の条件の = と == に注意
- `+=` で文字列連結できるが `-=` はできない
- Stringの文字列操作の戻り値は新しいStringクラスのオブジェクト。StringBuilderクラスの文字列操作は変更された文字列を持つ元のオブジェクト
- equalsメソッドの引数に注意。equalsメソッドの定義はSample型、渡すオブジェクトの型はObject
- switch()とcaseの型が違うとコンパイルエラー、caseに変数があるとコンパイルエラー
- ネストした三項演算子は?と:が交互に現れ、最後に:で終わる

# 04 繰り返し文と繰り返し制御文

```java
while(条件){
  処理;
}

do{
  処理;
}while();
```

- for文の式1は文である必要がある。宣言でない式を2つ入れることが出来る

```java
int i1 = 0;
for(i1; i1<5; i1++){} //コンパイルエラー
for(i1+=1; i1<5; i1++){} // OK

int i2 = 0, i3 = 0;
for(i2++, i3++; i2+i3<5; i2++){} // OK
```

- for文の式1での宣言式は1つのみ

```java
for(int i4 = 0, int i5 = 0; i4+i5<5; i4++){} //コンパイルエラー
for(int i6 = 0, i7 = 0; i6+i7<5; i6++){} //OK

for(int i6 = 0, i7 = 0; i6+i7<5; i6++, i7++){} //OK

for(;;){} // OK
for(){} // コンパイルエラー
```

```java
for(変数宣言 : 参照変数名){
  処理;
}

char[] array = {'a', 'b', 'c'};
for(char c : array){
  System.out.print(c+" ");
}
```
- breakは繰り返し処理が終了する
- continueは残りの処理をスキップし、引き続き繰り返し処理が実行される
- ラベル未使用だと内側しか抜けられない。ラベルを使うと外側へ抜けられる

```
loop1:
for(int x = 0; x < 3; x++){
  for(int y = 0; y < 3; y++){
    //hoge
    break loop1;
  }
}
```

## 問題のポイント
- `int[3] = {1,2,3}; // NG` => `int[] array = new int[3]; // OK`
- `for(String s; arrays) // NG` => `for(String s : arrays) // OK`
- 配列にはhasNext()使えない
- 配列の長さはlength。length()ではない
- continueを繰り返し文以外、例えばif文内で使うとコンパイルエラー
- 配列をprintlnに渡すとハッシュコードが表示される `[I@615e425f`

# 05 クラス定義とオブジェクトの生成・使用

- クラス内の属性(変数)と操作(メソッド)をまとめてメンバと呼ぶ
- メンバ変数はフィールドとも呼ばれる。
    - メンバ変数にはインスタンス変数とstatic変数の2種類がある
- コンストラクタ定義のルール
    - 名前はクラス名と同じ
    - 戻り値はもたない（型宣言しない）
    - 引数を受け取ることも出来る
- クラス内に同じ名前のメソッドやコンストラクタを複数定義できる。このことをオーバーロードと呼ぶ
    - メソッドを区別するために、引数の順番、データ型、引数の数が異なることが必須
- static変数やstaticメソッドはクラスからもインスタンスからも呼び出せる
- staticメソッドからインスタンス変数は呼べない
- staticイニシャライザはクラスファイルがロードされたタイミングで実行されるブロック

```java
class Foo{
  static{
    System.out.println("Foo class static initializer");
  }
  Foo(){
    System.out.println("Foo class constructor");
  }
}
public class Sample5_9{
  static{
    System.out.println("Sample5_9 class static initializer");
  }
  public static void main(String[] args){
    System.out.println("Sample5_9 class main");
    Foo f = new Foo();
  }
}
```

```
Sample5_9 class static initializer
Sample5_9 class main
Foo class static initializer
Foo class constructor
```

- アクセス修飾子
    - protected このクラスを継承したサブクラス、または同一パッケージ内のクラスから利用可能
    - デフォルト(指定なし) 同一パッケージ内のクラスからのみ利用可能。例えば、親クラスの指定なしのフィールドに対して、親クラスを継承した、別パッケージの子クラスはアクセスできない

```java
package ex18;
public class Parent{
  int num = 10;
}
```

```java
package other;
import ex18.Parent;
public class Child extends Parent{
  public static void main(String[] args){
    System.out.println(num);
  }
}
```


- 可変長引数は型の後ろに...をつける

```java
void sample(int... num){
  for(int i = 0; i < num.length; i++){
    System.out.println(num[i]);
  }
}
```
- クラスファイルをロードしたとき、staticで修飾されたフィールドやメソッドはstatic領域に配置され、それ以外はヒープ領域に配置される
- メソッド名と引数(数、型、順番)のセットのことをシグニチャと呼び、オーバーロードされているかの判断に使われる。

- コンストラクタはアクセス修飾子が使える

```java
// アプリ内でインスタンスが1つしかないことを保証
public class Sample{
  private static Sample instance = null;
  private Sample(){}
  public static Sample getInstance(){
    if(instance == null){
      instance = new Sample();
    }
    return instance;
  }
}
```

- コンストラクタには戻り値型を記述できない。記述するとメソッドとして解釈される

```java
public class Sample{
  void Sample(){
    // コンストラクタのように見えるがメソッドになる
  }
}
```

- 初期化ブロックはすべてのコンストラクタで共通する前処理を記述するために使用する

```java
public class Sample{
  {
    // first
  }
  Sample()[
    // second
  ]
}
```

- コンストラクタを1つでも定義すると、デフォルトコンストラクタは追加されない
- オーバーロードされたコンストラクタから、他のコンストラクタを呼び出すには`this`を使う。その際に、`this`で別のコンストラクタを呼び出す前に処理を記述するとコンパイルエラー



## 問題のポイント
- 定数は宣言時に初期化してなければコンストラクタを使用して初期化出来る

```java
class Q5_2{
  public static void main(String[] args){
    Test t = new Test(3);
  }
}
class Test{
  final int a;
  // final int a = 10; だとコンパイルエラー
  Test(int b) { a = b;}
}
```

- 変数のスコープに注意。インスタンス変数、static変数、ローカル変数
- ローカル変数にアクセス修飾子がついていたらコンパイルエラー
- `return` のあとに処理を書いたらコンパイルエラー(到達不能)

- メソッドの引数の型があいまいでエラーがおきる

```java
void sample(int a, double b){}
sample(1,2); // OK
```

```java
void sample(int a, double b){}
void sample(double a, int b){}
sample(1,2); // NG
```

# 06 継承とポリモフィズム
- 継承は１つだけ

```java
// エラーになる
class Sub D extends SuperA, SubC{
}
```

- extends キーワードを使用しないと暗黙でjava.lang.Objectクラスを継承する

- オーバーライドとはサブクラス内で、スーパークラスで定義しているメソッドと同じ名前でメソッドを再定義すること
    - 戻り値はスーパークラスで定義したメソッドが返す型と同じか、その型のサブクラス
    - アクセス修飾子は、スーパークラスと同じか、公開範囲の広いもの

- メソッドにfinal修飾子をつけると、メソッドはサブクラスでオーバーライドできなくなる
- クラスにfinal修飾子をつけると、そのクラスを元にサブクラスを作成できなくなる

```java
public final void method(){}
public final class Super(){}
```

- this()と記述するとコンストラクタ内で自クラス内で定義した別のコンストラクタを呼び出せる。ただし、this()はコンストラクタ定義の先頭に記述する必要がある。

- サブクラスのコンストラクタで、明示的にコンストラクタを指定しないと、スーパークラスの引数なしのコンストラクタsuper()が呼び出される

``` java
class Super{
  public Super(){}
  public Super(int a){}
}
class Sub extends Super{
  // Super()を呼び出す
  public Sub(int a){}
}

class Sub2 extends Super{
  // Super(int a)を呼び出す
  public Sub2(int a){ super(a);}
}
```

## 抽象クラス(abstract クラス)
```java
[修飾子] abstract class クラス名{
  [修飾子] abstract 戻り値 メソッド名(引数リスト);
}
```

- 抽象クラス自体はnewによるインスタンス化は出来ない。必ず継承したサブクラスを作る。
- 抽象クラスを継承したサブクラスが具象クラスの場合、元の抽象クラスの抽象メソッドを全てオーバーライドしなければならない
- 抽象クラスを継承したサブクラスが抽象クラスの場合、元の抽象クラスの抽象メソッドを全てオーバーライドしなくてもよい

## インタフェース interface
- SE7までは抽象メソッドとstaticな定数しか宣言できなかった

```java
interface MyInterface{
  int a; // 初期化していないのでコンパイルエラー
  int b = 10; // コンパイル時に暗黙で public static finalがつく
  protected abstract void methodD() // コンパイルエラー
  void methodC(); // コンパイル時に暗黙で public abstractがつく
}
```

- SE8では実装を持つdefaultメソッド、staticメソッドを定義できるようになった
    - java.lang.Objectクラスで提供されるequals(), hashCode(), toString()はデフォルトメソッドとして定義できない

```java
interface MyInterface{
  // 暗黙で publicがつく
  default void foo(){
    System.out.println("foo");
  }
}
```

- インタフェースを実装するにはimplementsキーワードを使い、そのキーワードの後には１つ以上のインタフェースを複数指定できる。
    - 抽象メソッドを全てオーバーライドしなければならない。オーバーライドするときにはpublicをつける

- 実装クラスはインタフェースを実装し、同時に他のクラスを継承することも出来る。このとき、extendsを先に書く。(コンパイルエラーになる)


## 型変換

- +のように演算対象（オペランド）を２つ取る演算子のルール
    - 一方のオペランドがdoubleの時、演算前に他方のオペランドはdoubleに変換される
    - 一方がfloat,他方がdoubleでない時、他方はfloatに。
    - 一方がlong,他方がfloat doubleでない時、他方はlongに。
    - 両方共long, float, doubleでないとき、両方共intに変換される

```java
short s1 = 10;
s1 = s1 + 1; // コンパイルエラー

// int型で宣言する
int s1 = 10;
s1 = s1 + 1;

// キャストする
short s1 = 10;
s1 = (short)(s1 + 1);
```




# 07 Java APIの利用
## 配列
- System クラス
    - static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
- Class クラス
    - boolean isArray()
- ArrayList クラス
    - Object[] toArray()
- Arrays クラス
    - static <T> List<T> asList(T... a)
        - 固定のリストが返る。add()すると実行時エラー
        - 可変にしたいときは `new ArrayList<>(Arrays.asList(s_array))`
        - `Arrays.asList("hoge", "fuga")` もOK
        - ArrayList型の変数にasListを入れようとするとコンパイルエラー `ArrayList<String> list = Arrays.asList("hoge","fuga")`
        - 引数はオブジェクト型の配列。プリミティブ型だとコンパイルエラー `int[] array = {1,2}; List<Integer> list = Arrays.asList(array);`
        - ただしAutoboxingにより次はOK `List<Integer> list = Arrays.asList(1,2)`
    - static void sort(Object[] a)

```java
int[] i_array = {30, 10, 20, 50, 40};
int[] copy = new int[3];
System.arraycopy(i_array, 2, copy, 0, 3);
// copy {20,50,40}

```



## Date and Time
- java.time パッケージ
    - LocalDate
        - static LocalDate now()
        - static LocalDate of(int year, int month, int dayOfMonth)
        - static LocalDate parse(CharSequence txt)
            - "2015-01-01"
    - LocalTime
        - static LocalTime of(int hour, int minute, int second)
        - static LocalTime parse(CharSequence txt)
            - "20:30:01"
    - LocalDateTime
        - static LocalDate of(int year, int month, int dayOfMonth, int hour, int minute, int second)
        - static LocalDateTime parse(CharSequence txt)
            - "2015-01-01T20:30:00"
    - Period 期間を扱う。2年3ヶ月と4日
    - ofの引数が不正(2015-01-01 -> 2015-1-1)だとDateTimeException
- java.time.format
    - DateTimeFormatter
```java
LocalDateTime dateTime1 = LocalDateTime.now();
DateTimeFormatter fmt1 = DateTimeFormatter.ISO_DATE;
System.out.println("ISO_DATE: "+ fmt1.format(dateTime1)); // 2015-11-05
DateTimeFormatter fmt2 = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
System.out.println("ofPattern: "+ fmt2.format(dateTime1)); // 2015/11/05 22:53:11
```
- 日付時間の計算
    - plusXXXXs(long xxx)メソッド

```java
date = date.plusDays(3);
date.plusMonths(3);
date.plusWeeks(3);
date.plusYears(3);

```

## SE8で導入されたデフォルトメソッド
- default boolean removeIf(Predicate<? super E> filter)
    - Collectionインタフェース
    - 指定された処理を満たすコレクションの要素をすべて削除
- default void replaceAll(UnaryOperator<E> operator)
    - Listインタフェース
    - 指定された処理を行い、現在のリストの要素を置き換える

## 関数型インタフェース
- 定義されている抽象メソッドが１つ
- java.util.function パッケージとして提供

|インタフェース名|抽象メソッド|概要|
|---|---|---|
|Function<T,R>|R apply(T t)|引数Tを受取り、Rを返す|
|Consumer<T>|void accept(T t)|引数Tを受取り、返り値なし|
|Predicate<T>|boolean test(T t)|引数Tを受取り、booleanを返す|
|Supplier<T>|T get()|引数無しで、Tを返す|
|UnaryOperator<T>|T apply(T t)|引数Tを受取り、Tを返す|







# 08 例外処理

- Throwable
    - Error(実行環境エラー、メモリ不足、unchecked例外・例外処理任意)
    - Exception(アプリケーションエラー)
        - RuntimeException(unchecked例外・例外処理任意)
        - RuntimeException以外のException(checked例外・例外処理必須、DBやファイルなどのJava実行環境以外の環境起因)

|カテゴリ|クラス名|説明|
|---|---|---|---|
|Errorのサブクラス|AssertionError||
||OutOfMemoryError||
||StackOverflowError|再帰多すぎ|
||NoClassDefFoundError|クラスファイルみつからない|
|RuntimeException|ArrayIndexOutOfBoundsException||
||ClassCastException||
||IllegalArgumentException|メソッド引数不正|
||ArithmeticException|ゼロ除算|
||NullPointerException||
||NumberFormatException|文字列を整数に変換|
|RuntimeException以外のException(例外処理必須)|IOException||
||FileNotFoundException||
||ClassNotFoundException|メソッドの引数にクラス名を表す文字列渡したけど見つからない|

- 複数のcatchブロックを書く時に、指定した例外クラス間に継承関係がある場合は、サブクラス側から書く。スーパークラスから書くとコンパイルエラー
- JavaSE7からマルチキャッチでかける
    - try-with-resources, 再スローはGold試験


```java
try{
}catch(FileNotFoundException | ArithmeticException){
}
```

- 複数のメソッド内の例外処理の内容が同じである場合、それらのメソッドでは `throws XXXException`を宣言しておき、呼び出し元で共通の例外処理する
- java.ioのFileReaderクラスのコンストラクタは例外処理必須
```java
public FileReader(String fileName)throws FileNotFoundException

public static void main(String[] args){
  // 例外処理してないのでコンパイルエラー
  FileReader r = new FileReader("test.txt");
}
```

- throw で明示的にエラーを投げる
```java
throw new IOException();
```


- 1.サブクラスのメソッドがスローする例外は、スーパークラスのメソッドのものと同じかそれのサブクラス
- 2.サブクラスのメソッドがスローする例外は、RuntimeExceptionおよびそれのサブクラス(unchecked)であれば、スーパークラスのメソッドに関係なくスロー出来る
- 3.スーパークラスのメソッドにthrowsがあっても、サブクラスでthrowsを書かなくてもOK

- Exception
    - RuntimeException
    - ClassNotFoundException
    - IOException
        - FileNotFoundException

```java
// Super Class
method() throws IOException{}
```

```java
// Sub Class
// 何も指定しないのはOK
method(){}
// 親の例外のサブクラスなのでOK
method() throws FileNotFoundException {}
// NG 1
method() throws Exception {}
// NG 1
method() throws ClassNotFoundException {}
// OK 2
method() throws RuntimeException {}
```


## ポイント
- 例外処理必須のRuntimeException以外のExceptionを暗記する
    - IOException, FileNotFoundException, ClassNotFoundException
    - FileNotFoundExceptionはIOExceptionのサブクラス
- Exceptionをtrycatchしていなければ、そのExceptionが起こるすべてのメソッド宣言にthrows Exceptionが必要
- 選択肢をよく見て、何が違うか見る(末尾に 1 があるとか)。焦らない
- tryの中のローカル変数はcatch内では使えない(コンパイルエラー)
- catchはサブクラスのエラーを先に書く(コンパイルエラー)
- メソッド宣言のthrowsの例外と、実際に発生する例外が違うのはありうる
- スーパークラスのメソッドでthrowsを指定しないときに、サブクラスのメソッドでchecked例外であるIOExceptionを指定するとコンパイルエラー

模擬試験
