var CoolScroll = (function( $ ) {
  var init = function() {
  	pin_section();
    pin_lis();
    pin_image();
    active_txt();
  },

pin_section = function() {

	TweenLite.defaultEase = Linear.easeNone;
	var controller = new ScrollMagic.Controller();

	$(".section").each(function(i) {
		var target = $(this).find(".box");
	  var tls = new TimelineMax();
	 
	 	new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: 0.2,
	    offset: 60,
	    duration: 1
	    }).on( 'leave', function( e ){
        $('.img').toggleClass('release');
     })
	    .setPin(this)
	    .setTween(tls)
	    // .addIndicators()
	    .addTo(controller);
	});
},

  pin_lis = function() {

	TweenLite.defaultEase = Linear.easeNone;
	var controller = new ScrollMagic.Controller();

	$(".section li").each(function(i) {

	  var tl = new TimelineMax();
	  var img = $(this).find(".img");
	  var txt = $(this).find(".text");
	   tl.from(img, .1, { opacity: 0 });
     tl.to(img, .1, { opacity: 1 });
	 	
	 	new ScrollMagic.Scene({
	    triggerElement: this,
	    duration: 100,
	    offset: 65
	    })
	    .setTween(tl)
	    .addTo(controller);
	});
},

pin_image = function() {
$(".section li").each(function(i) {
$section = $('.section');

var $yposition = $section.offset().top;
console.log($yposition);

$new = $yposition;
$('.img').css('top', $new + 50);
});

},

active_txt = function() {
	// TweenLite.defaultEase = Linear.easeNone;
	// var controller = new ScrollMagic.Controller();

	// $('li', $('.section')).each(function(i) {

	//   var tl2 = new TimelineMax();
	//   var txt = $(this).find(".text");
	//   tl2.from(txt, .02, { color: 'black' });
 //    tl2.to(txt, .02, { color: 'blue' });

	//  	new ScrollMagic.Scene({
	//     triggerElement: this,
	//     duration: 100,
	//     offset: 60,
	//     reverse: true
	//    })
	 	
	//    .setTween(tl2)
	//    .addTo(controller);
	// });
}


$('.section ul').on('scroll', function() {
	var scrollTop = $(this).scrollTop();
	if (scrollTop + $(this).innerHeight() <= this.scrollHeight) {
		console.log('Top reached');
	}
});


return {
	init: init
};
})( jQuery );

jQuery( window ).on( 'load', CoolScroll.init );
