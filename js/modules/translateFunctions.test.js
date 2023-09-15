import { toMorseWord } from "./translateFunctions.js";

describe("test cases for a function that translates English letters to Morse code characters", () => {
	it("throws an error when recieves letters that are not in the English alphabet", () => {
		const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		numbersArr.map((number) => {
			expect(() => {
				toMorseWord(number.toString());
			}).toThrow(`Sorry this ${number} is not a valid English letter from the alphabet`);
		});
		expect(() => {
			toMorseWord("こんにちは");
		}).toThrow(`Sorry this こ is not a valid English letter from the alphabet`);

		const charactersArr = "./`@#$%^&*()_-+={}[]|:;'.,<>?\"\\".split('');
		charactersArr.map((character) => {
			expect(() => {
				toMorseWord(character);
			}).toThrow(`Sorry this ${character} is not a valid English letter from the alphabet`);
		});
	});

	it("returns Morse Code translated from English words", () => {
			expect(toMorseWord("Marcela")).toBe("--/.-/.-./-.-././.-../.-");
			expect(toMorseWord("Web Developer")).toBe(".--/./-.../    /-.././...-/./.-../---/.--././.-.");
			expect(toMorseWord("A B C D E F G H I")).toBe(".-/    /-.../    /-.-./    /-../    /./    /..-./    /--./    /..../    /..");
	});
});

describe("test cases for a function that translates Morse code characters to English letters", () => {
	it("throws an error when recieves characters different from Morse code", () => {
		const lettersArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
		lettersArr.map((letter) => {
			expect(() => {
				toEnglishWord(letter);
			}).toThrow(`Sorry this ${letter} is not a valid Morse Code character`);
		});

		const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		numbersArr.map((number) => {
			expect(() => {
				toEnglishWord(number.toString());
			}).toThrow(`Sorry this ${number} is not a valid Morse code character`);
		});

		expect(() => {
			toEnglishWord("こんにちは");
		}).toThrow(`Sorry this こ is not a valid Morse Code character`);

		const charactersArr = "`@#$%^&*()_+={}[]|:;'.,<>?\"\\".split('');
		charactersArr.map((character) => {
			expect(() => {
				toEnglishWord(character);
			}).toThrow(`Sorry this ${character} is not a valid Morse Code character`);
		});
	});
	
	it("returns English words translated from Morse Code", () => {
			expect(toEnglishWord("--/.-/.-./-.-././.-../.-")).toBe("Marcela");
			expect(toEnglishWord(".--/./-.../    /-.././...-/./.-../---/.--././.-.")).toBe("Web Developer");
			expect(toEnglishWord(".-/    /-.../    /-.-./    /-../    /./    /..-./    /--./    /..../    /..")).toBe("A B C D E F G H I");
	});
});
