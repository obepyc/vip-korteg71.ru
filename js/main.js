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
});