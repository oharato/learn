myRouter.add( "1", $(".page1"), function($el, action, prev, next){
  alert("hello");
  return action();
}, function($el, action, prev, next){
  alert("bye");
  return action();
} );

myRouter.add( "2", $(".page2"), null, null );
myRouter.add( "3", $(".page3"), null, null );
myRouter.add( "4", $(".page4"), null, null );

$("[data-role='page']").detach();

myRouter.start();
