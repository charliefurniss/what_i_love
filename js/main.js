$(document).ready(function() {

	console.log('the dom is ready');

	var mainWord = ["Wine", "Cooking", "Music"];

	function chooseWord(wordsArray) {
		
		var arrayPosition = Math.floor((Math.random() * wordsArray.length));

		return wordsArray[arrayPosition];

	}

	function showWordonScreen(word) {
		$('#mainWord').html(word);
	}

	var selectedMainWord = chooseWord(mainWord);

	showWordonScreen(selectedMainWord);

});