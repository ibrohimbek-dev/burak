// 2024-06-06
// MIT 14 TASK H:

// Integerlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.

// MASALAN: getPositive([1, -4, 2]) return qiladi "12".
// -4 positive emas negative number bo'lganligi uchun
// uni ignore qilib qolganlarini birlashtirib string ko'rinishadi qaytarmoqda

// ==========================================================================
console.log("-----------------------------------------------------------");
console.log("METHOD ONE:");

const getPositive_1 = (numbers: number[]) => {
  let result: number[] = [];
  numbers.forEach((num) => num > 0 && result.push(num));

  return result.join("");
};
const result_1 = getPositive_1([1, -4, 2]);
console.log(
  `(method one) I put together positive numbers as string type: '${result_1}'`
);

// ==========================================================================
console.log("-----------------------------------------------------------");
console.log("METHOD TWO:");

const getPositive_2 = (numbers: number[]) => {
  return numbers.filter((num) => num >= 0).join("");
};
const result_2 = getPositive_2([1, -4, 2]);
console.log(
  `(method two) I put together positive numbers as string type: '${result_2}'`
);

// ==========================================================================
console.log("-----------------------------------------------------------");
console.log("METHOD THREE:");

const getPositive_3 = (numbers: number[]) => {
  let result: string = "";
  for (let num of numbers) num >= 0 && (result += num.toString());

  return result;
};
const result_3 = getPositive_3([1, -4, 2]);
console.log(
  `(method three) I put together positive numbers as string type: '${result_3}'`
);

// ==========================================================================
console.log("-----------------------------------------------------------");
console.log("METHOD FOUR:");

const getPositive_4 = (numbers: number[]): void => {
  let result: string = "";
  for (let num of numbers) num >= 0 && (result += num.toString());

  console.log(
    `(method four) I put together positive numbers as string type: '${result}'`
  );
};

getPositive_4([1, -4, 2]);
