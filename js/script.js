const englishToMorseObj = 
{
	"A": ".-",
	"B": "-...",
	"C": "-.-.",
	"D": "-..",
	"E": ".",
	"F": "..-.",
	"G": "--.",
	"H": "....",
	"I": "..",
	"J": ".---",
	"K": "-.-",
	"L": ".-..",
	"M": "--",
	"N": "-.",
	"O": "---",
	"P": ".--.",
	"Q": "--.-",
	"R": ".-.",
	"S": "...",
	"T": "-",
	"U": "..-",
	"W": ".--",
	"X": "-..-",
	"Y": "-.--",
	"Z": "--..",
	" ": "&nbsp;   ",
}

// Translate English to Morse
const morseWord = (word) => {
	return word.toUpperCase().split('').map((letter) => {
		if(englishToMorseObj[letter]) {
			return englishToMorseObj[letter];
		} else {
			throw new Error(`Sorry this ${letter} is not a valid English letter from the alphabet`)
		}
	}).join("/");
};

console.log(morseWord('Marcela'));

// Get the input elements
const englishTextArea = document.querySelector('#englishLanguage');
const morseTextArea = document.querySelector('#morseLanguage');

// When the user write a word in English display the word in Morse  
englishTextArea.addEventListener("keyup", (event) => {
	const word = event.target.value;
	morseTextArea.innerHTML = morseWord(word);
});

// morseInput.addEventListener("input", (event) => {

// });