jQuery(function($) {

	// AOS.init({
 //      offset: 400,
 //      duration: 600,
 //      easing: 'ease',
 //      delay: 0,
 //      disable: 'mobile'
 //    })

var controller = new ScrollMagic.Controller();

$(".section").each(function() {
  var tl = new TimelineMax();
  var img = $(this).find(".img");
  var txt = $(this).find(".text");

  tl.from(img, .15, { opacity: 0 });
  tl.to(img, .15, { opacity: 1 });

  // tl.from(txt, 0, { transform: 'scale(1)' });
  // tl.to(txt, 0, { transform: 'scale(1.1)' });

  var scene = new ScrollMagic.Scene({
    triggerElement: this
    })
    .setTween(tl)
    // .addIndicators()
    .addTo(controller);
});

 // var controller = new ScrollMagic.Controller(),
 //      tween = TweenMax.to(".section:nth-child(2) .img", .6, {y: -300});

 //    new ScrollMagic.Scene({
 //      triggerElement: '.section:nth-child(2)',
 //      ease: Linear.easeNone,
 //      duration: 300
 //    })
 //    .setTween(tween)
 //    .addTo(controller);

});