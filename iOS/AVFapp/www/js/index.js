/*Courtney Ardis
AVF 1212
Demo App 2 */

$(function(){
	$.getJSON("http://search.twitter.com/search.json?q=marvel%20comics", function(data) {
		$("#feed")
		.html("<p>Twitter Feed Load Succsessful.</p>");
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
	});
});
console.log($("#twitterFeed"));
