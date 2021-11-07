$(document).ready(function () {
  $(".lightSlider").lightSlider({
    pager: false,
    item: 4,
    slideMargin: 0,
    slideMove: 2,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 500,
    pauseOnHover: true,
    loop: true,
    auto: true,
    slideEndAnimation: true,
    pause: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          item: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          item: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });
  $("#profile_slider").lightSlider({
    pager: false,
    item: 4,
    slideMargin: 0,
    slideMove: 2,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 500,
    pauseOnHover: true,
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          item: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          item: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });
});
