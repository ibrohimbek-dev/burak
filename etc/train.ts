// ----------------------------------------
// 2024-07-30
// MIT 14

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// =========================================================
// Assets:
const celsiusVal: number = 0;

// Solutions:

// METHOD ONE:
console.log("-------------------------------------");
const celsiusToFahrenheit_1 = (cVal: number) => {
	return (cVal * 9) / 5 + 32;
};

console.log("method one =>", celsiusToFahrenheit_1(celsiusVal));

// METHOD TWO:
console.log("-------------------------------------");
const celsiusToFahrenheit_2 = (cVal: number) => (cVal * 9) / 5 + 32;

console.log("method two =>", celsiusToFahrenheit_2(celsiusVal));
