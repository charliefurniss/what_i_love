$(document).ready(function() {

	var wordsArray = ["wine tasting", "nuits st georges", "brunello di montalcino", "miles davis", "stevie wonder", "bass clarinet", "nile rodgers", "fender telecaster", "fender rhodes", "fender twin", "soul music", "me'shell ndegeocello", "more boogie", "funk", "herbie hancock", "greek oregano", "amorgos", "donoussa", "twins", "mount colima", "meursault", "pork and fennel", "lamb and rosemary", "barbecues", "cookbooks", "chilli relish", "roses", "joni mitchell", "cornell dupree", "jimmy page", "billy cobham", "bitches brew", "australian national parks", "zoonotic diseases", "mexico", "tanzania", "lalibela", "steve gadd", "disco", "soul jazz", "george coleman", "cats", "cherry trees", "spring", "marmalade", "preserved lemons", "mediterranean food", "south of france", "baritone saxophone", "roberta flack", "conservation", "mountain gorillas", "marinades", "mushroom stuffing", 'the pyrenees']
	
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