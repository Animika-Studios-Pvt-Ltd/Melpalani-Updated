/* ----------------------------- Animation On Scroll (AOS) Initialization ----------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

/* ----------------------------- Slick Carousel Setup (Variables & Slide Counter Events) ----------------------------- */
var $slider = $(".client-slider"),
  $paginationNumber = $(".pagination-number");

var $templesSlider = $(".temples-slider"),
  $templesPaginationNumber = $(".temples-pagination-number");

function padNumber(e) {
  return e < 10 ? "0" + e : e;
}

$slider.on("init reInit afterChange", function (e, t, i) {
  var o = t.currentSlide + 1,
    n = t.slideCount;
  $paginationNumber.text(padNumber(o) + "/" + padNumber(n));
});

$templesSlider.on("init reInit afterChange", function (e, t, i) {
  var o = t.currentSlide + 1,
    n = t.slideCount;
  $templesPaginationNumber.text(padNumber(o) + "/" + padNumber(n));
});

/* ----------------------------- Slick Carousel Slider Initialization ----------------------------- */
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

$templesSlider.slick({
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

/* ----------------------------- ARIA Accessibility Compliances ----------------------------- */
$(".client-slider").each(function () {
  var $track = $(this).find(".slick-track");
  $track.attr("aria-label", "Events");
});

$(".temples-slider").each(function () {
  var $track = $(this).find(".slick-track");
  $track.attr("aria-label", "Temples");
});

/* ----------------------------- Page Navigation & Google Calendar Modals ----------------------------- */
$(document).ready(function () {
  $("a.nav-link:has(i.fa-home)").attr("aria-label", "Home");
  $(".carousel-control-prev").attr("aria-label", "Previous");
  $(".carousel-control-next").attr("aria-label", "Next");

  $("#niceZoomIn").on("show.bs.modal", function () {
    var $iframe = $(this).find("iframe");
    if ($iframe.attr("data-src") && !$iframe.attr("src")) {
      $iframe.attr("src", $iframe.attr("data-src"));
    }
  });
});