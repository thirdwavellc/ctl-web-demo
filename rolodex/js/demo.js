var CoolScroll = (function( $ ) {
  
  var init = function() {
    pin_sections();
  },

  pin_sections = function() {

	TweenLite.defaultEase = Linear.easeNone;
	var controller = new ScrollMagic.Controller();

	$(".section").each(function(i) {
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

}

return {
	init: init
};

})( jQuery );

jQuery(document).on( 'load', CoolScroll.init );
