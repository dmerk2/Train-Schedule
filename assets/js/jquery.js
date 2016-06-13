//creating firebase connection
var dataRef = new Firebase("https://sanfrantrainschedule.firebaseio.com/");	

//captures when submit button is pushed
$('#addTrain').on('click', function(){ 




// Code in the logic for storing and retrieving the most recent user.




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
	console.log(Childsnapshot.val().train);
	console.log(Childsnapshot.val().destination);
	console.log(Childsnapshot.val().militaryTime);
	console.log(Childsnapshot.val().nextTrain)




//FULL LIST OF ITEMS TO WELL!!!




	// Handle the errors
}	function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});

dataRef.orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){

	// Change the HTML
	$("#traindisplay").html(snapshot.val().train);
	$("#destinationdisplay").html(snapshot.val().destination);
	$("#militaryTimedisplay").html(snapshot.val().militaryTime);
	$("#nextTraindisplay").html(snapshot.val().nextTrain);

});