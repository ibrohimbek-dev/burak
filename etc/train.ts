// ----------------------------------------
// 2024-08-03
// MIT 14

// TASK ZE

// Shunday function yozing, uniygona string parametri mavjud bo'lsin.
// Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
// qiymatni qaytarsin.

// MASALAN: removeDuplicate('stringg') return 'string'

// Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
// funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
// qaytarmoqda.

// =====================================================
// Assets:
const duplicatedWord: string = "stringg";

// METHOD ONE:
const removeDuplicate_1 = (myWord: string) => {
	let result = myWord[0];

	for (let i = 1; i < myWord.length; i++) {
		if (myWord[i] !== myWord[i - 1]) {
			result += myWord[i];
		}
	}

	return result;
};

console.log("methd one =>", removeDuplicate_1(duplicatedWord));

// METHOD TWO:
console.log("--------------------------------------");
const removeDuplicate_2 = (myWord: string) => {
	return myWord.replace(/(.)\1+/g, "$1");
};

console.log("methd two =>", removeDuplicate_2(duplicatedWord));
