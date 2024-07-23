// ----------------------------------------
// 2024-07-23
// MIT 14

// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.

// =====================================================
// Assets:
const arrOne: number[] = [3, 2, 0, 9, 101, 98, 97, 96];
const arrTwo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101];

// Solutions:

// METHOD ONE:
console.log("----------------------------------------------------------");
const findIntersection_1 = (arr1: number[], arr2: number[]) => {
	return arr1.filter((num) => {
		return arr2.includes(num);
	});
};

console.log("method one =>", findIntersection_1(arrOne, arrTwo));

// METHOD TWO:
console.log("----------------------------------------------------------");
const findIntersection_2 = (arr1: number[], arr2: number[]) => {
	return arr1.reduce((arr, num) => {
		if (arr2.includes(num)) {
			arr.push(num);
		}

		return arr;
	}, [] as number[]);
};

console.log("method two =>", findIntersection_2(arrOne, arrTwo));

// METHOD THREE:
console.log("----------------------------------------------------------");
const findIntersection_3 = (arr1: number[], arr2: number[]) => {
	const concatted = arr1.concat(arr2);

	const founded = concatted.filter((num, index) => {
		return concatted.indexOf(num) !== index;
	});

	return [...new Set(founded)];
};

console.log("method three =>", findIntersection_3(arrOne, arrTwo));

// METHOD FOUR:
console.log("----------------------------------------------------------");
const findIntersection_4 = (arr1: number[], arr2: number[]) => {
	const concatted: number[] = arr1.concat(arr2);
	const result: number[] = [];

	for (let i = 0; i < concatted.length; i++) {
		if (arr1.includes(arr2[i])) {
			result.push(arr2[i]);
		}
	}

	return result;
};

console.log("method four =>", findIntersection_4(arrOne, arrTwo));
