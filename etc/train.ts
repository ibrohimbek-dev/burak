// 2024-06-27
// MIT 14
// TASK N:

// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function parametrni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.

// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

// *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// bir xil ma'noni beradigan so'zga aytiladi

// =========================================================================
// Assets:
const word: string = "dad";

// Solutions:
console.log("METHOD ONE-----------------------------");
const checkPalindrom_1 = (input: string) => {
	return input.split("").reverse().join("") === input;
};

const result_1 = checkPalindrom_1(word);
console.log("(method one) result:", result_1);

// --------------------------------------------------------------
console.log("METHOD TWO-----------------------------");
const checkPalindrom_2 = (input: string) => {
	let reversed: string = "";
	for (let i = input.length - 1; i >= 0; i--) {
		reversed += input[i];
	}

	return reversed === input;
};

const result_2 = checkPalindrom_2(word);
console.log("(method two) result:", result_2);

// --------------------------------------------------------------
console.log("METHOD THREE-----------------------------");
const checkPalindrom_3 = (input: string) => {
	return [...input].reverse().join("") === input;
};

const result_3 = checkPalindrom_3(word);
console.log("(method three) result:", result_3);
