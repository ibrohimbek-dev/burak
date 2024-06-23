// 2024-06-23
// MIT 14
// TASK L:

// So'zlarni ketma - ketligini buzmasdan har bir so'zni
// alohida teskarisiga o'girib beradigan fucntion tuzing.
// Funtion yagona string qabul qilsin

// MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
// Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda

// ==============================================================================

// Assets:
const sentence: string = "We like coding!";

// Solutions:
console.log("METHOD ONE ----------------------------------------");

const reverseSentence_1 = (text: string) => {
	const result: string[] = [];

	text.split(" ").forEach((txt) => {
		const char = txt.split("");
		const revChar = char.reverse();
		result.push(revChar.join(""));
	});

	return result.join(" ");
};

const result_1 = reverseSentence_1(sentence);
console.log("(method one) result:", result_1);
