;(function(){

  var $pages;
  var pageObjects = [];

  function pageFactory(url, $el, enter, leave) {
    return {
      url: url,
      $el: $el,
      enter: enter,
      leave: leave
    }
  }

  function getPage(pages, key){
    return pages.filter(function(e){
      return e.url == key;
    })[0] || null;
  }

  function urlChangeHandler() {
    var pageid = parseUrl( location.hash );
    var $prevPage = $pages.filter(":visible");
    var $nextPage = getPage(pageObjects, pageid);

    animEnd(
      $prevPage.addClass("page-leave")
    ).then(function() {

      $pages.detach().removeClass("page-leave");

      return animEnd(
          $nextPage
            .appendTo("article")
            .addClass("page-enter")
      );
    }).then(function() {
      $nextPage.removeClass("page-enter");
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

  function parseUrl(url) {
    return url.slice(1) ||1;
  };

  function init() {

    pageObjects.push(
      pageFactory( "1", $(".page1"), null, null )
    );
    pageObjects.push( pageFactory( "2", $(".page2"), null, null ) );
    pageObjects.push( pageFactory( "3", $(".page3"), null, null ) );
    pageObjects.push( pageFactory( "4", $(".page4"), null, null ) );

    $pages = $("[data-role='page']").detach();

    $(window)
      .on("hashchange", urlChangeHandler)
      .trigger("hashchange");
  };

  init();

})();
