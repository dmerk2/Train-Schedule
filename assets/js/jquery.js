//creating firebase connection
var dataRef = new Firebase("https://sanfrantrainschedule.firebaseio.com/");	

$(document).ready(function(){
	//captures when submit button is pushed
	$('#addTrain').on('click', function(){ 

	//captures what the user inputs and stores into variables
		var train = $('#trainInput').val().trim();
		var destination = $('#destinationInput').val().trim();
		var nextArrival = moment($("#nextArrivalInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
		var frequency = $('#frequencyInput').val().trim();

		// Code for handling the push
		dataRef.push({
			train: train,
			destination: destination,
			nextArrival: nextArrival,
			frequency: frequency
		});

		// Don't refresh the page!
		return false;
	});


	//Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
	dataRef.on("child_added", function(childSnapshot) {

		// Log everything that's coming out of snapshot
		console.log(childSnapshot.val().train);
		console.log(childSnapshot.val().destination);
		console.log(childSnapshot.val().nextArrival);
		console.log(childSnapshot.val().frequency)


	// Creating variables to append user info
	var tName = childSnapshot.val().train;
	var tDestination = childSnapshot.val().destination;
	var tNextArrival = childSnapshot.val().nextArrival;
	var tFrequency = childSnapshot.val().frequency;

		// Appends user info to table
		$(".table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tNextArrival + "</td><td>" + tFrequency + "</td></tr>");
		// $(".table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tNextArrival + "</td><td>" + tFrequency + "</td><td>" + tMinutes + "</td></tr>");

		// Clears the HTML in bottom form
		$("#trainInput").val("");
		$("#destinationInput").val("");
		$("#nextArrivalInput").val("");
		$("#frequencyInput").val("");

		// ONLY WHEN I CLEAR FIREBASE.COM WILL THE TOP FORM EMPTY?!?!
		// HOW DO I CLEAR THE HTML IN THE TOP FORM???
		// $(".table > tbody").empty("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tNextArrival + "</td><td>" + tFrequency + "</td>");

		// $("<td>").val("");
		// $(tDestination).val("");
		// $(tNextArrival).val("");
		// $(tFrequency).val("");

		// Handle the errors
	// });
	// 	function(errorObject){
	// 	console.log("Errors handled: " + errorObject.code);
	// });

	// dataRef.orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
	// 	// Calculate the minutes until arrival using hardcore math
	// 	// To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time and find the modulus between the difference and the frequency  
	// 	var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
	// 	var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ;
	// 	var tMinutes = tFrequency - tRemainder;

	// 	// To calculate the arrival time, add the tMinutes to the currrent time
	// 	var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 
	// 		console.log(tMinutes);
	// 		console.log(tArrival);

	// 		console.log(moment().format("hh:mm A"));
	// 		console.log(tArrival);
	// 		console.log(moment().format("X"));
	});
});



