jQuery(function(){
  // google-code-prettify
  jQuery("pre").addClass("prettyprint");
  
  
  // Menu
  function toggleMenu() {
    var nav = jQuery("#nav");
    var toggle = jQuery("#toggle");
    var ul = jQuery("#nav ul");
    
    var navHeight = nav.outerHeight();
    jQuery(window).on("resize", function(){
      var navHeight = nav.outerHeight();
    });
    
    var flag = "close";
    var speed = 600;
    var easing = "easeInOutCubic";
    toggle.on("click", function(){
      var ulHeight = ul.outerHeight(true);
      
      if (flag === "close") {
        nav.stop().animate({ "height" : navHeight + ulHeight }, speed, easing);
        flag = "open";
        toggle.removeClass("close").addClass("open");
      }
      else if (flag === "open") {
        nav.stop().animate({ "height" : navHeight }, speed, easing);
				setTimeout(function(){
					nav.css({"height" : ""});
				}, speed);
        flag = "close";
        toggle.removeClass("open").addClass("close");
      }
    });
    
    jQuery(window).on("resize", function(){
      nav.css({"height" : ""});
      flag = "close";
      toggle.removeClass("open").addClass("close");
    });
  };
  toggleMenu();
  
  
	// Back to Top
	function backTop() {
		var _backTop = jQuery("#backtop span");
		var _speed = 1500;
		var _easing = "easeInOutCubic";
	
		_backTop.on("click", function(){
			jQuery("html, body").stop().animate({ scrollTop : 0 }, _speed, _easing);
		});
	};
	backTop();
});
