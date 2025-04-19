jQuery(document).ready(function(){

  jQuery('.projectSlider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    jQuery('.blogSlider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  //   Trusted by
  jQuery('.marquee').marquee({

    // Set to false if you want to use jQuery animate method
    allowCss3Support: true,
  
    // CSS3 easing function
    css3easing: 'linear',
  
    // Requires jQuery easing plugin.
    easing: 'linear',
  
    // Time to wait before starting the animation
    delayBeforeStart: 1000,
  
    // 'left', 'right', 'up' or 'down'
    direction: 'left',
  
    // Should the marquee be duplicated to show an effect of continues flow
    duplicated: 1,
  
    // number of duplicates to create, default is 1
    duplicateCount: true,
  
    // Duration of the animation
    duration: 18000,
  
    // Space in pixels between the tickers
    gap: 0,
  
    // On cycle pause the marquee
    pauseOnCycle: false,
  
    // Pause on hover
    pauseOnHover: false,
  
    // The marquee is visible initially positioned next to the border towards it will be moving
    startVisible: true
    
  });
              
  // Page Loader

// Custom ease
const easeExpoOut = "cubic-bezier(0.33, 1, 0.68, 1)";

// White overlay animation
gsap.to(".whiteOverlay", {
  top: 0,
  height: 0,
  delay: 0.6, // 1600ms
  duration: 0.5, // 1000ms
  ease: easeExpoOut
});

// Blue overlay animation
gsap.to(".blueOverlay", {
  top: 0,
  height: 0,
  delay: 0.8, // 1800ms
  duration: 0.5, // 1000ms
  ease: easeExpoOut
});
//
// Heading animation
gsap.to(".heroBanner h3", {
  top: 0,
  delay: 1.2, // 1600ms
  duration: 0.5, // 1000ms
  ease: easeExpoOut
});

gsap.to(".heroBanner .heroVideo", {
  top: 0,
  delay: 1.5, // 1600ms
  duration: 0.5, // 1000ms
  ease: easeExpoOut
});

// Banner animation
gsap.to(".bannerRight", {
  width: "100%",
  delay: 2, // 2000ms
  duration: 1, // 1000ms
  ease: easeExpoOut
});

setTimeout(function () {
  jQuery('.loading').remove();
}, 2000);

});