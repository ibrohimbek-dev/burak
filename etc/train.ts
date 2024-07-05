// ----------------------------------------
// 2024-07-05
// MIT 14 TASK Q

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

// -----------------------------------------------------------
// Assets:
interface Car {
	name: string;
	model: string;
}

const objectCar: Car = {
	name: "BMW",
	model: "M3",
};

const check: string = "model";

// -----------------------------------------------------------
// Solutions:

console.log("-----------------------------------------------------------");
// METHOD ONE
const hasProperty_1 = (object: Car, str: string) => {
	return Object.keys(object).includes(str);
};

const result_1 = hasProperty_1(objectCar, check);
console.log("(method one) result:", result_1);

// -------------------------------------------------------------
// METHOD TWO
const hasProperty_2 = (object: Car, str: string) => {
	return object.hasOwnProperty(str);
};

const result_2 = hasProperty_2(objectCar, check);
console.log("(method two) result:", result_2);

// -------------------------------------------------------------
// METHOD THREE
const hasProperty_3 = (object: Car, str: string) => {
	return Object.entries(object).some((obj) => obj.includes(str));
};

const result_3 = hasProperty_3(objectCar, check);
console.log("(method three) result:", result_3);

// -------------------------------------------------------------
// METHOD FOUR
const hasProperty_4 = (object: Car, str: string) => {
	return Object.keys(object).reduce((found, key) => {
		return key === str;
	}, false);
};

const result_4 = hasProperty_4(objectCar, check);
console.log("(method four) result:", result_4);

// -------------------------------------------------------------
// METHOD FIVE
const hasProperty_5 = (object: Car, str: string) => {
	return Object.keys(object).filter((key) => key === str).length > 0;
};

const result_5 = hasProperty_5(objectCar, check);
console.log("(method five) result:", result_5);

// -------------------------------------------------------------
// METHOD SIX
const hasProperty_6 = (object: Car, str: string) => {
	return Object.entries(object).some(([key, _]) => key === str);
};

const result_6 = hasProperty_6(objectCar, check);
console.log("(method six) result:", result_6);

// -------------------------------------------------------------
// METHOD SEVEN
const hasProperty_7 = (object: Car, str: string) => {
	const keys: string[] = Object.keys(object);
	return keys.includes(str);
};

const result_7 = hasProperty_7(objectCar, check);
console.log("(method seven) result:", result_7);

// -------------------------------------------------------------
// METHOD EIGHT
const hasProperty_8 = (object: Car, str: string) => {
	return Object.keys(object).includes(str);
};

const result_8 = hasProperty_8(objectCar, check);
console.log("(method eight) result:", result_8);

// -------------------------------------------------------------
// METHOD NINE
const hasProperty_9 = (object: Car, str: string) => {
	switch (true) {
		case Object.hasOwnProperty.call(object, str):
			return true;
		default:
			return false;
	}
};

const result_9 = hasProperty_9(objectCar, check);
console.log("(method nine) result:", result_9);

// -------------------------------------------------------------
// METHOD NINE
const hasProperty_10 = (object: Car, str: string) => {
	for (let key in object) {
		if (key === str) {
			return true;
		}
	}

	return false;
};

const result_10 = hasProperty_10(objectCar, check);
console.log("(method ten) result:", result_10);

console.log("-----------------------------------------------------------");
