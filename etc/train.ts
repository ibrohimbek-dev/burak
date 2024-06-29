// 2024-06-30
// MIT 14
// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45
// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

// ====================================================================
// Assets:
const arrayValues: any = [10, "10", { son: 10 }, true, 35];

// Solutions:
console.log("METHOD ONE-----------------------------------------");
const calculateSumOfNumbers_1 = (numbers: number[]): number => {
	return numbers.reduce((sum, val) => {
		if (typeof val === "number") {
			return sum + val;
		}
		return sum;
	}, 0);
};

const result_1 = calculateSumOfNumbers_1(arrayValues);
console.log("(method one) result:", result_1);

console.log("METHOD TWO-----------------------------------------");
const calculateSumOfNumbers_2 = (numbers: number[]): number => {
	return numbers
		.filter((num) => typeof num === "number")
		.reduce((sum, val) => sum + val, 0);
};

const result_2 = calculateSumOfNumbers_2(arrayValues);
console.log("(method two) result:", result_2);

console.log("METHOD THREE-----------------------------------------");
const calculateSumOfNumbers_3 = (numbers: number[]): number => {
	let sum: number = 0;
	numbers.forEach((num) =>
		typeof num === "number" ? (sum += num) : "No number type is found"
	);
	return sum;
};

const result_3 = calculateSumOfNumbers_3(arrayValues);
console.log("(method three) result:", result_3);

console.log("METHOD FOUR-----------------------------------------");
const calculateSumOfNumbers_4 = (numbers: number[]): number => {
	return numbers.reduce(
		(sum, number) => sum + (typeof number === "number" ? number : 0)
	);
};

const result_4 = calculateSumOfNumbers_4(arrayValues);
console.log("(method four) result:", result_4);
