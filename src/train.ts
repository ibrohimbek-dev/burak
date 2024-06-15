// 2024-06-15
// MIT 14
// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// ==========================================================================

const numArr: number[] = [1, 2, 3, 4, 5, 4, 3, 4];

console.log("METHOD ONE");
const majorityElement_1 = (numbers: number[]) => {
	const countObj: { [key: number]: number } = {};

	for (let num of numbers) {
		if (countObj[num]) {
			countObj[num]++;
		} else {
			countObj[num] = 1;
		}
	}

	let maxNum = 0;
	let result = 0;

	for (let [num, count] of Object.entries(countObj)) {
		if (count > maxNum) {
			maxNum = count;
			result = Number(num);
		}
	}

	return result;
};

const result_1 = majorityElement_1(numArr);
console.log("result:", result_1);
