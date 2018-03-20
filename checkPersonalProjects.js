onmessage = function() {
	      var done1 = false;
		  var done2 = false;
		  var done3 = false;
		  var done4 = false;
		  var done5 = false;
		  var done6 = false;
		  var done7 = false;
		  var done8 = false;
		  var done9 = false;
		  var done10 = false;
		  var alldone = 0;
                while( 10 >= alldone){
					console.log(alldone + " what all done have");
					
					if($("#git1").length == 1){
						if(done1 == false){
					      postscribe('#git1','<script src=https://gist.github.com/salsando1/f11e1b814826fe2686b070057dfa774b.js></script>');
                           alldone = alldone + 1;						
						   done1 = true;
						}
						console.log("inside of git1");
                    }
					
					if($("#git2").length == 1){
						if(done2 == false){
						  postscribe('#git2','<script src=https://gist.github.com/salsando1/a6b5ae06320121dd0f1a238b9e6de714.js></script>');	
						  alldone = alldone + 1;						
						   done2 = true;
						}
						console.log("inside of git2");
			   		}
					
					if($("#git3").length == 1){
						if(done3 == false){
						  postscribe('#git3','<script src=https://gist.github.com/salsando1/57eb10c09539fdaee298b1b51b6a4781.js></script>');	
						  alldone = alldone + 1;						
						   done3 = true;
						}
						console.log("inside of git3");
			        }
					
					if($("#git4").length == 1){
						if(done4 == false){
						postscribe('#git4','<script src=https://gist.github.com/salsando1/68bfebbbd1d86dd2fede32844ffb6bb3.js></script>');			
						alldone = alldone + 1;
						done4 = true;
						}
						console.log("inside of git4");
					}
					
					if($("#git5").length == 1){
						if(done5 == false){
						 postscribe('#git5','<script src=https://gist.github.com/salsando1/f8bebf029ed046c0a5b32eb5fd770cd3.js></script>');
						 alldone = alldone + 1;
                         done5 = true;						
						}
						console.log("inside of git5");
			        }
					
					if($("#git6").length == 1){
						if(done6 == false){
						 postscribe('#git6','<script src=https://gist.github.com/salsando1/cb2399513f288cc0afeb99840168d674.js></script>');
						 alldone = alldone + 1;
						 done6 = true;						
						}
						console.log("inside of git6");
			        }
					
					if($("#git7").length == 1){
						if(done7 == false){
						postscribe('#git7','<script src=https://gist.github.com/salsando1/8a7e8406d82260ca75a08f8ab779c8e8.js></script>');			 
						alldone = alldone + 1;
						done7 = true;
						}
						console.log("inside of git7");
			        }
					
					if($("#git8").length == 1){					
					   if(done8 == false){
						postscribe('#git8','<script src=https://gist.github.com/salsando1/3ba5a14f3755e0d2fa4b79e23aec6e90.js></script>');		  
						alldone = alldone + 1;
						done8 = true;
					   }
					   console.log("inside of git8");
			        }
					
					if($("#git9").length == 1){
                         if(done9 == false){
					     postscribe('#git9','<script src=https://gist.github.com/salsando1/7e13d694449da57a215098a06b2779d2.js></script>');
						 alldone = alldone + 1;
						 done9 = true;
						 }		            
						 console.log("inside of git9");
					}
					
					if($("#git10").length == 1){
						if(done10 == false){
						  postscribe('#git10','<script src=https://gist.github.com/salsando1/f66e7ffd7262a88f5b125258e9585bcc.js></script>');
						  alldone = alldone + 1;
                          done10 = true;						  
						}
						
						console.log("inside of git10");
		            }		
		              
				}
				console.log("done");
				postMessage("done");
}