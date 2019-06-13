require 'yaml'

quizzez = [
  {
    question: '特殊変数で最後にgetsかreadlineで読み込んだ文字列はどれ？',
    type: "choice", # select, input
    options: [
      {a: '$_'},
      {b: '$!'},
      {c: '$@'},
    ],
    answer: "a",
    description: "補足説明"
  },
  {"question" => 'hoge2?', answer: 'fuga2'},
]

groups = [
  {
    group_name: "特殊変数",
    question: "次の特殊変数の意味はどれ？",
    reverse_question: "次の意味の特殊変数はどれ？",
    options: [
      {"$_": "最後にgetsかreadlineで読み込んだ文字列"},
      {"$&`": "最後にマッチした文字列"}
    ]
  }

]

File.open("./quizzez.yml", 'w'){|f| YAML.dump quizzez, f} 
File.open("./groups.yml", 'w'){|f| YAML.dump groups, f} 

