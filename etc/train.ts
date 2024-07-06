// ----------------------------------------
// 2024-07-06
// MIT 14 TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// =================================================
// Assets:
const strNum: string = "1 + 2";
const numArr: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Solutions:
// METHOD ONE
const calculateString_1 = (str: string) => {
	let result: number = 0;

	str.split("").filter((num) => {
		if (num.match(/\d/g)) {
			return (result += Number(num));
		}
	});

	return result;
};

console.log(`(method one): ${calculateString_1(strNum)}`);

// -------------------------------------------------------------------
// METHOD TWO
const calculateString_2 = (str: string) => {
	return str
		.split("")
		.filter((num) => num.match(/\d/g))
		.reduce((sum, val) => sum + Number(val), 0);
};

console.log(`(method two): ${calculateString_2(strNum)}`);

// -------------------------------------------------------------------
// METHOD THREE
const calculateString_3 = (str: string) => {
	return str.split("").reduce((sum, val) => {
		if (val.match(/\d/g)) {
			return sum + Number(val);
		}

		return sum;
	}, 0);
};

console.log(`(method three): ${calculateString_3(strNum)}`);

// -------------------------------------------------------------------
// METHOD FOUR
const calculateString_4 = (str: string) => {
	return str.split("").reduce((sum, num) => {
		const numVal = Number(num);
		return isNaN(numVal) ? sum : sum + numVal;
	}, 0);
};

console.log(`(method four): ${calculateString_4(strNum)}`);

// -------------------------------------------------------------------
// METHOD FIVE
const calculateString_5 = (str: string) => {
	const regex = /\d/g;
	let result: number = 0;

	for (let num of str) {
		result += num.match(regex) ? Number(num) : 0;
	}

	return result;
};

console.log(`(method five): ${calculateString_5(strNum)}`);

// -------------------------------------------------------------------
// METHOD SIX
const calculateString_6 = (str: string) => {
	return str
		.split("")
		.filter((num) => num.match(/\d/g))
		.reduce((sum, val) => {
			return sum + Number(val);
		}, 0);
};

console.log(`(method six): ${calculateString_6(strNum)}`);

// -------------------------------------------------------------------
// METHOD SEVEN
const calculateString_7 = (str: string) => {
	return str
		.split("")
		.filter((num) => numArr.includes(num))
		.reduce((sum, val) => {
			return sum + Number(val);
		}, 0);
};

console.log(`(method seven): ${calculateString_7(strNum)}`);

// -------------------------------------------------------------------
// METHOD EIGHT
const calculateString_8 = (str: string) => {
	return str
		.split("")
		.filter((num) => {
			const numValue: number = Number(num);
			return !isNaN(numValue);
		})
		.map(Number)
		.reduce((sum, val) => sum + val, 0);
};

console.log(`(method eight): ${calculateString_8(strNum)}`);

// -------------------------------------------------------------------
// METHOD NINE
const calculateString_9 = (str: string) => {
	let sum: number = 0;

	for (let i = 0; i < str.length; i++) {
		!isNaN(Number(str[i])) && (sum += Number(str[i]));
	}

	return sum;
};

console.log(`(method nine): ${calculateString_9(strNum)}`);

// -------------------------------------------------------------------
// METHOD TEN
const calculateString_10 = (str: string) => {
	let sum: number = 0;
	str.split("").filter((num) => !isNaN(Number(num) && (sum += Number(num))));
	return sum;
};

console.log(`(method ten): ${calculateString_10(strNum)}`);

// -------------------------------------------------------------------
