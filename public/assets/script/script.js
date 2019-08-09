(function(window, document, $) {
  "use strict";
  $(function() {
    var $body = $("body");

    var scroll_theme = $(".main-menu").hasClass("menu-dark") ? "light" : "dark";

    $(".main-menu-content").perfectScrollbar({
      suppressScrollX: true,
      theme: scroll_theme,
      maxScrollbarLength: 50
    });
  });
})(window, document, jQuery);
