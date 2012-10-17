var sm_menu_open = false;

$(function() {
	$(".sm-dropdown > a, .sm-dropdown > button").on("click touchstart", function(e) {
		$(".sm-dropdown-menu").css("display", "none");
		sm_menu_open = false;
		
		$(this).siblings(".sm-dropdown-menu").css("display", "block");
		if ($("#sm-navbar").css("position") == "absolute") {
			$("#sm_page_main").css("padding-top", (65 + $(this).siblings(".sm-dropdown-menu").height())+"px");
		}
		
		setTimeout(function() { sm_menu_open = true; }, 500);
		
		return false;
	});
	$(document).on("click touchstart", function(e) {
		if (sm_menu_open) {
			var menu = $(".sm-dropdown-menu");
			if (menu.has(e.target).length == 0) {
				$(".sm-dropdown-menu").css("display", "none");
				$("#sm_page_main").css("padding-top", 55);
				sm_menu_open = false;
			}
		}
	});
});

