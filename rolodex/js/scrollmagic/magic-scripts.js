// /**
//  * Magic Scroll Animations
//  *
//  * This pertains to the Partner Program page.
//  */

// var EnvPartnerScroll = (function( $ ) {

//   // Init function.
//   var init = function() {
//     pin_phone();
//     slide_ad();
//     slide_ad_pointer();
//     pin_pointer();
//     expand_pointer();
//     book_now_hover();
//     show_impressions();
//     show_numbers();
//     slide_phone_results();
//     show_results();
//     show_bars();
//     number_counter();
//     parallax_effect();
//   },

//   // Action functions.

//   pin_phone = function() {
//     // Pin Phone
//     var controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-1 p",
//       duration: 1800,
//     })
//     .setPin(".phone")
//     .addTo(controller);
//   },

//   slide_ad = function() {
//     // Slide Ad
//     var controller = new ScrollMagic.Controller(),
//       tween = TweenMax.to(".phone-ad", .6, {y: -210});

//     new ScrollMagic.Scene({
//       triggerElement: '.item-list .impressions',
//       ease: Linear.easeNone,
//       duration: 90
//     })
//     .setTween(tween)
//     .addTo(controller);
//   },

//   slide_ad_pointer = function() {
//     // Slide Ad pointer
//     var controller = new ScrollMagic.Controller(),
//       tween = TweenMax.to(".ad-pointer", .5, {y: -65});

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-1 h3",
//       ease: Linear.easeNone,
//       duration: 100
//     })
//     .setTween(tween)
//     .addTo(controller);
//   },



//   pin_pointer = function() {
//     // Pin pointer
//     var controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-1 p",
//       ease: Linear.easeNone,
//       duration: 800,

//     })
//     .setPin('.ad-pointer')
//     .addTo(controller);
//   },

//    expand_pointer = function() {
//     // Expand pointer
//     var controller = new ScrollMagic.Controller();
//     tween = TweenMax.to(".ad-pointer", .3, {transform: 'scale(1.5)', 'transform-origin': '-40px 125px'});


//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .impressions h3",
//       ease: Linear.easeNone,

//     })
//     .setTween(tween)
//     .addTo(controller);
//   },

//   book_now_hover = function() {
//     // Book Now Button Hover Action
//     var controller = new ScrollMagic.Controller(),
//       tween = TweenMax.to(".book-now", .2, {opacity: 1});

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-1 h3",
//       ease: Linear.easeNone,
//       duration: 100
//     })
//     .setTween(tween)
//     .addTo(controller);
//   },

//   show_impressions = function() {
//     // Show Impressions
//     var controller = new ScrollMagic.Controller(),
//       tween = TweenMax.to( '.impressions-background span', 1, {marginTop: '0'}),
//       $impress_count = $( '.impress-count' );

//     new ScrollMagic.Scene({
//       triggerElement: ".impressions",
//       ease: Linear.easeNone,
//       duration: 380,
//       offset: 20,
//       reverse: true
//     })
//     .on( 'progress', function( e ){
//       var pct = e.progress,
//         total = $impress_count.attr( 'data-count' ),
//         num = Math.ceil( total * pct );

//       $impress_count.text( num );
//     })
//     .on( 'enter', function( e ){
//       $('.phone-impressions').addClass('show').fadeIn( 'fast', function() {
//         $( this ).css( 'opacity', '1' );
//       });
//     })
//     .on( 'leave', function( e ){
//       if ( 'reverse' === e.scrollDirection.toLowerCase() ) {
//         $('.phone-impressions').removeClass('show').fadeOut( 'fast', function() {
//           $( this ).css( 'opacity', '0' );
//         });
//       }
//     }).on( 'update', function( e ) {
//       if ( e.scrollPos >= e.endPos ) {
//         var diff = e.scrollPos - e.endPos
//           $phone = $( '.phone-screen' ),
//           phone_top = $phone.offset().top - $(window).scrollTop(),
//           phone_left = $phone.offset().left,
//           $bg = $( '.impressions-background' );

//         if ( diff > 380 && $bg.data( 'orig-position' ) ) {
//           if ( 'fixed' === $bg.css( 'position' ) ) {
//             $bg.css( 'position', $bg.data( 'orig-position' ) )
//               .css( 'top', $bg.data( 'orig-top' ) )
//               .css( 'right', $bg.data( 'orig-right' ) )
//               .css( 'left', 'auto' );
//           }
//           return;
//         }

//         if ( 'fixed' !== $bg.css( 'position' ) ) {
//           $bg.data( 'orig-position', $bg.css( 'position' ) )
//             .data( 'orig-top', $bg.css( 'top' ) )
//             .data( 'orig-right', $bg.css( 'right' ) );
//         }

//         $bg.css( 'position', 'fixed' )
//           .css( 'top', phone_top )
//           .css( 'left', phone_left )
//           .css( 'right', 'auto' );

//         $( '.impressions-background span' ).css( 'bottom', '-' + ( diff * 1.15 ) + 'px' );
//       }
//     })
//     .setPin('.phone-impressions')
//     .setTween(tween)
//     .addTo(controller);
//   },

//   show_numbers = function() {
//     // Show Numbers
//     var controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//       triggerElement: '.item-list .item-3',
//     })
//     .setClassToggle('.phone-stats', 'show')
//     .addTo(controller);
//   },

