//creating firebase connection
var dataRef = new Firebase("https://sanfrantrainschedule.firebaseio.com/");	

//captures when submit button is pushed
$('#addTrain').on('click', function(){ 

//captures what the user inputs and stores into variables
	train = $('#trainInput').val().trim();
	destination = $('#destinationInput').val().trim();
	militaryTime = $('#militaryTimeInput').val().trim();
	nextTrain = $('#nextTrainInput').val().trim();

	// Code for handling the push
	dataRef.push({
		train: train,
		destination: destination,
		militaryTime: militaryTime,
		nextTrain: nextTrain
	});

	// Don't refresh the page!
	return false;
});


//Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.on("child_added", function(childSnapshot) {

	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val().train);
	console.log(childSnapshot.val().destination);
	console.log(childSnapshot.val().militaryTime);
	console.log(childSnapshot.val().nextTrain)




// Creating variables to append user info
var tName = childSnapshot.val().train;
var tDestination = childSnapshot.val().destination;
var tFrequency = childSnapshot.val().militaryTime;
var tNextTrain = childSnapshot.val().nextTrain;

// Appends user info to table
$(".table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency);

	// Change the HTML
	$("#traindisplay").val("");
	$("#destinationdisplay").val("");
	$("#militaryTimedisplay").val("");
	$("#nextTraindisplay").val("");
	// Handle the errors
},	function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});

dataRef.orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){



});