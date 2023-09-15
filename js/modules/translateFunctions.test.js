import { morseWord } from "./translateFunctions.js";

describe("test cases for a function that translates English letters to Morse code characters", () => {
	it("throws an error when recieves letters that are not in the English alphabet", () => {
		const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		numbersArr.map((number) => {
			expect(() => {
				morseWord(number.toString());
			}).toThrow(`Sorry this ${number} is not a valid English letter from the alphabet`);
		});
		expect(() => {
			morseWord("こんにちは");
		}).toThrow(`Sorry this こ is not a valid English letter from the alphabet`);

		const charactersArr = "./`@#$%^&*()_-+={}[]|:;'.,<>?\"\\".split('');
		charactersArr.map((character) => {
			expect(() => {
				morseWord(character);
			}).toThrow(`Sorry this ${character} is not a valid English letter from the alphabet`);
		});
	});

	it("returns english words trasnlated to morse code", () => {
			expect(morseWord("Marcela")).toBe("--/.-/.-./-.-././.-../.-");
			expect(morseWord("Web Developer")).toBe(".--/./-.../    /-.././...-/./.-../---/.--././.-.");
			expect(morseWord("A B C D E F G H I")).toBe(".-/    /-.../    /-.-./    /-../    /./    /..-./    /--./    /..../    /..");
	});
});


