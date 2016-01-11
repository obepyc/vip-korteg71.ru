$(document).ready(function() {
	var doc = document.getElementById("sub_gal");
	for(var i = 2; i < imgs.length; i++){
		doc.innerHTML += '<div class="col-md-4 col-sm-4 col-xs-4"><img src="'+ imgs[i] +'" alt=""></div>';
	}
	doc.innerHTML += '<div class="clr"></div>';
	$(".main_gal img").attr('src', imgs[2]);
	$("#sub_gal img").on("click", function(){
		$(".main_gal img").attr('src', $(this).attr('src'));
		console.log($(this).attr('src'));
	});

	// Плавная прокрутка

	$('a[href^="#"], a[href^="."]').click( function(){ 
	    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false;
    });

    // scroll

    $("#sub_gal").niceScroll({cursorcolor:"#FFA73A"});
    $(".all_comments").niceScroll({cursorcolor:"#FFA73A"});
    $("html").niceScroll({cursorcolor:"#668f6d", cursorwidth:15});

    // form

    $(".cont_form").on("submit", function(){

    	alert("Форма на данный момент отключена");

    	return false;
    });
});