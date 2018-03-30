"use strict";

$(document).ready(function(){
	
	$('.sidenav').sidenav();
	//$(".dropdown-trigger").dropdown();
	
	var windowWidth = $(window).width();

	/* $( window).change(function() {
	  var windowWidth = $(window).width();
	  console.log(windowWidth);
	}); */
	
	
	// desktop 
	$(document).on("scroll", autoScrollFloatDiv);	
    // mobile
	//$(document).on("scroll", mobileautoScrollFloatDiv);	
	
	var isClick = true;
	
	
   // when a learn php
/*		$("#mail_form").click(function(evt){
		evt.preventDefault();		


		
		runOverwriteScriptPersonalProject();

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
	 */

     $( window ).resize(function() {
  
     });	 
	 
	// this is the mobile part
	 // this is full screen
	//floatDivPortfolio();
    //runOverwriteScriptPortfolio();
	//createAnchor();
	//anchorListenerforfloatDiv()
	// desktop 
	$("#btnSelection").click(btnSelectionAction);
	
   
	
		

   	
	$("#links_to_conten a" ).css( "text-decoration", "none" );
			
   // $( document ).ajaxComplete(addGit);    	
	

});





function getporfolio(){
	$(".main_content article").remove();

			
		 //  where th json is coming from 
			var url = "http://ssandoval114.com/jsonFiles/porfolio.json";
	       // function to get json 
			$.getJSON(url, function(data){
				var html = "";   // item is the the name of the file the contain json
				$.each(data.porfolio, function(i, porfolio){
				// adding html elements do display information the file contain
				   
	                html +=  porfolio.description ;
					
							
				});
				
				
						$(".main_content").html(html); // setting element and file data to div
				
			});
			
			
			
			
}

function getpersonProject(){
	$(".main_content article").remove();

			
		 //  where th json is coming from 
			var url = "http://ssandoval114.com/jsonFiles/personalproject.json";
	       // function to get json 
			$.getJSON(url, function(data){
				var html = "";   // item is the the name of the file the contain json
				$.each(data.personalproject, function(i, personalproject){
				// adding html elements do display information the file contain
				   
	                html +=  personalproject.description ;
					console.log("inside person project fun");
							
				});
				
				
						$(".main_content").html(html); // setting element and file data to div
				
			});
 
}
		

function setAnchorCss(){

	$("article h2").each(function( index ) {
	 	// $("#links_to_conten a" ).css({ "color":"#cb86ff", "font-weight": "bold"});
     var thish2 = index + 1;

     var browsertop = $(window).scrollTop();   
	 browsertop =  parseInt(browsertop + 50);
	/*  var h2next = parseInt( $("#heading" + num).position().top);
	 var h2this = parseInt($("#heading" + index).position().top);  */
   //console.log(browsertop);
	 var totalofTag = $("article h2").length;
/* 		// range from 2 - 7
	]if (moonOrbit > 1 && moonOrbit < 8)  */
	 
	if(totalofTag == thish2){
		
		if (browsertop > parseInt($(this).position().top)){
			parseInt($(this).position().top +" " + "index"+ index);
		    $("#links_to_conten a" ).css({ "color":"#cb86ff", "font-weight": "bold"});
			$("#links_to_conten a" ).not("#aheading" + totalofTag).css({ "color": "#4183c4", "font-weight": "normal"}); 	
		}
	}else{
		//console.log(thish2);
        var num = thish2 + 1;
		//console.log(num);
	 var h2next = parseInt( $("#heading" + num).position().top);
	 var h2this = parseInt($(this).position().top);
	 if(browsertop > h2this && browsertop < h2next){
		// console.log("#aheading" + h2this);
		 $("#links_to_conten a" ).css({ "color":"#cb86ff", "font-weight": "bold"});
		 
			$("#links_to_conten a" ).not("#aheading" + thish2).css({ "color": "#4183c4", "font-weight": "normal"}); 	
	 }
	 
	}
	
	});
}

function btnSelectionAction(){
	var value = $("#btnSelection").attr("value");
	
	if( value == "see personal projects"){
		removeTitleandAnchor();
		$("#btnSelection").attr("value","see portfolio");
		getpersonProject();
	    floatDivPersonalProjects();
			
	}else if(value == "see portfolio"){
		removeTitleandAnchor();
		
		$("#btnSelection").attr("value","see personal projects");
		getporfolio();
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
		
		// get the id/ selector of the selected h2 element from the <a> tag
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
function createAnchor(){
	
	$("article h2").each(function( index ) {
	      $("#links_to_conten").append("<a>"+ $(this).text()+"</a>")
   });
	
// insert break after each anchor
	$( "#links_to_conten a" ).each(function() {
          $("<br>").insertAfter( this )
    });
	
	
	

  
  $("#links_to_conten a").each(function( index ) {
	  var num = index + 1;
	      $(this).attr("href","#heading" + num);
		  $(this).attr("id","aheading" + num);
		  /* if(index == 4){
			    $(this).attr("href","#heading" +1);
		  } */
   });
}
function floatDivPersonalProjects(){
	$("#title").append("<h2>Personal Projects</h2><p>This part a will show the personal projects I done outside of college.</p>");
	$("#links_to_conten").append("<br>"); // add break to aside
    
}

function floatDivPortfolio(){
	
	$("#title").append("<h2>Portfolio</h2><p>The purpose of my portfolio is to summarize my programming knowledge, also show some of my college projects</p>");
	$("#links_to_conten").append("<br>"); // add break to aside
}
function setH2Title(){

	$("article h2").each(function( index ) {
	 	
     var thish2 = index + 1;

     var browsertop = $(window).scrollTop();   
	 browsertop =  parseInt(browsertop + 50);
	/*  var h2next = parseInt( $("#heading" + num).position().top);
	 var h2this = parseInt($("#heading" + index).position().top);  */
   //console.log(browsertop);
	 var totalofTag = $("article h2").length;
/* 		// range from 2 - 7
	]if (moonOrbit > 1 && moonOrbit < 8)  */
	if(totalofTag == thish2){
		
		if (browsertop > parseInt($(this).position().top)){
			$("#title p").remove();
          $("#title").append("<p>"+$(this).text()+"</p>");
		}
	}else{
		//console.log(thish2);
        var num = thish2 + 1;
		//console.log(num);
	 var h2next = parseInt( $("#heading" + num).position().top);
	 var h2this = parseInt($(this).position().top);
	 if(browsertop > h2this && browsertop < h2next){
		$("#title p").remove();
          $("#title").append("<p>"+$(this).text()+"</p>");
	 }
	 
	}
	
	});
}

function mobileautoScrollFloatDiv(){
		// converting top part of the file we are scrolling to int
	var num = parseInt($(".main_content").position().top);
	//num = num + 1000;
	//console.log(num);
	console.log($(this).scrollTop());
    if($(this).scrollTop()  <  num ){
		

	   $("#floatdiv").css("top", num);
    }else {
		//var introHeight = parseInt($(".main_content").position().top);
//		console.log(introHeight);
		//introHeight = (introHeight * 2) - 100;
		var num = parseInt($(this).scrollTop());
		//num = num - introHeight;
		//console.log(num);
		$("#floatdiv").css("top", num);
	
	}
   			
	setH2Title();
}

function autoScrollFloatDiv(){
		$("#links_to_conten a" ).css({ "color":"#4183c4", "font-weight": "bold"});
	
		var num = parseInt($(this).scrollTop());
		
		
		$("#floatdiv").css("top", num);
	
	
   		
	setAnchorCss();
}
