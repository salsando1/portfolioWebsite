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
	
	// --------test---------	
    // add an h2 heading to the aside
	
	$("#links_to_conten").append("<p>The purpose of my portfolio is to summarize my programming knowledge.</p><h2>Portfolio</h2>");
	$("#links_to_conten").append("<br>"); // add break to aside
    $("#links_to_conten").append("<a>Back to top</a>"); // add anchor to aside
	// wrap the h2 text in the article in <a> tags
	$("article h2").wrapInner("<a></a>");

	// add ids to the new <a> tags
	/*  $("article a").each (function(index) {
		var id = "heading" + (index + 1);
		$(this).attr("id", id);
	    }); */
	
	// adding <a> elements
	    $("article a").attr("a",function (index){
			var id = "heading" + (index + 1);
		$(this).attr("id", id);
		});
	
	// clone the <a> tags in the article and insert them into the aside
	$("article a").clone().insertAfter($("#links_to_conten h2"));
   
	// remove the id attributes from the <a> tags in the aside
	$("#links_to_conten a").removeAttr("id");
	
	// add the href attributes to the <a> tags in the aside
	$("#links_to_conten a").attr("href", function(index) {
	// checking the for last <a></a>
		if(index == 4){
    // adding heading 1 to  href only <a>back to the top </a>
			var href = "#heading1";
		}else{
			var href = "#heading" + (index + 1);
		}

		return href;
    });

	// insert break after each anchor
	$( "#links_to_conten a" ).each(function() {
          $("<br>").insertAfter( this )
    });
 

	
	// change the CSS for the selected topic and move the TOC
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
		//--------end of test--- 
		

});

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





	
	
	
