;(function(){

  var $pages;
  var pageObjects = [];
  var urlHistory = [];

  function pageFactory(url, $el, enter, leave) {
    return {
      url: url,
      $el: $el,
      enter: enter || pageEnter,
      leave: leave || pageLeave
    }
  }

  function getPage(pages, key){
    return pages.filter(function(e){
      return e.url == key;
    })[0] || null;
  }

  function pageEnter($el) {
    var $page = $el.addClass('page-enter').appendTo('article');
    return animEnd( $page ).then(function(){
      $el.removeClass('page-enter');
    });
  }

  function pageLeave($el) {
    return animEnd( $el.addClass('page-leave') ).then(function() {
      $el.detach();
      $el.removeClass('page-leave');
    });
  }

  function scanLast(arr, f){
    var temp = arr.slice(-2);
    if(temp.length === 1) temp.unshift(null);
    return f.apply(this, temp);
  }

  var firstPromise = new $.Deferred().resolve();

  function urlChangeHandler() {
    var pageid = parseUrl( location.hash );

    urlHistory.push( pageid );
    
    scanLast(urlHistory, function(prev, next){
      var prevPage = getPage(pageObjects, prev)
        , nextPage = getPage(pageObjects, next);

      firstPromise.then(function(){
        var page = prevPage;
        if(page) return page.leave( page.$el, pageLeave.bind(this, page.$el), prev, next );
      }).then(function() {
        var page = nextPage;
        return page.enter( page.$el, pageEnter.bind(this, page.$el), prev, next );
      });
    });
  };

  function animEnd($el) {
    var dfd = new $.Deferred
      , callback = function(){ dfd.resolve($el); };

    if( $el.length === 0 || $el.css("-webkit-animation") === undefined ) {
      dfd.resolve();
      return dfd;
    }

    $el.on( "webkitAnimationEnd", callback );
    dfd.done(function() {
      $el.off( "webkitAnimationEnd", callback );
    });

    return dfd;
  };

  function parseUrl(url) { return url.slice(1) ||1; };

  function init() {

    pageObjects.push( pageFactory( "1", $(".page1"), function($el, action, prev, next){
      alert("hello");
      return action();
    }, function($el, action, prev, next){
      alert("bye");
      return action();
    }) );

    pageObjects.push( pageFactory( "2", $(".page2"), null, null) );
    pageObjects.push( pageFactory( "3", $(".page3"), null, null) );
    pageObjects.push( pageFactory( "4", $(".page4"), null, null) );

    $pages = $("[data-role='page']").detach();

    $(window)
      .on("hashchange", urlChangeHandler)
      .trigger("hashchange");
  };

  init();

})();
