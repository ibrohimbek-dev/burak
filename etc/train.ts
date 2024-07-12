// ----------------------------------------
// 2024-07-12
// MIT 14
// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

// =================================================
// Assets:
const numArryOne: number[] = [0, 3, 4, 31];
const numArryTwo: number[] = [4, 6, 30];

// Solutions:
// ---------------------------------------------
// METHOD ONE
console.log("---------------------------------------------");
const mergeSortedArrays_1 = (arrOne: number[], arrTwo: number[]) => {
	return arrOne.concat(arrTwo).sort((a, b) => a - b);
};

console.log(
	"(method one) result: ",
	mergeSortedArrays_1(numArryOne, numArryTwo)
);

// METHOD TWO
console.log("---------------------------------------------");
const mergeSortedArrays_2 = (arrOne: number[], arrTwo: number[]) => {
	const result: number[] = [];

	for (let num1 of arrOne) {
		result.push(num1);
		for (let num2 of arrTwo) {
			if (!result.includes(num2)) {
				result.push(num2);
			}
		}
	}

	return result.sort((a, b) => a - b);
};

console.log(
	"(method two) result: ",
	mergeSortedArrays_2(numArryOne, numArryTwo)
);

// METHOD TWO
console.log("---------------------------------------------");
const mergeSortedArrays_3 = (arrOne: number[], arrTwo: number[]) => {
	return arrOne
		.reduce((arr, num1) => {
			arr.push(num1);
			arrTwo.map((num2) => {
				if (!arr.includes(num2)) {
					arr.push(num2);
				}
			});

			return arr;
		}, [] as number[])
		.sort((a, b) => a - b);
};

console.log(
	"(method three) result: ",
	mergeSortedArrays_3(numArryOne, numArryTwo)
);

// METHOD FOUR
console.log("---------------------------------------------");
const mergeSortedArrays_4 = (arrOne: number[], arrTwo: number[]) => {
	return [...new Set([...arrOne, ...arrTwo])].sort((a, b) => a - b);
};

console.log(
	"(method four) result: ",
	mergeSortedArrays_4(numArryOne, numArryTwo)
);

// METHOD FIVE
console.log("---------------------------------------------");
const mergeSortedArrays_5 = (arrOne: number[], arrTwo: number[]) => {
	return [
		...new Set([
			...arrOne.reduce((acc, num1) => {
				acc.push(num1);
				return acc;
			}, [] as number[]),
			...arrTwo.reduce((acc, num2) => {
				acc.push(num2);
				return acc;
			}, [] as number[]),
		]),
	].sort((a, b) => a - b);
};

console.log(
	"(method five) result: ",
	mergeSortedArrays_5(numArryOne, numArryTwo)
);

// METHOD SIX
console.log("---------------------------------------------");
const mergeSortedArrays_6 = (arrOne: number[], arrTwo: number[]) => {
	return [...arrOne, ...arrTwo].sort((a, b) => a - b);
};

console.log(
	"(method six) result: ",
	mergeSortedArrays_6(numArryOne, numArryTwo)
);

// METHOD SEVEN:
console.log("---------------------------------------------");
const mergeSortedArrays_7 = (arrOne: number[], arrTwo: number[]) => {
	return [...arrOne, ...arrTwo].reduce((sortedArr, _, i, originalArr) => {
		for (let j = 0; j < originalArr.length - i - 1; j++) {
			if (originalArr[j] < originalArr[j + 1]) {
				[originalArr[j], originalArr[j + 1]] = [
					originalArr[j + 1],
					originalArr[j],
				];
			}
		}
		return [...sortedArr, originalArr[originalArr.length - i - 1]];
	}, [] as number[]);
};

console.log(
	"(method seven) result: ",
	mergeSortedArrays_7(numArryOne, numArryTwo)
);
