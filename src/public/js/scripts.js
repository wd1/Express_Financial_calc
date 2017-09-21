// PRELOADER
//===============================================================
$(window).on('load', function () {
	"use strict";
	var $preloader = $('#page_preloader'),
		$spinner   = $preloader.find('.loader');
	$spinner.fadeOut();
	$preloader.delay(100).fadeOut('slow');

	var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			mobile:       false
		});
	wow.init();

});



jQuery(document).ready(function(){
	"use strict";

	var $event_class, $scrl_top, $win_w;


	// ANCHOR
	//===============================================================
	$(document).on("click",".anchor", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 260}, 1500);
	});


	// DESCTOP EVENTS
	//===============================================================
	$(document).ready(doc_ready);
	$(window).on("load ready", doc_ready);
	function doc_ready(){

		header_scrolly();
		//cells_h();
		divide_cells();
		tabs();
		table_responsiv();

		results_table_h();
	}
	$(window).on("scroll", function (){
		header_scrolly();
	});
	$(window).on("resize", function (){
		header_scrolly();
		table_responsiv();

		results_table_h();
	});


	// SCROLL TOP
	//===============================================================
	$('.btn_scrollup').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


	// ACCORDION
	//===============================================================
	$('.accordion > li').each(function(){
		if($(this).hasClass("active")){
			$(this).children(".acc_body").fadeIn(300);
		}
	});
	$('.accordion > li > span').on("click", function(){
		//$(this).parent().toggleClass('active')/*.siblings().removeClass('active')*/;
		$(this).parent().toggleClass('active');
		$(this).next('.acc_body').slideToggle(300);
		return false;
	});


	// HEADER BTNS EVENTS
	//===============================================================
	var h_clicked = $(
		".btn_menu_vis, " +
		".btn_user_tool_vis, " +
		".btn_filters_vis"
	);

	h_clicked.on("click", function () {
		//close_all_popups();
		$event_class = $(this).attr("class");

		if (!$(this).hasClass('active')) {
			$(this).addClass("active").parents(".main_header").find(".active:not([class*=" + $event_class + "]):not(.main_menu_parent *)").removeClass("active");
			filter_vis();
		}
		else if ($(this).hasClass('active')) {
			$(this).removeClass("active");
			filter_vis();
		}
	});

	function filter_vis(){
		if($(".btn_filters_vis").hasClass("active")){
			$(".filters_box").addClass("active");
		}else{
			$(".filters_box").removeClass("active");
		}
	}

	$("#tabe_filters_apply").on("click", function () {
		$(".header_right_tool").removeClass("active");
		filter_vis();
	});


	// TABLE CELLS HEIGHT
	//===============================================================
	/*
	var cell_h_b = 0, cell_h_a;

	function cells_h(){
		$(".tabs_content > div").each(function(){
			cell_h_a = $(this).height();
			if(cell_h_a >= cell_h_b){
				cell_h_b = cell_h_a;
			}
		});
		$(".tabs_content .tabs_box > div > div").css({height:cell_h_b+"px"});

	}
	*/


	function divide_cells() {
		var cells_n = 0;

		$(".tabs_content > div:first-child > .tabs_box > div:visible").each(function () {
			cells_n = cells_n + 1;
		});
		cells_n = 100 / cells_n + "%";
		$(".tabs_content > div > .tabs_box > div").css({width: cells_n});
	}

	function  table_responsiv() {
		if($(window).width() <= 1540){
			$('.tabs_content [class*="tab_"]:not(:first-child)').fadeOut(100);
			$(".responsive_table").addClass("mobile_table");

			if(!$(".tabs_list > div").hasClass('active')){
				$(".tabs_list > div:first-child").addClass('active');
			}

			divide_cells();
			tabs();
		}
		else{
			$('.tabs_content [class*="tab_"]').fadeIn(100);
			$(".responsive_table").removeClass("mobile_table");
			$(".responsive_table *").removeClass("active");
			divide_cells();
			tabs();
		}
	}


	// TABS
	//===============================================================
	var $tabIndex=0;

	$(".responsive_table .tabs_list > div").on("click", function () {
		if($(".responsive_table").hasClass("mobile_table")){
			$(this).addClass("active").siblings().removeClass("active");
			tabs();
			divide_cells();
		}
	});
	function tabs() {
		$tabIndex = $(".tabs_list > div.active").index();
		if ($(".tabs_list > div").hasClass('active')) {

			$(".tabs_content > div").each(function(){
				$(this).find("[class*='tab_']").eq($tabIndex).addClass('active').siblings().removeClass("active");
			});

		}
		divide_cells();

	}


	// HEADER SCROLLY
	//===============================================================
	function header_scrolly(){
		$scrl_top = $(window).scrollTop();
		$win_w = $(window).width();

		if($scrl_top >= 280 || $win_w <= 960){
			$(".main_header").addClass("header_fix");
			$(".btn_scrollup").fadeIn(600);
		}
		else{
			$(".main_header").removeClass("header_fix").find(".active").removeClass("active");
		}
	}


	// HELP BUTTON
	//===============================================================
	$(".btn_help").on("click", help_close);

	function  help_close() {
		if ($(this).hasClass("active")) {
			$(".btn_help.active").removeClass("active");
		}
		else {
			$(".btn_help.active").removeClass("active");
			$(this).addClass("active");
		}
	}


	// TABLE BOX MIN-HEIGHT
	//===============================================================
	var $results_mh;
	function results_table_h(){
		$results_mh = $(".filters_box form").height();

		$(".responsive_table, .no_table_text").css({
			minHeight: $results_mh+"px"
		});


	}


	// TYPE FILE
	//===============================================================
	$( function ( document, window, index )
	{
		var inputs = document.querySelectorAll( '.inputfile' );
		Array.prototype.forEach.call( inputs, function( input )
		{
			var label	 = input.nextElementSibling,
				labelVal = label.innerHTML;

			input.addEventListener( 'change', function( e )
			{
				var fileName = '';
				if( this.files && this.files.length > 1 )
					fileName = ( this.getAttribute( 'data_multiple_caption' ) || '' ).replace( '{count}', this.files.length );
				else
					fileName = e.target.value.split( '\\' ).pop();

				if( fileName )
					label.querySelector( 'span' ).innerHTML = fileName;
				else
					label.innerHTML = labelVal;
			});

			// Firefox bug fix
			input.addEventListener( 'focus', function(){ input.classList.add( 'has_focus' ); });
			input.addEventListener( 'blur', function(){ input.classList.remove( 'has_focus' ); });
		});
	}( document, window, 0 ));


	// CLICK MILK
	//===============================================================
	jQuery(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".main_header");
			if (!div.is(e.target)
				&& div.has(e.target).length === 0 ) {
				div.find('[class*="active"]').removeClass("active");
			}
		});
	});

	jQuery(function ($) {
		$(document).mouseup(function (c) {

			var div = $(".drop_down_box");
			if (!div.is(c.target)
				&& div.has(c.target).length === 0 ) {
				div.removeClass("active");
			}
		});

	});

	// FORMS - PLUS\MINUS NUMBER PRODUCT
	//===============================================================
	var number;
	$('.quantity_box span').click(function() {
		number = $(this).prevAll('input').val();
		if($(this).hasClass('number_minus') && number>1){
			number--;
		}
		else if($(this).hasClass('number_plus')  && number<=999){
			number++;
		}
		$(this).prevAll('input').val(number);
	});


	// CHECKED NUMBER
	//===============================================================





