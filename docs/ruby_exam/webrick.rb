require 'webrick'
require 'yaml'
require 'erb'
quizzes_template = './quizzes.html.erb'
quizzes_erb = ERB.new(File.read(quizzes_template), nil, '>')

srv = WEBrick::HTTPServer.new({
  DocumentRoot: './',
  BindAddress: '0.0.0.0',
  Port: 4000,
  # SSLEnable: true,
  # SSLCertName: [['CN', WEBrick::Utils.getservername]]
})
srv.mount_proc '/quizzes' do |req, res|
  quizzes = YAML.load_file("quizzes.yml")
  res.body = quizzes_erb.result(binding)
  res['Content-Type'] = 'text/html; charset=utf-8' 
end
srv.mount_proc '/quizzes/new' do |req, res|
  res.body = File.read("new.html")
  res['Content-Type'] = 'text/html; charset=utf-8' 
end
srv.mount_proc '/quizzes/create' do |req, res|
  res['Pragma'] = 'no-cache'
  res.set_redirect(WEBrick::HTTPStatus::MovedPermanently, '/quizzes')
end
srv.start
