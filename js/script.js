import { toMorseWord, toEnglishWord } from "./modules/translateFunctions.js";

// Get the input elements
const englishTextArea = document.querySelector('#englishLanguage');
const morseTextArea = document.querySelector('#morseLanguage');

// When the user write a word in English display the word in Morse  
englishTextArea.addEventListener("keyup", (event) => {
	const Englishword = event.target.value;
	morseTextArea.innerHTML = toMorseWord(Englishword);
});

// When the user write a characters in Morse Code display the translation in English words 
morseTextArea.addEventListener("keyup", (event) => {
	const morseWord = event.target.value;
	englishTextArea.innerHTML = toEnglishWord(morseWord);
});