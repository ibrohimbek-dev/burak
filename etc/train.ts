// ----------------------------------------
// 2024-08-01
// MIT 14

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

// ====================================================================================
// Assets:

const numOne: number = 1;
const numTwo: number = 2;

const numArray: number[] = [1, 3, 7, 2];

// Solutions:

console.log("---------------------------------------------------------");
// METHOD ONE:

const changeNumberInArray_1 = (
	num1: number,
	numArr: number[],
	num2: number
) => {
	const result: number[] = [...numArr];
	const index: number = result.indexOf(result[num1]);
	result[index] = num2;

	return result;
};

console.log("method one =>", changeNumberInArray_1(numOne, numArray, numTwo));
