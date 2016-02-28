;(function(){

  var $pages;

  function urlChangeHandler(){
    var pageid = parseUrl( location.hash );

    var $page = $pages
      .detach()
      .removeClass("page-enter")
      .filter(".page"+pageid)
      .appendTo("article");

    setTimeout(function(){
      $page.addClass("page-enter");
    }, 0);

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
