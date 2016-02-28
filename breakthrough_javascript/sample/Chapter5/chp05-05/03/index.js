$(document).on("click", ".page a", function(e){
  e.preventDefault();

  var href = $(this).attr("href");
  myRouter.navigate( href );
});

function createEnterFunc(path){
  return function enter($el, action, prev, next) {
    return $.ajax({
        url: path,
        dataType: "html"
      }).then( function( d ){

        var content = $( d ).filter("article").find(".inner");
        $el.html( content );

        return action();
      });
  }
}

function leave($el, action) {
  return $el.find(".inner")
    .fadeOut(300).promise()
    .then(function(){
      return action();
    });
}

myRouter.add( "/index.html", $("<section class='page page1'/>"), createEnterFunc("./index.html"), leave);
myRouter.add( "/page2.html", $("<section class='page page2'/>"), createEnterFunc("./page2.html"), leave);
myRouter.add( "/page3.html", $("<section class='page page3'/>"), createEnterFunc("./page3.html"), leave);
myRouter.add( "/page4.html", $("<section class='page page4'/>"), createEnterFunc("./page4.html"), leave);

$(".page").detach();

myRouter.start();
