// ----------------------------------------
// 2024-07-13
// MIT 14
// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

// =====================================================
// Assets:
const son: number = 9;

// Solutions:

// METHOD ONE:
console.log("---------------------------------");
const sumOdds_1 = (param: number) => {
	return Array.from({ length: param }, (_, i) => i).filter((num) => num % 2)
		.length;
};

console.log("(method one) result:", sumOdds_1(son));

// METHOD TWO:
console.log("---------------------------------");
const sumOdds_2 = (param: number) => {
	const result: number[] = [];

	for (let i = 0; i < param; i++) {
		if (i % 2 !== 0) {
			result.push(i);
		}
	}

	return result.length;
};

console.log("(method two) result:", sumOdds_2(son));

// METHOD THREE:
console.log("---------------------------------");
const sumOdds_3 = (param: number) => {
	return Array.from({ length: param }, (_, i) => i).reduce((arr, val) => {
		if (val % 2 !== 0) {
			arr.push(val);
		}

		return arr;
	}, [] as number[]).length;
};

console.log("(method three) result:", sumOdds_3(son));

// METHOD FOUR:
// Exception
const sumOdds_4 = (param: number): number => {
	if (param <= 0) {
		return 0;
	}

	if (param === 1) {
		return 1;
	}

	return 1 + sumOdds_4(param - 2) 
};

console.log("(method four) result:", sumOdds_4(son));
