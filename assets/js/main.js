$(document).ready(function () {
    let $slider = $('.projectSlider');
  
    $slider.slick({
      centerMode: true,
      variableWidth: true,
      arrows: true,
      slidesToShow: 4, // With variableWidth, this is ignored
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            variableWidth: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            variableWidth: true,
            slidesToShow: 3
          }
        }
      ]
    });
  
    // Force re-initialization if you have images that load after DOM ready
    $slider.slick('setPosition');
  });