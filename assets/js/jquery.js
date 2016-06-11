//captures when submit button is pushed
$('#addTrain').on('click', function(){
	
	//captures what the user inputs and stores into variables
	var train = $('<train>').val();
	var destination = $('<destination').val();
	var militaryTime = $('militaryTime').val();
	var nextTrain = $('<nextTrain>').val();

	//outputs all the info into the HTML
	$('#trainDisplay').html(train);
	$('#destinationDisplay').html(destination);
	$('#militaryTimeDisplay').html(militaryTime);
	$('#nextTrainDisplay').html(nextTrain)

	//saving to localStorage
	localStorage.setItem('train', train);
	localStorage.setItem('destination', destination);
	localStorage.setItem('militaryTime', militaryTime);
	localStorage.setItem('nextTrain', nextTrain);

	return false;
});

//Shows whats saved to local storage
$("#trainDisplay").html(localStorage.getItem('train'));
$("#destinationDisplay").html(localStorage.getItem("destination"));
$("#militaryTimeDisplay").html(localStorage.getItem('militaryTime'));
$('#nextTrainDisplay').html(localStorage.getItem('nextTrain'));
