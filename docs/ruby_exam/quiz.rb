require 'yaml'

quizzes = [
  {
    "id" => "f62bdf16-ae73-4d52-8630-5974e5673491",
    "category" => "RubyExam/Silver/2.実行環境",
    "question" => '特殊変数で最後にgetsかreadlineで読み込んだ文字列はどれ？',
    "type" => "choice", # select, input
    "options" => {
      "a" => '$_',
      "b" => '$!',
      "c" => '$@',
    },
    "answer" => "a",
    "description" => "補足説明"
  },
  {
    "id" => "cd6166e7-23d5-484a-beac-92c9277ce5b1",
    "category" => "RubyExam/Silver/2.実行環境",
    "question" => '同じファイルを実行したときの、require と load の違いは？',
    "type" => "text",
    "options" => [
    ],
    "answer" => "requireは一度しか実行しないが、loadは実行された回数だけ実行",
    "description" => ""
  },
  {
    "id" => "8db21d83-84da-4e0d-ae1a-1439884ebc4e",
    "category" => "RubyExam/Silver/2.実行環境",
    "question" => 'ファイルの拡張子を省略して実行したときの、require と load の違いは？',
    "type" => "text",
    "options" => [
    ],
    "answer" => "requireは拡張子を補完するが、loadは補完しない",
    "description" => ""
  },

]


  quiz_groups = [
  {
    "id" => "8db21d83-84da-4e0d-ae1a-1439884ebc4e",
    "group_name" => "RubyExam/Silver/2.実行環境/組み込み定数",
    "question" => "次の組み込み定数の意味はどれ？",
    "reverse_question" => "次の意味の組み込み定数はどれ？",
    "options" => [
      {"ARGF" => "仮想ファイル"},
      {"ARGV" => "Rubyスクリプトに与えられた引数"},
      {"DATA" => "__END__以降をアクセスするFileオブジェクト"},
    ]
  },
  {
    "id" => "92cb6f0c-9f0e-4523-86b9-d1612d1e8a76",
    "group_name" => "RubyExam/Silver/2.実行環境/コマンドラインオプション",
    "question" => "次のコマンドラインオプションの意味はどれ？",
    "reverse_question" => "次の意味のコマンドラインオプションはどれ？",
    "options" => [
      {"-c" => "指定されたファイルが文法的に正しいか確認する。実行しない"},
      {"-e" => "指定された文字列をRubyプログラムとして実行する。ワンライナー"},
      {"-w" => "冗長モードでの実行"},
      {"-W0" => "出力範囲を指定した冗長モードでの実行"},
      {"-l" => "$LOAD_PATH に指定された文字列を追加する"},
      {"-r" => "スクリプト実行前に、指定されたファイルを実行する(require, loadと同じ)"},
      {"-d" => "デバッグモードで実行する"},
    ]
  },
  {
    "id" => "3c901835-3c02-4b33-85ca-359fca3cbcfb",
    "group_name" => "RubyExam/Silver/2.実行環境/特殊変数",
    "question" => "次の特殊変数の意味はどれ？",
    "reverse_question" => "次の意味の特殊変数はどれ？",
    "options" => [
      {"$_" => "最後にgetsかreadlineで読み込んだ文字列"},
      {"$&" => "最後にマッチした文字列"},
      {"$'" => "マッチした部分より後ろの文字列"},
      {"$+" => "マッチ田中で最後のカッコに対応する文字列"},
      {"$1" => "n番目のカッコに対応する文字列"},
      {"$?" => "最後に終了した子プロセスのステータス"},
      {"$!" => "直近で補足した例外オブジェクト"},
      {"$@" => "バックトレースを表す配列"},
      {"$0" => "現在実行中のプログラムファイル名"},
      {"$*" => "ARGV"},
      {"$:" => "$LOAD_PATH"},
    ]
  },
]

File.open("./quizzes.yml", 'w'){|f| YAML.dump quizzes, f} 
File.open("./quiz_groups.yml", 'w'){|f| YAML.dump quiz_groups, f} 

