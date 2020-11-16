$(document).ready(function(){

	// To strike off an activity when user marks as completed
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});

	//To remove or delete an activity from todo-list
	$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		//To stop executing ul Click function which strikes off as completed 
		event.stopPropagation();
	});

	//Adding new activity to the list
	$("#new").keypress(function(event){
		if(event.which === 13){
			var todoText = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
		}
	});

	//To show and hide input text field
	$(".fa-plus").click(function(){
		$("#new").fadeToggle();
	});
});