/*
	var chnumb=0;
	$(".drop_down_box").on("change","input[type='checkbox']", function () {
		$(this).parents(".drop_down_box").children("input:checked").each(function(){
			chnumb+=chnumb;
		});
		alert(chnumb);
		$(this).parents(".drop_down_box").find("drop_down_head").children("div>span").text(chnumb);
	});
*/


	// FORMS VALIDATE
	//===============================================================

	// LOGIN
	$(".form_login").validate({
		rules:{
			email:{
				required: true,
				email: true
			},
			password:{
				required: true
			}
		},
		messages:{
			email:{
				required: "This field is required.",
				email: "Wrong format."
			},
			password:{
				required: "This field can not be empty."
			}
		}
	});

	$(".form_signup").validate({
		rules:{
			firstname:{
				required: true
			},
			lastname:{
				required: true
			},
			email:{
				required: true,
				email: true
			},
			jobfunction:{
				required: true
			},
			password:{
				required: true,
				minlength: 6
			},
			password2:{
				required: true,
				equalTo: "#password"
			}

		},
		messages:{
			firstname:{
				required: "This field is required."
			},
			lastname:{
				required: "This field is required."
			},
			email:{
				required: "This field is required.",
				email: "Wrong format."
			},
			jobfunction:{
				required: "Select one of the items."
			},
			password:{
				required: "This field is required.",
				minlength: "Too short password."
			},
			password2:{
				required: "Please confirm the password.",
				equalTo: "Passwords do not match"
			}
		}
	});



	$(".form_reset_password_email").validate({
		rules:{
			email:{
				required: true,
				email: true,
				minlength: 4
			}
		},
		messages: {
			email: {
				required: "Please enter your email.",
				email: "Wrong format.",
				minlength: "Too short email."
			}
		}
	});

	$(".form_reset_password").validate({
		rules:{
			password:{
				required: true,
				minlength: 6
			},
			password2:{
				required: true,
				equalTo: "#password"
			}

		},
		messages:{
			password:{
				required: "Please enter a new password.",
				minlength: "Too short password."
			},
			password2:{
				required: "Please confirm the password.",
				equalTo: "Passwords do not match"
			}
		}
	});

	$('.cmn-toggle-yes-no').click(function(e) {
		var checkval = this.checked ? 1 : 0;
		var id = this.id.substring(11);
		$.ajax({
        type: "POST",
        url: '/admin/users',
        data: {id, checkval},
        success: function(data){
          console.log(data.data);
        }
    });
	});




});// jQuery ready - end

/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
