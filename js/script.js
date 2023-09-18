import { toMorseWord, toEnglishWord } from "./modules/translateFunctions.js";

// Get the input elements
const englishTextArea = document.querySelector('#englishLanguage');
const morseTextArea = document.querySelector('#morseLanguage');

// When the user write a word in English display the word in Morse  
englishTextArea.addEventListener("keyup", (event) => {
	const englishword = event.target.value;
	morseMessage.innerHTML = '';

	try {
		morseTextArea.value = toMorseWord(englishword);
	} catch (err) {
		const morseMessage = document.querySelector('#morseMessage');
		morseMessage.innerHTML = err.message;
	}
});

// When the user write a characters in Morse Code display the translation in English words 
morseTextArea.addEventListener("keyup", (event) => {
	const morseWord = event.target.value;
	englishMessage.innerHTML = '';

	try {
		englishTextArea.value = toEnglishWord(morseWord);
	} catch (err) {
		const englishMessage = document.querySelector('#englishMessage');
		englishMessage.innerHTML = err.message;
	}
});