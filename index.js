"use strict";

$(document).ready(function(){
	
	
	
	
	
	$(document).on("scroll", autoScrollFloatDiv);	

	
	var isClick = true;
	
	$("#mail_form").click(function(evt){

		evt.preventDefault();	
	
       if(isClick == true){
			var enterButton = $('<input type="button" id="btnEnter" value="send"/>');
			var cancelButton = $('<input type="button" id="btnCancel" value="cancel"/>');
			var emailTextfield = $('<input id="txtEmail" value="enter email" type="text"/>');
			var messageTextfield = $('<textarea id="txtMessage" rows="9" cols="22">your message</textarea>');
			
			
			$("#email_form").append(emailTextfield);
			$("#email_form").append(messageTextfield);
			$("#email_form").append(enterButton);
			$("#email_form").append(cancelButton);
			emailTextfield.css("margin-left", "20px");
			emailTextfield.css("widht", "22px");
			emailTextfield.css("margin-top", "5px");
			messageTextfield.css("margin-left", "20px");
			messageTextfield.css("margin-top", "5px");
			messageTextfield.css("widht", "22px");
			enterButton.css("margin-left","20px");
			cancelButton.css("margin-left","40px");
			  isClick = false;		
	    }	
		
	   
		$("#btnCancel").click(function(evt){
		   $( "#btnEnter" ).remove();
		   $("#btnCancel").remove();
		   $("#txtEmail").remove();
		   $("#txtMessage").remove();
		   isClick = true;
	    });
			
	});
	floatDivPersonalProjects()
	
	$("#btnSelection").click(btnSelectionAction);
	
   
	

   anchorListenerforfloatDiv();
	
		

});

function btnSelectionAction(){
	var value = $("#btnSelection").attr("value");
	
	if( value == "see personal projects"){
		removeTitleandAnchor();
		
		$("#btnSelection").attr("value","see portfolio");
		floatDivPersonalProjects()
	}else if(value == "see portfolio"){
		removeTitleandAnchor();
		
		$("#btnSelection").attr("value","see personal projects");
		floatDivPortfolio();
	}
}
function removeTitleandAnchor(){
	$( "#title h2" ).remove();
		$( "#title p" ).remove();
		$( "#links_to_conten a" ).remove();
		$( "#links_to_conten br" ).remove();
}
function anchorListenerforfloatDiv(){
		$("#links_to_conten a").click (function(index) {
		if(index != 3 ){
		
		// get the id selector of the selected h2 element from the <a> tag
		var id = $(this).attr("href");
		
		// setting all the heading back to normal except the current want
		for(var i = 1; i < 5 ;++i){
			
		$("#heading" + i ).not(this).css({ "color": "black", "font-size": "120%" });
		
		}
        
		// change the styles for the selected heading
		$(id).css({ "color": "#f794f2", "font-size": "150%" });	
		}
		
	});
}

function floatDivPersonalProjects(){
	$("#title").append("<h2>Personal Projects</h2><p>This part a will show  the personal projects i done outside of college</p>");
	$("#links_to_conten").append("<br>"); // add break to aside
    
	$("article h2").each(function( index ) {
	      $("#links_to_conten").append("<a>"+ $(this).text()+"</a>")
   });
	
// insert break after each anchor
	$( "#links_to_conten a" ).each(function() {
          $("<br>").insertAfter( this )
    });
	
	
	
  $("#links_to_conten").append("<a>Back to top</a>"); // add anchor to aside
  
  $("#links_to_conten a").each(function( index ) {
	  var num = index + 1;
	      $(this).attr("href","#heading" + num);
		  
		  if(index == 4){
			    $(this).attr("href","#heading" +1);
		  }
   });
}

function floatDivPortfolio(){
	
	$("#title").append("<h2>Portfolio</h2><p>The purpose of my portfolio is to summarize my programming knowledge, also show some of my college projects</p>");
	$("#links_to_conten").append("<br>"); // add break to aside
    
	$("article h2").each(function( index ) {
	      $("#links_to_conten").append("<a>"+ $(this).text()+"</a>")
   });
	
// insert break after each anchor
	$( "#links_to_conten a" ).each(function() {
          $("<br>").insertAfter( this )
    });
	
	
	
  $("#links_to_conten").append("<a>Back to top</a>"); // add anchor to aside
  
  $("#links_to_conten a").each(function( index ) {
	  var num = index + 1;
	      $(this).attr("href","#heading" + num);
		  
		  if(index == 4){
			    $(this).attr("href","#heading" +1);
		  }
   });
}

function autoScrollFloatDiv(){
		
	// converting top part of the file we are scrolling to int
	var num = parseInt($(".main_content").position().top);
	//num = num + 1000;
	//console.log(num);
	//console.log($(this).scrollTop());
    if($(this).scrollTop()  <  num ){
		

	   $("#floatdiv").css("margin-top", 0);
    }else {
		var introHeight = parseInt($(".main_content").position().top);
		console.log(introHeight);
		//introHeight = (introHeight * 2) - 100;
		var num = parseInt($(this).scrollTop());
		num = num - introHeight;
		//console.log(num);
		$("#floatdiv").css("margin-top", num);
	
	}
		
	
}





	
	
	
