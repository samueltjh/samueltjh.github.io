$(document).ready(function(){

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
              $('.navbar').fadeOut();
            } else {
              $('.navbar').fadeIn();
            }
        });
    });

});
