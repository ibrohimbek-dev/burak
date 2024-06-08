// 2024-06-08
// MIT 14
// 39th Lesson TASK H2

// String argumnet pass bo'ladigan function tuzing.
// Ushbu function argument tarkibidagi digit(son)larni topib
// yangi stringda return qilsin

// MASALAN: getDigits("m14i1t"); return qiladi "141"
// Yuqoridagi misolda, berilayotgan parametr tarkibida ham harf ham son mavjud.
// Natija sifatida text tarkibidagi sonlarni aniqlab ularni string ko'rinishida qaytarmoqdamiz.

// ==========================================================================

console.log("METHOD ONE -----------------------");
const getDigits_1 = (text: string): string => {
	return text
		.split("")
		.filter((lt) => parseInt(lt))
		.join("");
};

const result_1 = getDigits_1("m14i1t");
console.log(`(method one) result: '${result_1}'`);
// ==========================================================================

console.log("METHOD TWO -----------------------");
const getDigits_2 = (text: string): string | undefined => {
	return text.match(/\d/g)?.join("");
};

const result_2 = getDigits_2("m14i1t");
console.log(`(method two) result: '${result_1}'`);

// ==========================================================================

console.log("METHOD THREE -----------------------");
const getDigits_3 = (text: string) => {
	return text
		.split("")
		.filter((lt) => /\d/g.test(lt))
		.join("");
};

const result_3 = getDigits_3("m14i1t");
console.log(`(method three) result: '${result_3}'`);

// ==========================================================================

console.log("METHOD FOUR -----------------------");
const getDigits_4 = (text: string) => {
	return text
		.split("")
		.filter((lt) => /^[0-9]/g.test(lt))
		.join("");
};

const result_4 = getDigits_4("m14i1t");
console.log(`(method four) result: '${result_4}'`);

// ==========================================================================

console.log("METHOD FIVE -----------------------");
const getDigits_5 = (text: string) => {
	return text
		.split("")
		.filter((num) => num >= "0" && num <= "9")
		.join("");
};

const result_5 = getDigits_5("m14i1t");
console.log(`(method five) result: '${result_5}'`);

// ==========================================================================

console.log("METHOD SIX -----------------------");
const numbers: string = "0123456789";
const getDigits_6 = (text: string) => {
	return text
		.split("")
		.filter((num) => numbers.includes(num))
		.join("");
};

const result_6 = getDigits_6("m14i1t");
console.log(`(method six) result: '${result_6}'`);

// ==========================================================================

console.log("METHOD SEVEN -----------------------");
const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
const getDigits_7 = (text: string) => {
	return text
		.split("")
		.filter((num) => !alphabet.includes(num))
		.join("");
};

const result_7 = getDigits_7("m14i1t");
console.log(`(method seven) result: '${result_7}'`);
