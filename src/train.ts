// 2024-06-18
// MIT 14
// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// ==========================================================================
const sentence: string = "I came from Uzbekistan!";

console.info("METHOD ONE ----------------------------------------");

const findLongestWord_1 = (text: string): string => {
	const textArr: string[] = text.split(" ");
	const result: number[] = [];

	textArr.forEach((txt) => result.push(txt.length));

	return textArr[result.indexOf(Math.max(...result))];
};

const result_1 = findLongestWord_1(sentence);
console.info("(first method) result:", result_1);

// ==========================================================================
console.info("METHOD TWO ----------------------------------------");

const findLongestWord_2 = (text: string) => {
	const textArr: string[] = text.split(" ");

	return textArr.reduce((maxLength, currentValue) => {
		return currentValue.length > maxLength.length ? currentValue : maxLength;
	}, "");
};

const result_2 = findLongestWord_2(sentence);
console.info("(second method) result:", result_2);

// ==========================================================================
console.info("METHOD THREE ----------------------------------------");

const findLongestWord_3 = (text: string) => {
	let checkLength: string = "";

	text.split(" ").forEach((txt) => {
		if (txt.length > checkLength.length) {
			checkLength = txt;
		}
	});

	return checkLength;
};

const result_3 = findLongestWord_3(sentence);
console.info("(third method) result:", result_3);
