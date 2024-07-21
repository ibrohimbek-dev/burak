// ----------------------------------------
// 2024-07-20
// MIT 14

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// =====================================================
// Assets:

const myObject: Record<string, any> = {
	model: "Bugatti",
	steer: {
		model: "HANKOOK",
		size: 30,
	},
};

const findKey: string = "model";

// ======================================================
// Solutions:

// METHOD ONE:
console.log("------------------------------------");

const countOccurrences_1 = (obj1: Record<string, any>, thisKey: string) => {
	let count: number = 0;

	const findKey = (obj2: Record<string, any>): void => {
		if (obj2 !== null && typeof obj2 === "object") {
			Object.keys(obj2).reduce((acc, key) => {
				if (key === thisKey || obj2[key] === thisKey) {
					count++;
				}

				findKey(obj2[key]);
				return acc;
			}, {});
		}
	};

	findKey(obj1);

	return count;
};

console.log("method one =>", countOccurrences_1(myObject, findKey));

// METHOD TWO:
console.log("------------------------------------");

const countOccurrences_2 = (obj: Record<string, any>, thisKey: string) => {
	let count: number = 0;
	const stack = [obj];

	for (let i = 0; i <= stack.length; i++) {
    const popThisObj = stack.pop();      

		for (let key in popThisObj) {
			if (key === thisKey) {
				count++;
			}
			if (typeof popThisObj[key] === "object" && popThisObj[key] !== null) {
				stack.push(popThisObj[key]);
			}
		}
	}

	return count;
};

console.log("method two =>", countOccurrences_2(myObject, findKey));
