$(document).ready(function(){

	// alert($(window).width());

	$("#menu li:nth-child(1)").slideDown(1500);
	$("#menu li:nth-child(2)").slideDown(2500);
	$("#menu li:nth-child(3)").slideDown(3500);
});

$(window).on('load', function () {
    $('#loading').hide();
})

function getAboutContent(){
	var getContent = $('#about_div').html();
	
	$('#left_div').animate({width:"0%"});
	$('#right_div').animate({width:"100%"});
	$(".overlay").css("opacity","1");
	$('#right_div').append(getContent);
	// setTimeout(function(){$('#right_div').html(getContent)},500);
		
}
function map_loading(){
	$("#map_loading").hide();
}

function getProjectsContent(){
	
	var getContent = $('#projects_div').html();
	$('#left_div').animate({width:"0%"});
	$('#right_div').animate({width:"100%"});
	$(".overlay").css("opacity","1");
	$('#right_div').append(getContent);
	// setTimeout(function(){$('#right_div').html(getContent)},500);
		
}

function getContactContent(){
	
	var getContent = $('#contact_div').html();
	$('#left_div').animate({width:"0%"});
	$('#right_div').animate({width:"100%"});
	$(".overlay").css("opacity","1");
	$('#right_div').append(getContent);
	// setTimeout(function(){$('#right_div').html(getContent)},500);
		
}

function closeContent() {
	$(".overlay").css("opacity","0.7");
	$('#left_div').animate({width:"100%"});
	$('#right_div').animate({width:"0%"});
	$('#right_div').html("");
}

