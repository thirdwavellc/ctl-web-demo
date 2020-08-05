jQuery(function($) {


  initFullSlide();

function initFullSlide() {
  var $fullSlide = $(".ctl-slider");
  var $sections = $(".section");
  $sections.css({ height: $(window).height() - 60 });
  var slickIsChanging = false;
  var slideIndex = 0;
  var slideCount = $(".section").length;

  function mouseWheel($slider) {
    $fullSlide.on(
      "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
      {
        $slider: $slider
      },
      mouseWheelHandler
    );
  }

  function mouseWheelHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    var $slideContainer = $(this);
    if (!$slideContainer.hasClass("animating") && slickIsChanging == false) {
      $slideContainer.addClass("animating");
      var $slider = event.data.$slider;
      var delta = event.originalEvent.deltaY;
      if (delta > 0) {
        $slider.slick("slickNext");
        
      } else {
        $slider.slick("slickPrev");
        
      }

      setTimeout(function() {
        $slideContainer.removeClass("animating");
      }, 2000);
    }
  }

  $fullSlide
    .on("init", function() {
      mouseWheel($fullSlide);
    })
    .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      //console.log("change start");
      slickIsChanging = true;
       $('.section.second .text, .section.fourth .text, .section.sixth .text').removeClass('animate__animated animate__fadeInLeft');
       $('.section.third .text, .section.fifth .text ').removeClass('animate__animated animate__fadeInRight');


    })
    .on("afterChange", function(event, slick, currentSlide) {
      //console.log("change done");
      slickIsChanging = false;
    })

    .on("afterChange", function(event, slick, nextSlide) {
      //console.log("change done");
      slickIsChanging = false;
        $('.section.second .text, .section.fourth .text, .section.sixth .text').addClass('animate__animated animate__fadeInLeft');
        $('.section.third .text, .section.fifth .text ').addClass('animate__animated animate__fadeInRight');
    })

    
    .slick({
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      draggable: true,
      dots: true,
      centerPadding: 0,
      placeholders:false
      // variableWidth:true,
    });

  //   $fullSlide.on('wheel', (function(e) {
  //   e.preventDefault();

  //   if (e.originalEvent.deltaY < 0) {
  //     $(this).slick('slickNext');
  //   } else {
  //     $(this).slick('slickPrev');
  //   }
  // }));


}





});
