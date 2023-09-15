import { toMorseWord } from "./modules/translateFunctions.js";

// Get the input elements
const englishTextArea = document.querySelector('#englishLanguage');
const morseTextArea = document.querySelector('#morseLanguage');

// When the user write a word in English display the word in Morse  
englishTextArea.addEventListener("keyup", (event) => {
	const word = event.target.value;
	morseTextArea.innerHTML = toMorseWord(word);
});

// morseInput.addEventListener("input", (event) => {

// });