  function App(url) {
    var self = this;
    this.fetch(url).then(function(data) {
      self.data = data;
    }, function(e) {
      console.error("データの取得に失敗しました");
    });
  }

  App.prototype.fetch = function(url) {
    return $.ajax({
      url: url,
      dataType: "json"
    });
  };

new App("data.json");
