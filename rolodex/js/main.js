jQuery(function($) {
var controller = new ScrollMagic.Controller();

$('.hektor').each(function() {

var tween = TweenMax.to($(this), .4, {transform: 'scale(1.2)', ease: Linear.easeNone,});


var scene = new ScrollMagic.Scene({
  triggerElement: this,
  duration: "300"
})
.setTween(tween)
.reverse(true)
.addTo(controller);

});

});


// jQuery(function($) {


// 	$('section').each(function(){
// 		var currentCard = this;
// 		var controller = new ScrollMagic.Controller();

// 		tween = TweenMax.fromTo([currentCard, currentCard], .5, {opacity: 0, x: -200}, {opacity: 1, x: 0});

// 		new ScrollMagic.Scene({
// 			triggerElement: currentCard,
// 		})
// 		.setTween(tween)
// 		.on( 'enter', function( e ){
//       $('.images img').addClass('visible').fadeIn( 'fast', function() {
//         $( this ).css( 'opacity', '1' );
//       });
//     })
// 		.addTo(controller);
// 	});

// });
