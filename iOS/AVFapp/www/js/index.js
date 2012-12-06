/*Courtney Ardis
AVF 1212
Demo App 2 */


var onDeviceReady = function() {
	connectionStatus();
	// document.addEventListener("online", onlineNow, false);
}

document.addEventListener("deviceready", onDeviceReady, false);

//Video playback
var video = $('<video>');
video.on('click',function(){
	video.play();
},false);

// Not working
// $('#backBtn').history.back();

// AJAX call to get Twitter feeds about Marvel Comics
$.ajax({
    type: "GET",
    url: "http://search.twitter.com/search.json?q=marvel%20comics&callback=?",
    dataType: "json",
    success: function(data, response){		
		console.log(data);		
		for (i=0, j=data.results.length; i<j; i++){
			$("" +
				"<li id='tweets'>" +				
				"<img src='" + data.results[i].profile_image_url + "' />" +				
				"<a href='' id='twitterA'>" + data.results[i].from_user + "</a>" +				
				"<p id='twitterP'>" + data.results[i].text + "</p>" +				
				"</li><hr />"			
			).appendTo("#twitterFeed");		
		}	
    },
    error: function(status, results){
    	console.log(status, results);
    }
});


// AJAX call to get job listings from techsavvy.io
$.ajax({
    type: "GET",
    url: "http://api.techsavvy.io/jobs/javascript+san+francisco?limit=15",
    dataType: "json",
    success: function(data, response){		
		console.log(data);		
		for (i=0, j=data.data.length; i<j; i++){
			$("" +
				"<li>" +				
				"<p class='jobsP'>" + data.data[i].location + "</p>" +				
				"<a id='jobsA' href=''>" + data.data[i].company + "</a>" +				
				"<p class='jobsP'>" + data.data[i].description + "</p>" +				
				"</li><hr />"			
			).appendTo("#jobList");		
		}	
    },
    error: function(status, response){
    	console.log(status, response);
    }
});

// // Native device feature: Events
// // Handle the online event
// var onlineNow = function(){
// 	alert("You are online!");
// };

// Native device feature: Connection
var connectionStatus = function() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
    if (networkState != Connection.NONE || Connection.UNKNOWN){
    	onConnectMsg();
    }
};

// Native device feature: Notification
// onConnectMsg alert dismissed
var alertDismissed = function() {
    //return to index.html
}

var onConnectMsg = function() {
    navigator.notification.alert(
        'You are now connected!',  // message
        alertDismissed,            // callback
        'Network Connection',      // title
        'OK'                   	   // buttonName
    );
}

