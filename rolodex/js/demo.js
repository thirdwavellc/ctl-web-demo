var CoolScroll = (function( $ ) {
  var init = function() {
    pin_sections();
    pin_images();
  },

  pin_sections = function() {

	TweenLite.defaultEase = Linear.easeNone;
	var controller = new ScrollMagic.Controller();

	$(".section").each(function(i) {
		 // $(this).prev().find('.box').scrollTop(0);
	  var target = $(this).find(".box");
	  var tl = new TimelineMax();
	 	
	 	new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: 0.2,
	    duration: '100%'
	  })
	    .setPin(this)
	    .setTween(tl)
	    // .addIndicators()
	    .addTo(controller);
	});

},

pin_images = function() {
	// var controller = new ScrollMagic.Controller();
	// 	tween = TweenMax.to(".img", .5, {position: "fixed"});
	// 	new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		duration: '100%'
	// 	})
	// 	.setTween(tween)
	// 	.addTo(controller);
}

return {
	init: init
};
})( jQuery );

jQuery( window ).on( 'load', CoolScroll.init );
