// 2024-06-21
// MIT 14
// TASK K:

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda

// ==========================================================================
// Assets:
const vowels: string = "aeiou";

console.log("METHOD ONE -----------------------------------------");
const countVowels_1 = (text: string) => {
	return text.split("").filter((txt) => vowels.includes(txt.toLowerCase())).length;
};

const result_1 = countVowels_1("string");
console.log("(method one) result:", result_1);

// ==========================================================================
console.log("METHOD TWO -----------------------------------------");
const countVowels_2 = (text: string) => {
	let found: string = "";

	for (let txt of text) {
		vowels.includes(txt) ? (found += txt) : "";
	}

	return found.length;
};

const result_2 = countVowels_2("string");
console.log("(method two) result:", result_2);

// ==========================================================================
console.log("METHOD THREE -----------------------------------------");
const countVowels_3 = (text: string) => {
	let found: string = "";

	for (let i = 0; i < text.length; i++) {
		if (vowels.includes(text[i])) {
			found += text[i];
		}
	}

	return found.length;
};

const result_3 = countVowels_3("string");
console.log("(method three) result:", result_3);

// ==========================================================================
console.log("METHOD FOUR -----------------------------------------");
const countVowels_4 = (text: string) => {
	const found: string[] = [];

	text.split("").some((txt) => {
		if (vowels.includes(txt.toLowerCase())) {
			found.push(txt);
		}
	});

	return found.length;
};

const result_4 = countVowels_4("string");
console.log("(method four) result:", result_4);

// ==========================================================================
console.log("METHOD FIVE -----------------------------------------");
const countVowels_5 = (text: string) => {
	const founded = text.split("").reduce((arr: string[], val: string) => {
		if (vowels.includes(val.toLowerCase())) {
			arr.push(val);
		}

		return arr;
	}, []);

	return founded.length;
};

const result_5 = countVowels_5("string");
console.log("(method five) result:", result_5);

// ==========================================================================
console.log("METHOD SIX -----------------------------------------");
const countVowels_6 = (text: string) => {
	return text.split("").filter((txt) => {
		if (vowels.indexOf(txt.toLowerCase()) > -1) {
			return txt;
		}
	}).length;
};

const result_6 = countVowels_6("string");
console.log("(method six) result:", result_6);

// ==========================================================================
console.log("METHOD SEVEN -----------------------------------------");
// const found: string[] | null = text.toLowerCase().match(/[aeiuo]/g)

const countVowels_7 = (text: string) => {
  const found: string[] | null = text.match(/[aeiuo]/gi);
  
	return found?.length;
};

const result_7 = countVowels_7("string");
console.log("(method seven) result:", result_7);

// ==========================================================================
console.log("METHOD EIGHT -----------------------------------------");
const countVowels_8 = (text: string) => {
	return text.split("").filter((txt) => {
		if (/[aeiuo]/gi.test(txt)) {
			return txt;
		}
	}).length;
};

const result_8 = countVowels_8("striIng");
console.log("(method eight) result:", result_8);
