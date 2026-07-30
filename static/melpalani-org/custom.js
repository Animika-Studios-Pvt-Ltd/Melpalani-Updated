document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

// $(document).ready(function() {
//     var $slider = $('.custom-slider');
//     var totalSlides = $slider.find('.custom-box').length;
//     var currentIndex = 1;

//     $slider.slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         infinite: true,
//         cssEase: 'ease-in-out',
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 900,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 550,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: false
//                 }
//             }
//         ]
//     }).on('afterChange', function(event, slick, currentSlide) {
//         currentIndex = currentSlide + 1;
//         $('.custom-slider-number').text(currentIndex + '/' + totalSlides);
//     });

//     // Initialize the display of the slide number
//     $('.custom-slider-number').text(currentIndex + '/' + totalSlides);
// });

var $slider = $(".client-slider"),
  $paginationNumber = $(".pagination-number");
function padNumber(e) {
  return e < 10 ? "0" + e : e;
}
$slider.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: !0,
  autoplaySpeed: 3000,
  arrows: !0,
  dots: !1,
  adaptiveHeight: !0,
  responsive: [
    {
      breakpoint: 1121,
      settings: {
        slidesToShow: 3,
        autoplay: !0,
        adaptiveHeight: !0,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        autoplay: !0,
        adaptiveHeight: !0,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        autoplay: !0,
        adaptiveHeight: !0,
      },
    },
  ],
});

// Set accessible names on slick-track elements for ARIA compliance
$(".client-slider").each(function () {
  var $track = $(this).find(".slick-track");
  if ($(this).closest("#temples").length > 0) {
    $track.attr("aria-label", "Temples");
  } else {
    $track.attr("aria-label", "Events");
  }
});

$slider.on("init reInit afterChange", function (e, t, i) {
  var o = t.currentSlide + 1,
    n = t.slideCount;
  $paginationNumber.text(padNumber(o) + "/" + padNumber(n));
});

// $(document).ready(function() {
//     var $slickCarousel = $('.slick-carousel');
//     var totalSlidesCarousel = $slickCarousel.find('.slide-content').length;
//     var currentIndexCarousel = 1;

//     $slickCarousel.slick({
//         arrows: true,
//         rows: 1,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerPadding: "0px",
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 900,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 550,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: false
//                 }
//             }
//         ]
//     }).on('afterChange', function(event, slick, currentSlide) {
//         currentIndexCarousel = currentSlide + 1;
//         $('.slick-carousel-number').text(currentIndexCarousel + '/' + totalSlidesCarousel);
//     });

//     // Initialize the display of the slide number
//     $('.slick-carousel-number').text(currentIndexCarousel + '/' + totalSlidesCarousel);
// });

$(document).ready(function () {
  // Add accessible names to icon-only and carousel links for compliance
  $("a.nav-link:has(i.fa-home)").attr("aria-label", "Home");
  $(".carousel-control-prev").attr("aria-label", "Previous");
  $(".carousel-control-next").attr("aria-label", "Next");

  // Lazy load Google Calendar iframe when the modal is opened to avoid third-party cookies on page load
  $("#niceZoomIn").on("show.bs.modal", function () {
    var $iframe = $(this).find("iframe");
    if ($iframe.attr("data-src") && !$iframe.attr("src")) {
      $iframe.attr("src", $iframe.attr("data-src"));
    }
  });
});