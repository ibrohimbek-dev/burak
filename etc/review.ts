const calculate = (expression: string): number =>
	expression
		.split("+")
		.map(Number)
		.reduce((a, b) => a + b, 0);
console.log(calculate("4/2")); // 42
