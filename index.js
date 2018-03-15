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
	
	floatDivPersonalProjects();
  runOverwriteScriptPortfolio();
	
	$("#btnSelection").click(btnSelectionAction);
	
   
	

   anchorListenerforfloatDiv();
	
		

});
function runOverwriteScriptPortfolio(){
	postscribe('#git1', '<script src=https://gist.github.com/salsando1/48cd2d6a84cee73b48c48ceb908d236d.js></script>');
	postscribe('#git2','<script src=https://gist.github.com/salsando1/ebf961bc4e95c5bbfe9c85e9b33dda6c.js></script>');
	postscribe('#git3','<script src=https://gist.github.com/salsando1/fe881e881d5fc96026637e44d9f49b25.js></script>');
	postscribe('#git4','<script src=https://gist.github.com/salsando1/3ba59c20b98d0dfac819a7219f47a90c.js></script>');
	postscribe('#git5','<script src=https://gist.github.com/salsando1/e0e594a08f22c9439e2fc83d02b4aa30.js></script>');
	postscribe('#git6','<script src=https://gist.github.com/salsando1/8591a574f10335ec2f0ce0eaba90b47a.js></script>');
	postscribe('#git7','<script src=https://gist.github.com/salsando1/13094b4213a61869ca9f9a7608af83e1.js></script>');
	postscribe('#git8','<script src=https://gist.github.com/salsando1/a9304043df1926c3edaaa4f314df1d7e.js></script>');
	postscribe('#git9','<script src=https://gist.github.com/salsando1/7652d6bda0087d0a2a52bcdae047dc7d.js></script>');
	postscribe('#git10','<script src=https://gist.github.com/salsando1/cc53d9e35aaa08d0f2c36bbc32db312f.js></script>');
	postscribe('#git11','<script src=https://gist.github.com/salsando1/9f53865775b03e58afeb6d1713d803c0.js></script>');
	postscribe('#git12','<script src=https://gist.github.com/salsando1/82fd86eb50b38f914046d9d7cce1605c.js></script>');
	postscribe('#git13','<script src=https://gist.github.com/salsando1/51773312d97600e5de279f7741c1b8d8.js></script>');
	postscribe('#git14','<script src=https://gist.github.com/salsando1/e7e1d06ab9523af4a9a7f5d539a87e7e.js></script>');
	postscribe('#git15','<script src=https://gist.github.com/salsando1/0fc02f433fe07264429eada0c8a130a4.js></script>');
	postscribe('#git16','<script src=https://gist.github.com/salsando1/432eed34dd1959bc1a557421a453301b.js></script>');
	postscribe('#git17','<script src=https://gist.github.com/salsando1/562187f46f56bf2eb8c200a096070ad5.js></script>');
	postscribe('#git18','<script src=https://gist.github.com/salsando1/6242a152e522792ca85c0fa49beafbbc.js></script>');
	postscribe('#git19','<script src=https://gist.github.com/salsando1/3347d56cf00ecbd3396020986c266f30.js></script>'); 
}
function getporfolio(){
	//$(".main_content article").remove();

			
		/* //  where th json is coming from 
			var url = "http://ssandoval114.com/jsonFiles/personalproject.json";
	// function to get json 
			$.getJSON(url, function(data){
				var html = "";   // item is the the name of the file the contain json
				$.each(data.personalprojects, function(i, personalprojects){
				// adding html elements do display information the file contain
				     $( ".main_content" ).load(function(){ 
	                html +=  personalprojects.description ;
					
							
				});
				
				
						//$(".main_content").html(html); // setting element and file data to div
						
			     //   postscribe(".main_content", html ); // Data returned
				
				
			
			});
			
			 
			*/
					
			runOverwriteScriptPortfolio();			
}

function btnSelectionAction(){
	var value = $("#btnSelection").attr("value");
	
	if( value == "see personal projects"){
		removeTitleandAnchor();
		
		$("#btnSelection").attr("value","see portfolio");
		floatDivPersonalProjects()
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
