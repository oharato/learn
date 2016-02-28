function urlChangeHandler(){
    alert( location.hash );
};

$(window).on("hashchange", urlChangeHandler);

