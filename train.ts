// 2024-06-04
// 35th Lesson
// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21, 8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning taribidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");
console.log("METHOD ONE:");

const array_1: number[] = [5, 21, 12, 21, 8];

const getHighestIndex_1 = (numbers: number[]) => {
  return numbers.indexOf(Math.max(...numbers));
};

const result_1 = getHighestIndex_1(array_1);
console.log("(method one) The first max value's index is:", result_1);

