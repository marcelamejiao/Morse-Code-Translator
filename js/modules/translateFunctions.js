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
	"V": "...-",
	"W": ".--",
	"X": "-..-",
	"Y": "-.--",
	"Z": "--..",
	" ": "    ",
}


// Translate English to Morse
export const toMorseWord = (word) => {
	return word.toUpperCase().split('').map((letter) => {
		if(englishToMorseObj[letter]) {
			return englishToMorseObj[letter];
		} else {
			throw new Error(`Sorry this ${letter} is not a valid English letter from the alphabet`)
		}
	}).join("/");
};

// Translate Morse to English
export const toEnglishWord = (characters) => {
	// Convert an Object into an Array with arrays [key, value]
	const englishToMorseArr = Object.entries(englishToMorseObj) 
	// To invert e.g. ["A" , ".-"]  to: [".-", "A"]
	const morseToEnglishArr = englishToMorseArr.map((keyValueArr) => {
		return keyValueArr.reverse(); 
	});
	// To convert the array back into the Object
	const morseToEnglishObj = Object.fromEntries(morseToEnglishArr); 
	return characters.split('/').map((character) => {
		if(character === "") {
			return ""
		}
		if(morseToEnglishObj[character]) {
			return morseToEnglishObj[character];
		} else {
			throw new Error(`Sorry this ${character} is not a valid Morse Code character`)
		}
	}).join("");
}