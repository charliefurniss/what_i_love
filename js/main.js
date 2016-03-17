$(document).ready(function() {

	var wordsArray = ["tasting wine with friends", "wine tasting in burgundy", "coffee notes in brunello di montalcino", "is rioja the best value fine wine?", "miles davis: the picasso of jazz?", "stevie wonder's songwriting", "noodling bass clarinet", "uplifting soul music", "me'shell ndegeocello's bass playing", "I love playing funk music", "herbie hancock's feel", "chicken and greek oregano", "hiking in amorgos", "lying on the beach in donoussa", "the crazines of twins", "mount colima eruption", "the nuttiness of meursault", "pork and fennel", "gas or charcoal barbecues?", "collecting cookbooks", "chilli relish recipe", "growing roses is exciting", "joni mitchell's voice", "cornell dupree's guitar style", "everything about jimmy page", "billy cobham's drum sound", "the atmosphere of bitches brew", "facilities in australian national parks", "the history of zoonotic diseases", "mexican culture", "a tanzanian welcome", "the history of lalibela", "steve gadd's groove", "the energy of disco music", "the soul of soul jazz", "george coleman's sweet tone", "crazy cats", "the scent of cherry blossom", "damp, sunny spring mornings", "homemade marmalade", "chicken with preserved lemons", "mediterranean food", "holidays in the south of france", "baritone saxophone", "roberta flack's voice", " conservation volunteering in tanzania", "mountain gorillas in congo", "experimenting with marinades", "chicken stuffed with mushrooms", 'camping in the pyrenees']
	
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
			}, 9000);
			changeWord();
		}, 12000);
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