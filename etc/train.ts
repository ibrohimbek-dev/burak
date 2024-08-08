// ----------------------------------------
// 2024-08-09
// MIT 14

// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'

// ============================================

// Assets:
const myWord: string = "name should be a string!";
const myWordJoined: string = "nameShouldBeAString!";

// Solutions:
// METHOD ONE:
console.log("------------------------------------");

const convertToSnakeCase_1 = (myStr: string) => {
	return myStr.split(" ").join("_");
};

console.log("method one =>", convertToSnakeCase_1(myWord));

// METHOD TWO:
console.log("------------------------------------");

const convertToSnakeCase_2 = (myStr: string) => {
	let snakeCase = "";
	for (let i = 0; i < myStr.length; i++) {
		const char = myStr[i];
		if (char.toUpperCase() === char && i > 0) {
			snakeCase += "_";
		}
		snakeCase += char.toLowerCase();
	}
	return snakeCase;
};

console.log("method two =>", convertToSnakeCase_2(myWordJoined));

// METHOD THREE:
console.log("------------------------------------");

const convertToSnakeCase_3 = (myStr: string) => {
	return myStr.replace(/\s+/g, "_");
};

console.log("method three =>", convertToSnakeCase_3(myWord));
