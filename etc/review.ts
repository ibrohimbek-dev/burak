function calculate(expression: string): number {
	const numbers: string[] = expression.split("+");
	const numericValues: number[] = numbers.map((num) =>
		parseInt(num.trim(), 10)
	);
	const sum: number = numericValues.reduce((acc, curr) => acc + curr, 0);
	return sum;
}

console.log(calculate("8+2"));