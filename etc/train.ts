// ----------------------------------------
// 2024-07-16
// MIT 14
// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// =====================================================
// Assets:
const word: string = "hello";

// Solutions:
// METHOD ONE:
console.log("---------------------------------");

const countChars_1 = (text: string) => {
	return text.split("").reduce((acc, letter) => {
		if (!acc[letter]) {
			acc[letter] = 0;
		}

		acc[letter]++;
		return acc;
	}, {} as Record<string, number>);
};

console.log("method one:", countChars_1(word));
