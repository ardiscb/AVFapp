/*Courtney Ardis
AVF 1212
Demo App 2 */

//AJAX call to get Twitter feeds about Marvel Comics
$.ajax({
    type: "GET",
    url: "http://search.twitter.com/search.json?q=marvel%20comics&callback=?",
    dataType: "jsonp",
    success: function(data, response){
    	$("#feed")		
		.html("<p>Twitter Feed Load Successful.</p>");		
		console.log(data);		
		for (i=0, j=data.results.length; i<j; i++){
			$("#twitterFeed").append(
				"<li>" +				
				"<img src='" + data.results[i].profile_image_url + "' />" +				
				"<a>" + data.results[i].from_user + "</a>" +				
				"<p>" + data.results[i].text + "</p>" +				
				"</li>"			
			);		
		}	
    },
    error: function(status, results){
    	console.log(status, results);
    }
});

//AJAX call to get job listings from techsavvy.io
$.ajax({
    type: "GET",
    url: "http://api.techsavvy.io/jobs/javascript?limit=15&format=jsonp&callback=mySuperNeatCallback",
    dataType: "jsonp",
    success: function(data, response){
    	$("#jobs")		
		.html("<p>Job List Load Successful.</p>");		
		console.log(data);		
		for (i=0, j=data.length; i<j; i++){
			$("#jobList").append(
				"<li>" +				
				"<img src='" + data[i].company_logo + "' />" +				
				"<a>" + data[i].company + "</a>" +				
				"<p>" + data[i].description + "</p>" +				
				"</li>"			
			);		
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
