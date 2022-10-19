$(function () {
  $(".slick_slider").slick({
    asNavFor: '.alert_slick',
    arrows: false,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 1500,
  });
});
$(function () {
  $(".alert_slick").slick({
    asNavFor: '.slick_slider',
    arrows: false,
    autoplay: false,
    vertical: true,
    autoplaySpeed: 1500,
  });
});
