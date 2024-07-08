// ----------------------------------------
// 2024-07-08
// MIT 14
// TASK S

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan

// =================================================
// Assets:
const numArry: number[] = [3, 0, 1];

// --------------------------------------------------
// Solutions:
// METHOD ONE:
const missingNumber_1 = (numbers: number[]) => {
	const maxNum = Math.max(...numbers);
	const result: number[] = [];

	for (let i = 0; i <= maxNum; i++) {
		if (!numbers.includes(i)) {
			result.push(i);
		}
	}

	return result;
};

console.log("(method one) missing numbers are:", missingNumber_1(numArry));

// -----------------------------------------------------------
// METHOD TWO:
const missingNumber_2 = (numbers: number[]) => {
	const maxNum = Math.max(...numbers);
	let count: number = 0;
	const result: number[] = [];

	while (count <= maxNum) {
		if (!numbers.includes(count)) {
			result.push(count);
		}
		count++;
	}

	return result;
};

console.log("(method two) missing numbers are:", missingNumber_2(numArry));

// -----------------------------------------------------------
// METHOD THREE:
const missingNumber_3 = (numbers: number[]) => {
	const minVal = Math.min(...numbers);
	const maxVal = Math.max(...numbers);

	return Array.from({ length: maxVal - minVal + 1 }, (_, i) => i).filter(
		(num) => !numbers.includes(num)
	);
};

console.log("(method three) missing numbers are:", missingNumber_3(numArry));

// -----------------------------------------------------------
// METHOD FOUR:
const missingNumber_4 = (numbers: number[]) => {
	const maxVal = Math.max(...numbers);

	return Array.from({ length: maxVal + 1 }, (_, i) => i).reduce(
		(arr, val: number) => {
			if (!numbers.includes(val)) {
				arr.push(val);
			}

			return arr;
		},
		[] as number[]
	);
};

console.log("(method four) missing numbers are:", missingNumber_4(numArry));
