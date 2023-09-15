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
export const morseWord = (word) => {
	return word.toUpperCase().split('').map((letter) => {
		if(englishToMorseObj[letter]) {
			return englishToMorseObj[letter];
		} else {
			throw new Error(`Sorry this ${letter} is not a valid English letter from the alphabet`)
		}
	}).join("/");
};