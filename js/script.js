/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

 (function($) {

	"use strict";

	// ------------------------------------------------------------------------------ //
	// Overlay Menu Navigation
	// ------------------------------------------------------------------------------ //
	var overlayMenu = function () {

		if(!$('.nav-overlay').length) {
		  return false;
		}

		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
		  body = document.querySelector('body');
		  menu = document.querySelector('.menu-btn');
		  menuItems = document.querySelectorAll('.nav__list-item');
		  applyListeners();
		};
		var applyListeners = function applyListeners() {
		  menu.addEventListener('click', function () {
		    return toggleClass(body, 'nav-active');
		  });
		};
		var toggleClass = function toggleClass(element, stringClass) {
		  if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}
 
	// init jarallax parallax
	  var initJarallax = function() {
	    jarallax(document.querySelectorAll(".jarallax"));

	    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
	      keepImg: true,
	    });
	  }


	// init Chocolat light box
	var initChocolat = function() {
	Chocolat(document.querySelectorAll('.image-link'), {
	    imageSize: 'contain',
	    loop: true,
		})
	}

	$(document).ready(function () {

		overlayMenu();
		initChocolat();
		initJarallax();

		AOS.init({
			duration: 1200,
			once: true,
		})

		// slick sliders
		$('.testimonial-slider').slick({
		    arrows: true,
		    infinite: true,
		    speed: 500,
		    fade: true,
		    cssEase: 'none'
		});
	});
 
	// preloader
	$(window).load(function() {
		$("#overlayer").fadeOut("slow");
		$('body').addClass('loaded');
	})

})(jQuery);