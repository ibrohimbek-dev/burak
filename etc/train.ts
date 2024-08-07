// ----------------------------------------
// 2024-08-07
// MIT 14

// TASK ZF

// Shunday function yozing, uni string parametri bo'lsin.
// Ushbu function, har bit so'zni bosh harflarini katta harf qilib qaytarsin.
// Lekin uzunligia 1 yoki 2 harfga teng bo'lgan so'zlarni esa o'z holicha
// qoldirsin.

// MASALAN: capitalizeWords('name should be a string'); return 'Name Should be a String';

// Yuqoridagi misolda, bizning function, uzunligi 2 harfdan katta bo'lgan so'zlarni,
// birinchi harfini katta harf bilan qaytarmoqda.

// =============================================================
// Assets:
const myWrod: string = "name should be a string";

// Solutions:

// METHOD ONE:
console.log("-----------------------------------------------");

const capitalizeWords_1 = (myString: string) => {
	return myString
		.split(" ")
		.map((txt) => {
			if (txt.length > 2) {
				return txt.slice(0, 1).toUpperCase() + txt.slice(1);
			} else {
				return txt;
			}
		})
		.join(" ");
};

console.log("method one =>", capitalizeWords_1(myWrod));

// METHOD TWO:
console.log("-----------------------------------------------");

const capitalizeWords_2 = (myString: string) => {
	return myString.replace(/\b\w{3,}\b/g, (txt) => {
		return txt.charAt(0).toUpperCase() + txt.slice(1);
	});
};

console.log("method two =>", capitalizeWords_2(myWrod));

// METHOD THREE:
console.log("-----------------------------------------------");

const capitalizeWords_3 = (myString: string) => {
	const strArr: string[] = myString.split(" ");
	const result: string[] = [];

	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i].length > 2) {
			result.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
		} else {
			result.push(strArr[i]);
		}
	}

	return result.join(" ");
};

console.log("method three =>", capitalizeWords_3(myWrod));

// METHOD FOUR:
console.log("-----------------------------------------------");

const capitalizeWords_4 = (myString: string) => {
	return myString
		.split(" ")
		.filter((txt) => txt.length > 2)
		.map((txt) => {
			return txt.charAt(0).toUpperCase() + txt.slice(1);
		})
		.join(" ");
};

console.log("method four =>", capitalizeWords_4(myWrod));

// METHOD FIVE:
console.log("-----------------------------------------------");

const capitalizeWords_5 = (myString: string) => {
	const words: string[] = myString.split(" ");
	let index: number = 0;

	while (index < words.length) {
		if (words[index].length > 2) {
			words[index] =
				words[index].charAt(0).toUpperCase() + words[index].slice(1);
		}
		index++;
	}

	return words.join(" ");
};

console.log("method five =>", capitalizeWords_5(myWrod));

// METHOD SIX:
console.log("-----------------------------------------------");

const capitalizeWords_6 = (myString: string) => {
	return myString.split(" ").reduce((acc, word) => {
		if (word.length > 2) {
			word = word.charAt(0).toUpperCase() + word.slice(1);
		}

		return acc + (acc ? " " : "") + word;
	}, "");
};

console.log("method six =>", capitalizeWords_6(myWrod));
