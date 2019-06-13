# Ruby技術者認定試験合格教本

## 1. Ruby技術者認定試験制度

Rubyアソシエーション - Ruby技術者認定試験 <https://www.ruby.or.jp/ja/certification/examination/>

Silver, Gold ともに90分、50問、75%、2.1.x、税込16200円

### Silver

- 文法
  - コメント
  - リテラル（数値、真偽値、文字列、文字、配列、ハッシュ等）
  - 変数/定数とスコープ
  - 演算子
  - 条件分岐
  - ループ
  - 例外処理
  - メソッド呼び出し
  - ブロック
  - メソッド定義
  - クラス定義
  - モジュール定義
  - 多言語対応
  - 組み込みライブラリ
- よく使用されるクラス、モジュール
  -（Object、数値クラス、String、Array、Hash、Kernel、Enumerable、Comparable等）
- オブジェクト指向
  - ポリモルフィズム
  - 継承
  - mix-in


### Gold

- 実行環境
  - コマンドラインオプション
  - 組み込み変数/定数
- 文法
  - 変数と定数
  - 演算子
  - ブロック
  - 例外処理
  - 大域脱出
  - キーワード引数
  - ラムダ式（->）
- 組み込みライブラリ
  - よく使用されるクラス、モジュール
  - （Object、Module、Kernel、Enumerable、Comparable等）
  - 数値
  - 正規表現
- 標準添付ライブラリ
  - よく使用されるライブラリ（socket、date、stringio等）
- オブジェクト指向
  - メソッドの詳細
  - メソッドの可視性
  - クラスの詳細
  - クラスの継承
  - モジュールの詳細

Goldとして認定されるにはGold及びSilver試験の合格が必要です。


### 受験対策用資料

- オンライン
  - RubyExamination（REx） <https://www.ruby.or.jp/ja/certification/examination/rex>
  - 模擬問題集PDF(Silver試験用) <https://www.ruby.or.jp/assets/images/ja/certification/examination/exam_prep_jp.pdf>
  - ITトレメ <http://jibun.atmarkit.co.jp/scenter/ittrain/121_cal.html>
- 書籍
  - Ruby公式資格教科書 Ruby技術者認定試験 Silver/Gold対応
  - メタプログラミングRuby第2版
  - Rubyのしくみ

## 2. 実行環境

- 本では 2.1.9
- Windowsでは rbenv の代わりに uru というのがあるらしい
  - けど WSL 使う
- 組み込み定数
  - STDIN
  - STDOUT
  - STDERR
  - ENV
  - ARGF 仮想ファイル
  - ARGV Rubyスクリプトに与えられた引数
  - DATA __END__以降をアクセスするFileオブジェクト
- コマンドラインオプション
  - `-c` 指定されたファイルが文法的に正しいか確認する。実行しない
  - `-e` 指定された文字列をRubyプログラムとして実行する。ワンライナー
  - `-w` 冗長モードでの実行
  - `-W0``-W1``-W2``-W` 出力範囲を指定した冗長モードでの実行
  - `-l` $LOAD_PATH に指定された文字列を追加する
  - `-r` スクリプト実行前に、指定されたファイルを実行する(require, loadと同じ)
  - `-d` デバッグモードで実行する
- require と load の違い
  - 同じファイルを実行すると
    - require: 一度しか実行しない
    - load: 実行された回数だけ実行
  - ファイルの拡張子を省略
    - require: 補完する
    - load: 補完しない
- require や load に相対パスを指定した場合、組み込み変数 $LOAD_PATH に格納されたパス順に探す
  - Rubyのインストールフォルダ
  - rubyを実行したフォルダ、カレントディレクトリ
- rubyインタプリタが参照する主な環境変数
  - `RUBYOPT` デフォルトでs挺するコマンドラインオプション
  - `RUBYLIB` デフォルトでライブラリを検索するパスを指定。＄LOAD_PATHの次に検索される
  - `PATH` RUby上から実行したコマンドを検索するパス
- 主な特殊変数
  - `$_` 最後にgetsかreadlineで読み込んだ文字列
  - `$&` 最後にマッチした文字列
  - `$~` 最後に成功したマッチに対する結果。$~[n]で参照できる
  - <code>$`</code> マッチした部分より前の文字列
  - `$'` マッチした部分より後ろの文字列
  - `$+` マッチ田中で最後のカッコに対応する文字列
  - `$1``$2` n番目のカッコに対応する文字列
  - `$?` 最後に終了した子プロセスのステータス
  - `$!` 直近で補足した例外オブジェクト
  - `$@` バックトレースを表す配列
  - `$0` 現在実行中のプログラムファイル名
  - `$*` ARGV
  - `$:` $LOAD_PATH

`ri` ツールで指定されたクラスやメソッドのリファレンスを表示

```ruby
ri String
ri String.gsub
ri String#chop
```



## 3. 文法


## 4. オブジェクト指向

## 5. 組み込みクラス


## 6. 添付ライブラリ

## 7. Silver演習問題


## 8. Gold演習問題