//   slide_phone_results = function() {
//     // Slide in Phone Results basic


//     var controller = new ScrollMagic.Controller({ease: Linear.easeNone}),
//       tween = TweenMax.to(".phone-results-wrap", .5, {y: -400});

//     new ScrollMagic.Scene({
//       triggerElement: '.item-list .item-3',
//     })

//     .setTween(tween)
//     .addTo(controller);
//   },

//   show_results = function() {
//     // Show Results Premium
//     var $phone_stat = $( '.phone-stat' ),
//       $phone_stat1 = $( '.phone-stat1' ),
//       $phone_stat2 = $( '.phone-stat2' ),
//       $phone_stat3 = $( '.phone-stat3' ),

//       controller = new ScrollMagic.Controller(),
//       tween = TweenMax.to(".results-prem", .5, {opacity: 1});

//     new ScrollMagic.Scene({
//       triggerElement: '.item-list .item-4',
//       duration: 180,
//       reverse: true
//     })

//     .on( 'progress', function( e ){
//       var down = 'reverse' === e.scrollDirection.toLowerCase(),
//         pct = e.progress, // Only need 1 instance of progress pct.

//         max = parseInt( $phone_stat.attr( 'data-count' ), 10 ),
//         min = parseInt( $phone_stat.attr( 'data-reverse' ), 10 ),
//         max1 = parseInt( $phone_stat1.attr( 'data-count' ), 10 ),
//         min1 = parseInt( $phone_stat1.attr( 'data-reverse' ), 10 ),
//         max2 = parseFloat( $phone_stat2.attr( 'data-count' ) ), // Use float for stat2.
//         min2 = parseFloat( $phone_stat2.attr( 'data-reverse' ) ), // Use float for stat2.
//         max3 = parseInt( $phone_stat3.attr( 'data-count' ), 10 ),
//         min3 = parseInt( $phone_stat3.attr( 'data-reverse' ), 10 );

//       max2 = max2 * 100; // Convert float to whole number.
//       min2 = min2 * 100; // Convert float to whole number.

//       // Subtract the minimum so we can add it back later.
//       max -= min;
//       max1 -= min1;
//       max2 -= min2;
//       max3 -= min3;

//       var num = true === down ? Math.floor( max * pct ) : Math.ceil( max * pct ),
//         num1 = true === down ? Math.floor( max1 * pct ) : Math.ceil( max1 * pct ),
//         num2 = true === down ? Math.floor( max2 * pct ) : Math.ceil( max2 * pct ),
//         num3 = true === down ? Math.floor( max3 * pct ) : Math.ceil( max3 * pct );

//       // Add back the minimum so the values are never 0.
//       num += min;
//       num1 += min1;
//       num2 += min2;
//       num3 += min3;

//       num2 = num2 / 100; // Convert back to float.

//       // Update the text.
//       $phone_stat.text( num.toLocaleString('en') );
//       $phone_stat1.text( num1.toLocaleString('en') );
//       $phone_stat2.text( num2.toLocaleString('en') );
//       $phone_stat3.text( num3.toLocaleString('en') );
//     })

//     .setTween(tween)
//     .addTo(controller);



//   },

//   show_bars = function() {
//     var controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-4 h3",
//     })
//     .setClassToggle(".bar-1", "show")
//     .addTo(controller);

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-4 h3"
//     })
//     .setClassToggle(".bar-2", "show")
//     .addTo(controller);

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-4 h3"
//     })
//     .setClassToggle(".bar-3", "show")
//     .addTo(controller);

//     new ScrollMagic.Scene({
//       triggerElement: ".item-list .item-4 h3"
//     })
//     .setClassToggle(".bar-4", "show")
//     .addTo(controller);
//   },

//   number_counter = function() {
//     // Number Counter
//     var controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//       triggerElement: '.item-list .impressions',
//     })
//     .addTo(controller);
//   },

//   parallax_effect = function() {
//     // Parallax effect
//     var controller = new ScrollMagic.Controller({
//       globalSceneOptions: {
//         triggerHook: "onEnter",
//         duration: "200%"
//       }
//     });

//     new ScrollMagic.Scene({
//       triggerElement: "#parallax1"
//     })
//     .setTween("#parallax1 > div", {y: "-80%", ease: Linear.easeNone})
//     .addTo(controller);
//   };

//   return {
//     init: init
//   };
// })( jQuery );

// jQuery( window ).on( 'load', EnvPartnerScroll.init );





// // Other Animations 

// jQuery(function($) {

// // Rotate planes on scroll
//   $(window).scroll(function() {
//     var theplanes =$(window).scrollTop() * .0002;
//     $('.hero-planes').css({ transform: 'rotate(' + theplanes + 'rad)' });
//   });


// function premCounter() {
//   var row1 = document.getElementsByClassName('count-row1');

// function updateCounter() {
//   'use strict';
//   var height = document.documentElement.scrollHeight - window.innerHeight;
//   row1.textContent = 150 - document.documentElement.scrollTop / height * 150;
// }

// document.addEventListener('scroll', updateCounter);
// window.addEventListener('resize', updateCounter);
// }

// premCounter();



// });