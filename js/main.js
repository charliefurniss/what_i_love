$(document).ready(function() {

	var wordsArray = ["wine tasting", "nuits st george", "brunello di montalcino", "hermitage", "pinot noir", "chardonnay", "miles davis", "nile rodgers", "fender guitars", "fender rhodes", "fender amps", "soul music", "me'shell ndegeocello", "more boogie", "funk", "herbie hancock", "greek oregano", "amorgos", "donoussa", "pacha", "ibiza", "twins", "adoption", "meursault", "slow roast pork shoulder", "gas barbeques", "roses", "joni mitchell", "cornell dupree", "jimmy page", "billy cobham", "bitches brew", "Australian national parks", "zoonotic diseases", "mexico", "tanzania", "lalibela", "steve gadd", "disco music", "george coleman", "cats", "cherry trees", "spring mornings", "log fires", "lamb chops", "mediterranean food", "The South of France", "baritone saxophones", "Roberta Flack"]
	
	function chooseWord(wordsArray) {
		var arrayPosition = Math.floor((Math.random() * wordsArray.length));
		return wordsArray[arrayPosition];
	}

	function showWord(word) {
		$('#word').html(word);
	}

	function start(){
		var selectedWord = chooseWord(wordsArray);
		showWord(selectedWord);
		changeWord();
	}	

	function changeWord(){
		var selectedWord = chooseWord(wordsArray);
		showWord(selectedWord);
		$('#word').fadeIn();
		setTimeout(function() {
			setTimeout(function(){
				$('#word').fadeOut();
			}, 6000);
			changeWord();
		}, 4000);
	}

	start();

	// var vx = 3;
	// var vy = 2;

	// function hitLR(el, bounding) {
 //    if (el.offsetLeft <= 0 && vx < 0) {
 //        console.log('LEFT');
 //        vx = -1 * vx;
 //    }
 //    if ((el.offsetLeft + el.offsetWidth) >= bounding.offsetWidth) {
 //        console.log('RIGHT');
 //        vx = -1 * vx;
 //    }
 //    if (el.offsetTop <= 0 && vy < 0) {
 //        console.log('TOP');
 //        vy = -1 * vy;
 //    }
 //    if ((el.offsetTop + el.offsetHeight) >= bounding.offsetHeight) {
 //        console.log('BOTTOM');
 //        vy = -1 * vy;
 //    }
	// }

	// function mover(el, bounding) {
 //    hitLR(el, bounding);
 //    el.style.left = el.offsetLeft + vx + 'px';
 //    el.style.top = el.offsetTop + vy + 'px';
 //    setTimeout(function() {
 //        mover(el, bounding);
 //    }, 50);
	// }

});