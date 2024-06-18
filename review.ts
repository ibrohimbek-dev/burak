// function majorityElement(arr: number[]) {
// 	const count: { [key: number]: number } = {};
// 	for (let i = 0; i < arr.length; i++) {
// 		if (count[arr[i]]) {
// 			count[arr[i]] += 1;
// 		} else {
// 			count[arr[i]] = 1;
// 		}
// 	}
// 	let maxCount = 0;
// 	let maxElement = null;
// 	for (let key in count) {
// 		if (count[key] > maxCount) {
// 			maxCount = count[key];
// 			maxElement = key;
// 		}
// 	}
// 	return maxElement;
// }
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
