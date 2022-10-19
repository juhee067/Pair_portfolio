$(function () {
  $(".slick_slider").slick({
    asNavFor: '.alert_slick',
    arrows: false,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 1500,
  });
  $(".alert_slick").slick({
    asNavFor: '.slick_slider',
    arrows: false,
    autoplay: false,
    vertical: true,
    autoplaySpeed: 1500,
  });
  $('#colum_left').on('scroll', function () {
    var sct = $('#colum_left').scrollTop();
    console.log(sct, "scrroll")

    if (sct > 1500) {
      $('.content_code').fadeOut();
    } else {
      $('.content_code').fadeIn()
    }
  });
  console.log(0)
});


// //스크롤 이벤트와 화살표 함수
// $(window).on("scroll", () => {
//   let wct = $(window).scrollTop();
//   //top 화살표 나오고 사라지기
//   const tTop = $(".code_match");
//   wct > 500 ? tTop.fadeIn() : tTop.fadeOut();

// });