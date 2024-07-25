// ----------------------------------------
// 2024-07-26
// MIT 14

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// =====================================================
// Assets:
const myArrNums: number[] = [1, 2, 3, 2, 1];

// Solutions:

// METHOD ONE:
console.log("------------------------------------");
const sumEvens_1 = (myArr: number[]) => {
	return myArr.reduce((arr, num) => {
		if (num % 2 === 0) {
			return arr + num;
		}
		return arr;
	}, 0);
};

console.log("method one =>", sumEvens_1(myArrNums));

// METHOD TWO:
console.log("------------------------------------");
const sumEvens_2 = (myArr: number[]) => {
	let sum: number = 0;

	for (let i = 0; i < myArr.length; i++) {
		if (myArr[i] % 2 === 0) {
			sum += myArr[i];
		}
	}

	return sum;
};

console.log("method two =>", sumEvens_2(myArrNums));

// METHOD THREE:
console.log("------------------------------------");
const sumEvens_3 = (myArr: number[]) => {
	return myArr.reduce(
		(acum, curr) => {
			if (curr % 2 === 0) acum["evens"] = acum["evens"] + curr;
			else acum["odds"] = acum["odds"] + curr;
			return acum;
		},
		{ evens: 0, odds: 0 }
	);
};

console.log("method three =>", sumEvens_3(myArrNums));

// METHOD FOUR:
console.log("------------------------------------");
const sumEvens_4 = (myArr: number[]) => {
	const evens: number[] = myArr.filter((num) => num % 2 == 0);

	return evens.reduce((total, num) => total + num, 0);
};

console.log("method four =>", sumEvens_4(myArrNums));

// METHOD FIVE:
console.log("------------------------------------");
const sumEvens_5 = (myArr: number[]) => {
	const evens: number[] = myArr.filter((num) => num % 2 == 0);

	return eval([...evens].join("+"));
};

console.log("method five =>", sumEvens_5(myArrNums));

// METHOD SIX:
console.log("------------------------------------");
const sumEvens_6 = (myArr: number[]) => {
	const evens: number[] = myArr.filter((num) => num % 2 == 0);

	return eval(evens.toString().replace(/,/g, "+"));
};

console.log("method six =>", sumEvens_6(myArrNums));

// METHOD SEVEN:
console.log("------------------------------------");
const sumEvens_7 = (myArr: number[]) => {
	return myArr
		.filter((num) => num % 2 === 0)
		.reduce((total, son) => total + son, 0);
};

console.log("method seven =>", sumEvens_7(myArrNums));
