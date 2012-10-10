var Synaesthesia = function () {
	
	var character_map = { 'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5', 'g': '6', 'h': '7', 'i': '8', 'j': '9', 'k': 'A', 'l': 'B', 'm': 'C', 'n': 'D', 'o': 'E', 'p': 'F', 'q': '0', 'r': '1', 's': '2', 't': '3', 'u': '4', 'v': '5', 'w': '6', 'x': '7', 'y': '8', 'z': '9'};

	function attachEvents(source, target) {
		document.getElementById(source).onkeyup = function () {
			document.getElementById(target).innerHTML = '';
			// Remove any non-alphanumeric characters and spaces.
			var words = this.value.replace(/[^A-Za-z]/g, '').toLowerCase();
			if (words.length == 0) return;
			// Lengthen the word to 6 characters if it is shorter.
			while (words.length < 6) {
				words += words;
			}
			// Loop through each character and convert it to a hex character.
			var hex = '';
			for (var i = 0, len = words.length; i < len; i++) {
				hex += character_map[words[i]];
			}
			// Turn each block of six characters into a coloured block.
			for (var i = 0, len = hex.length - 5; i < len; i++) {
				var colour_code = '#' + hex.substr(i, 6);
				document.getElementById(target).innerHTML += '<div style="background: ' + colour_code + ';">' + colour_code + '</div>';
			}
		}
	};

	return {
		init: attachEvents
	}
	
}();
