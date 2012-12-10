/*Courtney Ardis
AVF 1212
Demo App 4 */

// Cordovia ready
var onDeviceReady = function() {
	$("#capture").click(function() {
		imageCapture();
	});
	$("#storage").click(function(){
		saveImg();
	});
	$("#network").click(function() {
		connectionStatus();
	});
	$("#notification").click(function(){
		onConnectMsg();
	});
	$("#event").click(function(){
		window.addEventListener("batterystatus", batteryInfo, false);
	});
}

document.addEventListener("deviceready", onDeviceReady, false);

//Video playback
var video = $('<video>');
video.on('click',function(){
	video.play();
},false);

//// Not working ////
// Back to previous page button/link
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

// Native device feature: Capture
// Called when capture operation is finished
var captureImg = function(mediaFiles) {
    for (var i = 0, j = mediaFiles.length; i < j; i += 1) {
    // Store photo
	// Upload file to twitter
    }       
}

// Called if error occurs
// Also uses native feature: notification
var captureError = function(error) {
    var errorMsg = 'An error occurred during capture: ' + error.code + '. Restart app and try again.';
    navigator.notification.alert(errorMsg, null, 'Oops!');
}

// Starts device capture
var imageCapture = function(){
	navigator.device.capture.captureImage(captureImg, captureError, {limit: 1});
}

// Native device feature: Storage


// Native device feature: Connection
var connectionStatus = function() {
	// Using depreciated navigator.network.connection because otherwise it doesn't work on Android emulator
	// Source: https://issues.apache.org/jira/browse/CB-1807
	// Error in phonegap 2.2.0
	// Descripton states that using this will result in the correct data type for the emulator
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
    
    alert('Connection type: ' + states[networkState]);
};

// Native device feature: Notification
// onConnectMsg alert dismissed
var alertDismissed = function() {
    //return to index.html
}

var onConnectMsg = function(networkState) {
	if (networkState != Connection.NONE || Connection.UNKNOWN){
 		navigator.notification.alert(
	        'You are now connected!',  // message
	        alertDismissed,            // callback
	        'Network Connection',      // title
	        'OK'                   	   // buttonName
    	);
	}else{
		navigator.notification.alert(
	        'Unable to find connection status',  // message
	        alertDismissed,            			 // callback
	        'Network Connection',     			 // title
	        'OK'                   	   			 // buttonName
    	);
	}
}

//// Not working ////
// Native device feature: Events
// Handle the online event
var batteryInfo = function(){
	alert("Level: " + info.level);
};


// After connection use Twitter oAuth to login to Twitter - mashup
// After photo is captured, post to Twitter - mashup

