// 2024-06-08
// MIT 14
// 39th Lesson TASK H2

// String argumnet pass bo'ladigan function tuzing.
// Ushbu function argument tarkibidagi digit(son)larni topib
// yangi stringda return qilsin

// MASALAN: getDigits("m14i1t"); return qiladi "141"
// Yuqoridagi misolda, berilayotgan parametr tarkibida ham harf ham son mavjud.
// Natija sifatida text tarkibidagi sonlarni aniqlab ularni string ko'rinishida qaytarmoqdamiz.

// ==========================================================================

console.log("METHOD ONE");
const getDigits_1 = (text: string): string => {
  return text
    .split("")
    .filter((lt) => parseInt(lt))
    .join("");
};

const result_1 = getDigits_1("m14i1t");
console.log(`(method one) result: '${result_1}'`);
