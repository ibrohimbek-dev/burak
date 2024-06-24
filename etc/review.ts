
// MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";

function reverseSentence(str: string) {
	let words = str.split(" ");
	let reversedWords = words.map((word) => word.split("").reverse().join(""));
	return reversedWords.join(" ");
}

console.log(reverseSentence("we like coding!"));
