$(document).ready(function(){
	
	//alert("new development!");	
  $("#btnViewAll").hide();
  $("#liketoschedule").hide();	
  $("#btnBrooklyn").click(function(){
    	$("#btnBrooklyn").hide();
	$("#categoryType-1-container").hide();
	$("#categoryType-2-container").hide();
	$("#categoryType-3-container").hide();
	$("#categoryType-4-container").hide();	 
	$("#categoryType-5-container").hide();	  
	//alert("smash it!");
	$("#btnViewAll").show();
	$("#category-title").hide();
	$("#liketoschedule").show();
	  
	$("#chooseappointment").addClass("step-pick-appointment");
	$("#yourinfo").addClass("step-pick-appointment");	
	$("#confirmation").removeClass("step-pick-appointment");	  
	  
  });
  $("#btnBraids").click(function(){
    	$("#btnBraids").hide();
	$("#categoryType-0-container").hide();
	$("#categoryType-2-container").hide();
	$("#categoryType-3-container").hide();
	$("#categoryType-4-container").hide();	 
	$("#categoryType-5-container").hide();		  
	//alert("smash it!");
	$("#btnViewAll").show();
	$("#category-title").hide();
	$("#liketoschedule").show();
  });
  $("#btnLocs").click(function(){
    	$("#btnLocs").hide();
	$("#categoryType-1-container").hide();
	$("#categoryType-0-container").hide();
	$("#categoryType-3-container").hide();
	$("#categoryType-4-container").hide();	 
	$("#categoryType-5-container").hide();		  
	//alert("smash it!");
	$("#btnViewAll").show();
	$("#category-title").hide();
	$("#liketoschedule").show();
  });
  $("#btnStitch").click(function(){
    	$("#btnStitch").hide();
	$("#categoryType-1-container").hide();
	$("#categoryType-2-container").hide();
	$("#categoryType-0-container").hide();
	$("#categoryType-4-container").hide();	 
	$("#categoryType-5-container").hide();		  
	//alert("smash it!");
	$("#btnViewAll").show();
	$("#category-title").hide();
	$("#liketoschedule").show();
  });
  $("#btnTwists").click(function(){
    	$("#btnTwists").hide();
	$("#categoryType-1-container").hide();
	$("#categoryType-2-container").hide();
	$("#categoryType-3-container").hide();
	$("#categoryType-0-container").hide();	 
	$("#categoryType-5-container").hide();		  
	//alert("smash it!");
	$("#btnViewAll").show();
	$("#category-title").hide();
	$("#liketoschedule").show();
  });
  $("#btnWeaves").click(function(){
    	$("#btnWeaves").hide();
	$("#categoryType-1-container").hide();
	$("#categoryType-2-container").hide();
	$("#categoryType-3-container").hide();
	$("#categoryType-4-container").hide();	 
	$("#categoryType-0-container").hide();		  
	//alert("smash it!");
	$("#btnViewAll").show();
	$("#category-title").hide();
	$("#liketoschedule").show();
  });
  $("#btnViewAll").click(function(){    	
	$("#categoryType-1-container").show();
	$("#categoryType-2-container").show();
	$("#categoryType-3-container").show();
	$("#categoryType-4-container").show();	 
	$("#categoryType-0-container").show();		  
	$("#categoryType-5-container").show();
	$("#btnBrooklyn").show();
	$("#btnBraids").show();
	$("#btnLocs").show();
	$("#btnStitch").show();
	$("#btnTwists").show();
	$("#btnWeaves").show();
	$("#Brooklyn").collapse("hide");
	$("#Braids").collapse("hide");
	$("#Locs").collapse("hide");
	$("#Stitch").collapse("hide");	  
	$("#Twists").collapse("hide");	 	  
	$("#Weaves").collapse("hide");
	$("#category-title").show();
	$("#btnViewAll").hide();
	$("#liketoschedule").hide();
  });		
  
});
