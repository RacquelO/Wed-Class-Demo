$(document).ready(function(){
	 $('#submit').on('click', function () {
       		// get selected zip code from selectbox
        		var countrySelected = $('#countries option:selected').text();
        		var metricSelected = $('#facts option:selected').text();

		// make the AJAX request
     		var xhr = $.get('http://api.giphy.com/v1/gifs/search?q=' + countrySelected + '&api_key=dc6zaTOxFJmzC&limit=5');
	
 		var itemsImage = [],
                			$img;		

		xhr.done(function(data) { 

			itemsImage.push(data.data[0].images.fixed_height.url);
 
			console.log(itemsImage[0]);

				 });

	
		 // make the AJAX request
     		   $.getJSON('https://restcountries.eu/rest/v1/name/' + countrySelected, function (data) {
					
            		// do all this on success       
           		 var itemsTwo = [],
             			   $ul;
 
           			 $.each(data, function (key, val) {
               			 //iterate through the returned data and build a list

                			 itemsTwo.push('<li class="table" id="' + key + '"><p>Country: ' + val.name + '</p><p>Capital: ' + val.capital + '</p><p> Sub Region: ' + val.subregion + '</p></li>');

                					 });

          			  // append list to page
            			$ul = $('<ul />').appendTo('#content');
 
            			//append list items to list
           			 $ul.append(itemsTwo);

       		 });

 
      		  // make the AJAX request
        		$.getJSON('http://api.undata-api.org/WHO/' + metricSelected + '/' + countrySelected + '/records?app_id=9ed2c241&app_key=09a895dafcf6e70bad03bef56317f454', function (data) {

        					console.log(data);
			
            					// do all this on success       
           					 var items = [],
               						 $ul;
 
            				$.each(data, function (key, val) {
                				//iterate through the returned data and build a list

               			 if (metricSelected === "Life expectancy at birth"){
                			 items.push('<li class="table" id="' + key + '"><span>' + val.gender + '</span><span> life expectancy was ' + val.value + ' years old</span><span> in the year ' + val.year + '.</span></li>');

               			 } else if
              
                			 (metricSelected === "Population in thousands"){

               			 items.push('<li class="table" id="' + key + '"><span>Population of ' + val.value + ' thousand</span><span> in the year ' + val.year + '.</span></li>');

        				 }

          				  });
  			


 
          			  // append list to page
           			 $ul = $('<ul />').appendTo('#contentTwo');
 
          			  //append list items to list
            				$ul.append(items);


			

	});	





// remove resultset if this has already been run
		   	  $('#content').empty();
		       	 $('#contentImage').empty();
		        	$('#contentTwo').empty();
			$('#contentAddedTwo').empty();
			$('#contentAdded').empty();



//=======================================================================================
			 $('#add').on('click', function () {
		
			console.log("hi");

			// get selected zip code from selectbox
        		var countrySelected = $('#countries option:selected').text();
        		var metricSelected = $('#facts option:selected').text();



//=====================================================================

		


		  // make the AJAX request
        		$.getJSON('http://api.undata-api.org/WHO/' + metricSelected + '/' + countrySelected + '/records?app_id=9ed2c241&app_key=09a895dafcf6e70bad03bef56317f454', function (data) {

        					console.log(data);
			
            					// do all this on success       
           					 var itemsAdded = [],
               						 $ul;
 
            				$.each(data, function (key, val) {
                				//iterate through the returned data and build a list

               			 if (metricSelected === "Life expectancy at birth"){
                			 itemsAdded.push('<li class="table" id="' + key + '"><span>' + val.gender + '</span><span> life expectancy was ' + val.value + ' years old</span><span> in the year ' + val.year + '.</span></li>');

               			 } else if
              
                			 (metricSelected === "Population in thousands"){

               			 itemsAdded.push('<li class="table" id="' + key + '"><span>Population of ' + val.value + ' thousand</span><span> in the year ' + val.year + '.</span></li>');

        				 }

          				  });
  			


 
          			  // append list to page
           			 $ul = $('<ul />').appendTo('#contentAdded');
 
          			  //append list items to list
            				$ul.append(itemsAdded);


			

	});

//=====================================================================

 // make the AJAX request
     		   $.getJSON('https://restcountries.eu/rest/v1/name/' + countrySelected, function (data) {
					
            		// do all this on success       
           		 var itemsAddedTwo = [],
             			   $ul;
 
           			 $.each(data, function (key, val) {
               			 //iterate through the returned data and build a list

                			 itemsAddedTwo.push('<li class="table" id="' + key + '"><p>Country: ' + val.name + '</p><p>Capital: ' + val.capital + '</p><p> Sub Region: ' + val.subregion + '</p></li>');

                					 });

          			  // append list to page
            			$ul = $('<ul />').appendTo('#contentAddedTwo');
 
            			//append list items to list
           			 $ul.append(itemsAddedTwo);

       		 });


//========================================



	});	




        });
 });
