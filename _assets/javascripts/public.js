//= require jquery
//= require bootstrap
//= require vendor/retina.min
//= require vendor/bigslide

$(function() {
  $('.big-slide-link').bigSlide({
    menu: "#big-slide-panel",
    push: ".big-slide-push",
    side: "right",
    easyClose: true
  });

  $(".big-video").each(function() {
    var BV = new $.BigVideo({
      container: $(this),
      doLoop: true
    });
    BV.init();
    BV.show($(".big-video").data('href'), { ambient: true });
  });

  L.mapbox.accessToken = 'pk.eyJ1IjoibHVtb3NjbG91ZCIsImEiOiIzNWEzYTkwOGRmZGY2ZDI5NzM5ODc4NWNmMWNhOWJkZCJ9.f4TzhaH4GvOM6673C2nnTw';
  $('.mapbox').each(function() {
    var map = L.mapbox.map(this, $(this).data("map-id"));
    if ($(this).data("show-popup")) {
      map.featureLayer.on('ready', function() {
        map.featureLayer.getLayers()[0].openPopup();
      });
    }
  });
});

$(document).on("click", "[data-scroll-to]", function(e) {
  var scrollTo = $(e.target).data("scroll-to");
  if (!scrollTo) return;
  var targetTop = $(scrollTo).offset().top;
  var scrollOffset = $(e.target).data("scroll-offset");
  if (scrollOffset) {
    var scrollTop = targetTop + scrollOffset;
  } else {
    var scrollTop = targetTop;
  }
  $("html, body").animate({ scrollTop: scrollTop }, 650);
});
