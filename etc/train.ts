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
const strNum: string = "1/2";

// Solutions:
// METHOD ONE
const calculateString_1 = (str: string) => {
	return eval(str);
};

console.log(`(method one): ${calculateString_1(strNum)}`);

// METHOD TWO
const calculateString_2 = (str: string) => {
	const fn = new Function("return " + str);
	return fn();
};

console.log(`(method two): ${calculateString_2(strNum)}`);
