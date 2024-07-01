// 2024-07-02
// MIT 14
// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// ====================================================================
// Assets:
// const object: object = { a: 10, b: 20 };
const myObject: Record<string, number> = { a: 10, b: 20 };

// Solutions:
console.log("METHOD ONE -----------------------------------");
const objectToArray_1 = (object: Record<string, number>) => {
	return Object.entries(object);
};

const result_1 = objectToArray_1(myObject);
console.log("(method one) result:", result_1);

// ---------------------------------------------------------
console.log("METHOD TWO -----------------------------------");
const objectToArray_2 = (object: Record<string, number>) => {
	const result: [string, number][] = [];

	for (const key in object) {
		result.push([key, object[key]]);
	}
	return result;
};

const result_2 = objectToArray_2(myObject);
console.log("(method two) result:", result_2);

// ---------------------------------------------------------
console.log("METHOD THREE -----------------------------------");
const objectToArray_3 = (object: Record<string, number>) => {
	const result: [string, number][] = [];

	for (const key of Object.keys(object)) {
		result.push([key, object[key]]);
	}
	return result;
};

const result_3 = objectToArray_3(myObject);
console.log("(method three) result:", result_3);

// ---------------------------------------------------------
console.log("METHOD FOUR -----------------------------------");
const objectToArray_4 = (object: Record<string, number>) => {
	return Object.keys(object).map((key) => [key, object[key]]);
};

const result_4 = objectToArray_4(myObject);
console.log("(method four) result:", result_4);

// ---------------------------------------------------------
console.log("METHOD FIVE -----------------------------------");
const objectToArray_5 = (object: Record<string, number>) => {
	return Object.keys(object).reduce((arr, val) => {
		arr.push([val, object[val]]);
		return arr;
	}, [] as [string, number][]);
};

const result_5 = objectToArray_5(myObject);
console.log("(method five) result:", result_5);
