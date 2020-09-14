(function (loadedListener) {
　var doc, readyState;

　doc = document;
　readyState = doc.readyState;

　if (readyState === 'complete' || readyState === 'interactive') {
　　loadedListener();

    var id;
    var remover = function() {
      $(".frbanner").empty();
      if($(".frbanner").length == 1) {
        clearInterval(id);
      }
    };
    id = setInterval(remover, 200);


    var id2;
    var remover = function() {
      $("#frb-inline").remove();
      if($("#frb-inline").length == 1) {
        clearInterval(id2);
      }
    };
    id2 = setInterval(remover, 200);
　} else {
　　doc.addEventListener("DOMContentLoaded", loadedListener, false);
　}
})(function () {
} );
