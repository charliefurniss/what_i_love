$(document).ready(function() {

	var subjectArray = [
	{
		subject: "wine",
		word1: 		"tasting",
		word2: 		"Burgundy",
		word3: 		"Brunello",
		word4: 		"Hermitage",
		word5: 		"Pinot Noir",
		word6: 		"Chardonnay",
		word7: 		"Gulp",
		word8: 		"Slurp",
	}, 
	{
		subject: "music",
		word1: 		"Miles Davis",
		word2: 		"Nile Rogers",
		word3: 		"Fender guitars",
		word4: 		"Fender Rhodes",
		word5: 		"Fender amps",
		word6: 		"Soul Jazz Revue",
		word7: 		"More Boogie",
		word8: 		"Funk",
	}]
	
	function chooseWordObject(subjectArray) {
		var arrayPosition = Math.floor((Math.random() * subjectArray.length));
		return subjectArray[arrayPosition];
	}

	function showWordsonScreen(subjectObject) {
		$('#subject').html(subjectObject.subject);
		$('#word1').html(subjectObject.word1);
		$('#word2').html(subjectObject.word2);
		$('#word3').html(subjectObject.word3);
		$('#word4').html(subjectObject.word4);
		$('#word5').html(subjectObject.word5);
		$('#word6').html(subjectObject.word6);
		$('#word7').html(subjectObject.word7);
		$('#word8').html(subjectObject.word8);
	}

	var selectedSubjectObject = chooseWordObject(subjectArray);

	showWordsonScreen(selectedSubjectObject);

});