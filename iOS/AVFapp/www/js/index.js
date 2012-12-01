/*Courtney Ardis
AVF 1212
Demo App 2 */

//AJAX call to get Twitter feeds about Marvel Comics
$.ajax({
    type: "GET",
    url: "http://search.twitter.com/search.json?q=marvel%20comics&callback=?",
    dataType: "json",
    success: function(data, response){
  //   	$("#feed")		
		// .html("<p>Twitter Feed Load Successful.</p>");		
		console.log(data);		
		for (i=0, j=data.results.length; i<j; i++){
			$("" +
				"<li>" +				
				"<img src='" + data.results[i].profile_image_url + "' />" +				
				"<a href=''>" + data.results[i].from_user + "</a>" +				
				"<p>" + data.results[i].text + "</p>" +				
				"</li>"			
			).appendTo("#twitterFeed");		
		}	
    },
    error: function(status, results){
    	console.log(status, results);
    }
});

//AJAX call to get job listings from techsavvy.io
$.ajax({
    type: "GET",
    url: "http://api.techsavvy.io/jobs/javascript+san+francisco?limit=15",
    dataType: "json",
    success: function(data, results){
  //   	$("#jobs")		
		// .html("<p>Job List Load Successful.</p>");		
		console.log(data);	
		// $.each(data, function(index,){
		// 	alert('in for loop');
		// 	$("" +
		// 		"<li>" +				
		// 		"<p>" + data.location + "</p>" +				
		// 		"<a>" + data.company + "</a>" +				
		// 		"<p>" + data.description + "</p>" +				
		// 		"</li>"			
		// 	).appendTo("#jobList");	
		// });	
		for (i=0, j=data.data.length; i<j; i++){
			$("" +
				"<li>" +				
				"<p>" + data.data[i].location + "</p>" +				
				"<a href=''>" + data.data[i].company + "</a>" +				
				"<p>" + data.data[i].description + "</p>" +				
				"</li>"			
			).appendTo("#jobList");		
		}	
    },
    error: function(status, results){
    	console.log(status, results);
    }
});

//First attempt - Console logs but doesn't display on the page.	
// $(function(){
// 	$.getJSON("http://search.twitter.com/search.json?q=marvel%20comics&callback=?", function(data) {
// 		$("#feed")		
// 		.html("<p>Twitter Feed Load Successful.</p>");		
// 		console.log(data);		
// 		for (i=0, j=data.results.length; i<j; i++){
// 			$("#twitterFeed").append(
// 				"<li>" +				
// 				"<img src='" + data.results[i].profile_image_url + "' />" +				
// 				"<a>" + data.results[i].from_user + "</a>" +				
// 				"<p>" + data.results[i].text + "</p>" +				
// 				"</li>"			
// 			);		
// 		}	
// 	});
// });
