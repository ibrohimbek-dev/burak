// 2024-06-25
// MIT 14
// TASK M:

// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, { number: 2, square: 4 }, { number: 3, square: 9 }];

// Shu qismiga keldim

// =========================================================================
// Assets:
const numbers: number[] = [1, 2, 3];

// Solutions:
// ======================================================================
console.log("METHOD ONE ---------------------------------");

const getSquareNumbers_1 = (numbers: number[]) => {
	const result: object[] = [];

	numbers.map((num) => {
		result.push({ number: num, square: num * num });
	});

	return result;
};

const result_1 = getSquareNumbers_1(numbers);

console.log("(method one) result:", result_1);

// ======================================================================
console.log("METHOD TWO ---------------------------------");

const getSquareNumbers_2 = (numbers: number[]) => {
	return numbers.map((num) => {
		return { number: num, square: num * num };
	});
};

const result_2 = getSquareNumbers_2(numbers);

console.log("(method two) result:", result_2);

// ======================================================================
console.log("METHOD THREE ---------------------------------");

const getSquareNumbers_3 = (numbers: number[]) => {
	return numbers.reduce(
		(arr: { number: number; square: number }[], num: number) => {
			arr.push({ number: num, square: num * num });

			return arr;
		},
		[]
	);
};

const result_3 = getSquareNumbers_3(numbers);

console.log("(method three) result:", result_3);
