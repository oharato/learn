function enter($el, action, prev, next){
  return $.ajax({
      url: "page2.html",
      dataType: "html"
    }).then( function( d ){
      
      var content = $( d ).filter("article").find(".inner");
      $el.html( content );

      return action();
    });
}

myRouter.add( "1", $(".page1").detach() );
myRouter.add( "2", $("<section class='page page2'/>"), enter);
myRouter.add( "3", $("<section class='page page3'/>"), null, null );
myRouter.add( "4", $("<section class='page page4'/>"), null, null );

myRouter.start();
