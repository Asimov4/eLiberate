if(Meteor.isClient) {
	$(window).load(function(){
		$("#menu-toggle").on("click", function(e) {
			e.preventDefault();
			if($("#menu-toggle").hasClass("bt-menu-open")){
				$(this).removeClass("bt-menu-open").addClass("bt-menu-close");
				$("#sidebar-wrapper").removeClass("active");
			}else{
				$(this).removeClass("bt-menu-close").addClass("bt-menu-open");
				$("#sidebar-wrapper").addClass("active");
			}
		});

		$(".show-modal").on("click", function(){
			showModal(this);
		});

		$("#modal-nav .bt-modal-close").on("click", function() {
			$("#modal-nav").removeClass("active");
			$("#modal-nav").slideUp("fast", function() {
				$("#menu-toggle").show();
				$("#menu-toggle").removeClass("bt-menu-open").addClass("bt-menu-close");
			});
		});
	});

	isLoggedIn = function() {
		if(Meteor.user() != null)
		{
			return true;
		}

		return false;
	}

	showModal = function(e) {
		var modalView = $(e).attr("data-modal");
		$("article").hide();
		$("article#modal-"+modalView).show();
		if($("#modal-nav").is(":visible")){

		}else{
			$("#sidebar-wrapper").removeClass("active");
			// $("#modal-nav").slideDown("fast");
			$("#modal-nav").addClass("active");
			$("#menu-toggle").hide();
		}
	}
}
