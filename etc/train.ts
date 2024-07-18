// ----------------------------------------
// 2024-07-18
// MIT 14
// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.

// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lib bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

// =====================================================
// Assets:
const numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const son: number = 3;

const chunkArray = (arr: number[], num: number) => {
	const result: number[][] = [];
	let chunk: number[] = [];

	for (let i = 0; i < arr.length; i++) {
		if (i > 0 && i % num === 0) {
			result.push(chunk);
			chunk = [];
		}
		chunk.push(arr[i]);
	}

	if (chunk.length > 0) {
		result.push(chunk);
	}

	return result;
};

console.log("method one =>", chunkArray(numArr, son));
