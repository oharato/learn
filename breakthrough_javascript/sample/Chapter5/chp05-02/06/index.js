;(function(){

  var $pages;

  function urlChangeHandler() {
    var pageid = parseUrl( location.hash );
    var $prevPage = $pages.filter(":visible");
    var $nextPage = $pages.filter(".page" + pageid);

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

    if($el.length === 0) {
      dfd.resolve();
      return dfd;
    }

    $el.on( "webkitAnimationEnd", callback );
    dfd.done(function() {
      $el.off("webkitAnimationEnd", callback );
    });
    return dfd;
  };

  function parseUrl(url) {
    return url.slice(1) ||1;
  };

  function init() {
    $pages = $("[data-role='page']").detach();
    $(window)
      .on("hashchange", urlChangeHandler)
      .trigger("hashchange");
  };

  init();

})();
