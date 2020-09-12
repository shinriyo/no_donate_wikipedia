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

    var frb = doc.getElementById("frb-inline");
    if (frb) {
      frb.style.display = 'none';
    }
　} else {
　　doc.addEventListener("DOMContentLoaded", loadedListener, false);
　}
})(function () {
} );
