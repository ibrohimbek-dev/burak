const reverseSentence = (str: string): string => {
	const arr = str.split(" ");

	return arr.filter((ele) => ele.split("").reverse().join("")).join(" ");
};

const result = reverseSentence("we like coding");
console.log(result);
