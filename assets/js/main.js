$(document).ready(function () {
    let $slider = $('.projectSlider');
  
    $slider.slick({
      centerMode: true,
      variableWidth: true,
      arrows: true,
      slidesToShow: 1, // required but overridden by variableWidth
      initialSlide: 2, // ensure centering works better
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            variableWidth: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            variableWidth: true,
            slidesToShow: 1
          }
        }
      ]
    });
  
    // Force re-initialization if you have images that load after DOM ready
    $slider.slick('setPosition');
  });