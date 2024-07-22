// 2024-06-04
// 35th lesson TypeScript & Patterns

// Lesson Schedule:
// 1) Compiled va interpreted tillarini o'rganamiz
// hamda ularning o'zaro solishtirma tahlili

// 2) Typescript nima va uning mavjudga kelishi bizga
// qanday muammolarni hal qilib beradi

// 3) Typescriptda dynamic typing va interfacelar tushunchasi

// 4) Burak backend loyihamizni typescriptda quramiz

// 5) Patternlarni o'rganamiz va architecture va dizayn patternlarga to'xtalib o'tamiz

// --------------------------------------------------------------------------------------------

// 1) Compiled va interpreted tillari farqini o'rganib olamiz:

// Compiled Languages => Java, GoLang, C, C++, C#, Rust

// Compiled Java dasturlash tiliga misol:
// Birinchi: Java tilida yozilgan kod to'liqligicha kompyuter tiliga o'tkaziladi, va bu jarayon compiling jarayoni deyiladi
// Ikkinchi: Mashina o'girilgan tilni o'qiy boshlaydi va bu jarayon execution deb ataladi

// Compiled Programming Languages'larning qisqagina ishlash formulasi:
// First: Compiling
// Second: Running

// -----------------------------------------------------
// interpreted Languages => NodeJS, Python, PHP, Ruby

// Iterpreted NodeJS dasturlash tiliga misol:
// Birinchi: Interpreted dasturlash tillari to'liq mashina tiliga o'girilmaydi.
// Aksincha u to'g'ridan - to'g'ri execution'ni boshlab yuboradi

// Interpreted Programming Languages'larning qisganiga ishlash formulasi:
// First: Running

// Interpreted Languages'ning ustunlik tomoni to'g'rida - to'g'ri execution qilish bo'lsa
// kamchilik tomoni ham shu hisoblanadi

// -------------------------------------------------------------
// Masalan Compiled tillarida agar 10 qatorlik kodnig oltinchi qatorida
// qandaydir xatolik mavjud bo'lsa, compiling to'xtab bizga errorni qaytaradi va kodni run qilmaydi

// Interpreted tillarida esa, xato mavjud qatorga qadar kodlar ishga tushmaguncha bizga errorqaytarmaydi
// Soddaroq qilganda, Compiled tillarida xato compiling jarayonidayoq aniqlansa, interpreted tillarida esa
// xatoni execution jarayonidagina aniqlash mumkin

// ------------------------------------------------------
// Biz muhokama qilayotgan xato bular type'larga bog'liq bo'lgan error'lardir
// Aynan mana shu kamchilik NodeJS'ni eng og'ir hamda ogriq nuqtalari edi.
// Sababi katta loyihalarda type integration mavjud bo'lmasa loyihani amalga oshirish imkonsiz hisoblanadi
// Bu muammoni esa bizga TypeScript hal qilib bergan. Ya'ni TypeScript Compiled Language'larda mavjud bo'lgan
// static type'larga o'xshash dynamic type'larni NodeJS'imizga olib kelib berdi

// ----------------------------------------------------------
// TypeScript'ni o'zi nima? Tahlil qilib olamiz:

// Demak biz yuqorida tahlil qildikki, TypeScript bizga type tushunshasini olib kelgan
// ya'ni dynamic type integration'ni xosil qilib bergan instrument hisoblanar ekan.

// TypeScript'ni alohida tahlil qilsak, TypeScript JavaScript'ni o'ziga 100% qamrab olgan
// Ya'ni JavaScript'da nima bo'lsa, va nima ishlasa TypeScript'da ham shu narsa 100% qamrab olingan hisoblanar ekan

// TypeScript va JavaScript forma ko'rishida:
// TypeScript = JavaScript + TypeScript'ni o'ziga bog'liq bo'lgan elementlar va komponentlar

// -------------------------------------------------------------
// JavaScript'imiz to'liq TypeScript'ning ichida mujassam ekan!
// Faqatgina TypeScript'ning JavaScript'dan farqi JavaScript'da mavjud bo'lmagan elemntlarga ega bo'lishidir

// -------------------------------------------------------------
// TypeScript & JavaScript'ning birgalikda ishlash jarayoni:
// Biz source'imizni TypeScript'da yozamiz
// lekin TypeScript o'zida compiling jarayonini hosil qilib
// TypeScript'da yozgan kodlarimizni to'liq JavaScript'ga o'girib berar ekan

// TypeScript & JavaScript'larni o'zaro birga ishlash mantig'ini Burak loyihamiznig
// backend'ini yozishda to'liq va aniq tushunib yetamiz

// ---------------------------------------------------------
// Navbatdagi bo'lim: Dynamic Types & Interface Tushunchasi

// -------------------------------------------
// TypeScript'ning dynamic type'lari:
// TypeScript'da variable'lar ikki xil bo'ladi:
// 1) Primitve types
// 2) Object types

// Primitve types:
// (reference'ga ega bo'lmagan) => string, number, boolean, null, undefined, symbol

// Object types:
// (reference'ga ega) => functions, arrays, classes etc.

// ----------------------------------------------------------
// Primitve type'larga misollar:
// String Type
// JavaScript'da variable'lar quyidagi ko'rinishda yoziladi:

// let box_js;
// box_js = "hello";
// box_js = 100; // no error occurred

// // TypeScript'da esa variable'lar quyidagi ko'rishida yoziladi:
// let box_ts: string;
// box_ts = "hello";
// box_ts = 100; // a compiling error occurred because of the string type

// // TypeScript'ni JavaScript'dan asosiy farqi, har bir variable uchun dynamic type'ni ko'rsatishimiz kerak bo'ladi

// // Number Type:
// const counter_1: number = 100; // no error occurred
// const counter_2: number = "devex"; // a compiling error occurred because of the number type

// // Quyidagi misolda number & string type'larini bir xil case'da ishlatishni ko'rib o'tamiz:
// let stage: number | string = "devex"; // 100;

// stage = 100; // no error will occurr because of the '|' or multiple types

// // Boolean type:
// const pending: boolean = true;

// ------------------------------------------------------------
// Object type'larga misol:
// JavaScript'da object hosil qilish:
// let person_js = {
// 	name: "Brian",
// 	age: 25,
// 	nation: "Mars",
// };

// // TypeScript'da object hosil qilish uchun biz interface'dan foydalanamiz:

// interface Person_Ts {
// 	name: string;
// 	age: number;
// 	nation: string;
// }

// const person_ts: Person_Ts = {
// 	name: "Brian",
// 	age: 25, // If you use another data type instead of number an error will occurr because of the number type
// 	nation: "Mars",
// };

// Interface o'zi nima?
// Interface'lar object singarin instance'ga ega bo'lmaydi, ular faqatgina type uchun xizmat qiladigan soya hisoblanadi

// --------------------------------------------
// Quyidagi misol singarin TypeScript'da object'larni interface'siz
// to'g'ridan - tog'ri hosil qilib olsak bo'ladi lekin bu birozgina noqulaylik kelitirib chiqaradi:

// let employee: {
// 	name: string;
// 	age: number;
// 	jobTitle: string;
// 	nation: string;
// 	planet: string;
// 	married: boolean;
// } = {
// 	name: "Brian",
// 	age: 25,
// 	jobTitle: "Web Developer",
// 	nation: "Alien",
// 	planet: "Mars",
// 	married: false,
// };

//  --------------------------------------------------
// TypeScript'da array'larni qanday hosil qilamiz?
// let universe: string[]; // Your array only can includes string data types
// universe = [
// 	"voyager",
// 	"meteor",
// 	"planet",
// 	"cosmos",
// 	"planet",
// 	"saturn",
// 	"satellite",
// ]; // Do not add any data types except string

// let numbers: number[]; // Your array only can includes number data types
// numbers = [1, 2, 3, 4, 5, 6, 7]; // Do not add any data types except number

// Agar bizga number & string data turlari yagona array tarkibida kerak bo'lsa
// u holda yechimni quyidagicha qilamiz:

// let mix: (number | string)[];
// mix = ["voyager", 2, "meteor", 4, "planet", 6, "saturn", 7];

// --------------------------------------------------------
// JavaScript'da classes:

// class Student_JS {
// 	// You do not have to include this section in JavaScript:
// 	// name;
// 	// major;
// 	// age;

// 	constructor(name, major, age) {
// 		this.name = name;
// 		this.major = major;
// 		this.age = age;
// 	}
// }

// TypeScript'da classes:
// class Student_TS {
// 	// You have to include this section in TypeScript:
// 	name: string;
// 	major: string;
// 	age: number;

// 	constructor(name: string, major: string, age: number) {
// 		this.name = name;
// 		this.major = major;
// 		this.age = age;
// 	}
// }

// Test Your TypeScript Class:
// const student_ts = new Student_TS("Brian", "Web Development", 25); // Argument Types should match with class data types

// ---------------------------------------------------------------------
// TypeScript'da type'larni interface ishlatmasdan to'g'ridan - to'g'ri type'lari bilan hosil qilishimiz mumkin.
// Lekin interface'dan foydalanish bizga ko'plab imkoniyatlarni beradi

// Check out more TypeScript tutorials here:
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// OR
// https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/

// --------------------------------------------------------------------------
// Run server.ts

// npm install typescript => It will installed as a dependency package
// But we have to install is as devDependency package so use this command:

// npm install typescript -D => It will installed as a devDependency package
// npm install typescript --save-dev

// This is main server.js file
// TypeScript Lessons started here
// 35th lesson: TypeScript & Patterns

// Enjoy Life 😊😊😊!

// Faqatgina develop jarayonida kerak bo'ladigon package'larni => devDepencies'ga install qilamiz
// Loyihamizni ishlash jarayonida (production) kerak bo'ladigan package'larni => dependencies'ga install qilamiz

// COMMAND LINES:
// npm init --yes
// npm i moment
// npm i typescript -D
// npm i typescript --save-dev
// tsc --init
// npm i nodemon -D
// npm ts-node -D
// npm i tsconfig-paths -D
// npm i

// Command at once and install all of them:
// ./command.sh

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Har qanday Front-end yoki Backend ma'lum bit Pattern'lar asosida quriladi
// Asosan backend uchun bir necha xil programming language'lardan foydalanishimiz mumkin: Java, PHP, NodeJS, Python, GoLang, etc.

// Har qaday programming tillaridan foydalanishimizga qaramasdan biz doim, Architectural va Pattern'lariga murojaat qilamiz

// Va bular language'lar aro bir xil tushunchalar
// Agar siz shu Architectural va Design Patternlarni yaxshi tushunib olsangiz, bir tildan boshqa bir tilga o'tishingiz juda ham oson kechadi

// ------------------------------------------------------------------------
// Backend bo'yicha eng mashxur Architectural Pattern'lar:
// 1) MVC => Model-View-Controller
// 2) DI => Dependency Injection

// Frontend bo'yicha eng mashxur architectural pattern'lar:
// 1) MVP => Model-View-Presenter

// Backend bo'yicha eng mashxur Design Pattern'lar:
// 1) Middleware
// 2) Decorator

// -----------------------------------------------------------------------
// Architectural Pattern => Bu backend uchun suyak hisoblanadi. Ya'ni backendimizdagi ma'lumotlar oqimini tartibga soladigan arxitekturasi hisoblanadi
// Design Pattern => Butun bir backend tizimidagi ma'lum bir bo'laklaridagi struktularni yechishda xizmat qiladigan pattern hisoblanadi (vositachi emas).

// Architectural Pattern'ni misol sifatida butun boshlik insonning suyagi desak, Design Pattern bu o'sha insonning qo'l suyagi hisoblanadi. Ya'ni qo'l bu ma'lum bir vazifani bajaradigon bo'lim hisoblanadi.
// Architectural Pattern esa o'sha insonning o'zi hisoblanadi

// 35th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ===========================================================================================

// 2024-06-13

// 43th lesson
// web Server & Authentication

// Darsimiz rejasi:
// 1) VPS va VPC o'zi nima?
// 2) Serverlarning o'zaro bog'lanishi bo'yicha turlari
// 3) Authentication nima va uni tashkillashtirish usullari
// 4) Session authentication qanday ishlashini nazariy tahlil qilamiz
// 5) Browserlarning xotiralarini o'rganamiz

// =================================================================

// Authentication usulini qurishda turli xil usullar mavjud:
// 1) Sessions (Cookies)
// 2) Tokens (Cookies)
// 3) Tokens (Headers)

// =================================================================

// 43th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ======================================================================
// 44th - dars
// 2024-06-17
// SPA - Login & Signup

// Dars rejasi:
// 1) Frontendni qurishning ikki hil usuli:
// 1) BSSR
// 2) SPA

// 2) Single Page Applicatation'imizning login hamda signup jarayonlarini develop qilamiz

// -----------------------------------------------------------------------

// BSSR & SPA farqlari

// Biz adminka loyihamizda Backen Server Side Rendering'ni amalga oshiramiz (BSSR)
// Bizning backend frontend qismiga tayyor HTML'ni yuboradi

// HTML => Hypertext Markup Language

// Demak birinchi holatda backend HTML'ni yuborsa ikkinchi holatda Data'ni yuboradi

// shunday holatda bizning Client'imiz Data'dan foydalangan holatda HTML'ni qurib oladi.
// Mana shu jarayon Single Page Application Development deyiladi (SPA)

// Ya'ni SPA'da HTML backend'da qurilmaydi, aksincha, Client backend'dan kelgan ma'lumotdan foydalanib Frontend'da HTML'ni qurib oladi

// ---------------------------------------------------------------------------

// Shu vaqtgacha bilganlarimiz, Frontend'ni ikki hil usulda qursak bo'lar ekan
// 1) Traditional Frontend Development (TFD) => BSSR => EJS
// 2) Modern Frontend Development (MFD)      => SPA  => ReactJS (recieve json data)

// *ReactJS Bu framework emas bu Library

// BSSR => Usulida biz Burak loyihasizning Adminka qismini qurmoqdamiz
// SPA  => Usulida biz Burak loyihasining user'larga tegishli bo'lgan qismini quramiz

// Quyidagi darsda res.send() emas aynan .json() formatlari bilan ishlaymiz

// ----------------------------------------------------------------------

// Ushbu loyida yozilgan kodlardan restaurant.controller.ts admin uchun javob bersa member.controller.ts user'lar uchun javob beradi
// Lekin har ikkala fayllar yagona Member.service.ts faylidan foydalanadi

// .lean() methodini yozish bilan biz database'dan olgan ma'lumotimizni o'zgartirish imkoniyatiga ega bo'lamiz

// -----------------------------------------------------------

// Biz darslarimizda ReactJS va SPA'ni o'rganamiz
// Asosiy sabab ishga joylashganimizdan keyin loyihalarimizda SPA'ni qo'llasak
// Frontend & Backend ma'lumotlar oqimini to'liq ko'z oldimizga keltirish
// va Backend & Frontend qanday ishlashini aniq qilib tushunish uchun bizga traditional Frontend yordamga

// Endi Authentication haqida gaplashamiz
// Biz biror kompaniyaga ishga kirganimizda bizdan Token yoki Session authentication'ni ishlatishni so'rashadi
// Biz aynan qaysi birini bizdan so'rashini bilmaymiz. Shu sababli ikkalasini ham ishlatamiz

// SPA'da Token'larni ishlatamiz, ya'ni ReacJS loyihamizda

// 44th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==============================================================================================

// 2024-06-18
// 45th dars
// EJS - Build Admin Frontend

// Dars rejasi:
// 1) Adminka loyihamizni frontend page'larini belgilaymiz
// 2) Frontend CSS, image, JavaScript folder va fayllarni xosil qilamiz
// 3) Frontendda external package'larni chaqiramiz va bootstrap css frameworkini ishlatamiz
// 4) Frontendimizda ishlatiladigan header va footer'ni joriy qilamiz

// ------------------------------------------------------------------------

// public tarkibidagi barcha fayllarni to'g'ridan to'g'ri import yoki connect qila olamiz
// Va bizga bu imkoniyatni app.ts fayli tarkibidagi middleware hosil qilib bermoqda:

// app.use(express.static(path.join(__dirname, "public")));

// .lean() metodini yozish orqalik biz database'dan kelgan ma'lumotni to'g'ridan - to'g'ri o'zgartira olishimiz mumkin:
// return await this.memberModel.findById(member._id).lean().exec();

// 45th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==============================================================================

// 46th Lesson
// 2024-06-20
// Authentication Sessions*

// Dars rejasi:
// 1) Session authentication jarayonini develop qilamiz
// 2) Test maqsadida checkAuthSession API'ni develop qilamiz
// 3) Session ishlash mexanizimini muxokama etamiz
// 4) Birgalikda logout API'ni xosil qilamiz

// ------------------------------------------------------------------

// resave: false => auth: 10: 30 => active: 13: 30. destroy: 13: 31. active: 12: 00 => destroy remain: 13: 31
// resave: true => auth: 10: 30 => active: 13: 30. destroy: 13: 31. active: 12: 00 => destroy updated: 15: 00

// resave: false => So'nggi faollik yangilanmaydi va destroy eski holatida qoladi
// resave: true => So'nggi faollik yangilanadi va destroy ham yangilanadi

// Bugungi darsimizda Session Authentication'ni o'rganamiz va bu Adminka loyihasiga dahldor hisoblanadi

// ---------------------------------------------------------

// req.session.member = result;
// req.session.save(() => {
// 	res.send(result);
// });

// Definition: Session'larimiz muvafaqqiyatlik saqlangach, ya'ni bizning browserimizdagi cookie'ni ichiga set'ni joylaydi
// Va undan tashqari bizni session collection'imizga members data'mizni borib joylaydi
// Unga qadar hech qanday response bo'lmaydi, qachonki .save() muvaffaqiyatlik saqlangach keyin bizning API'imizga javob yuboriladi

// ---------------------------------------------------------

// Postman'da signup & login qilib keyin bir xil url'dan foydalanib agar biz
// browserda ham login yoki signup qiladigan bo'lsak, biroz chalg'ish yuzaga keladi
// Ya'ni signup yoki login qilib bo'lmaydi. Sababi postman va browser bular alohida browserlar hisoblanadi
// Bir biriga dahldor emas

// ------------------------------------------------------------------

// Quyida yozgan kodlarimiz SignUp va Login bo'lgan vaqtida bizga kim va qaysi vaqtga
// murojaat etayotganiligini ayta olyapti

// Quyida jarayon tahlili:
// Quyidagi jarayon ikkita narsani xosil qilmoqda

// req.session.member = result;
// req.session.save(() => {
// 	res.send(result);
// });

// 2) Ikkinchi bo'lib bizning database'imizga borib aynan sessions
// collection'iga member ma'lumotini saqlamoqda

// 1) Yuqoridagi kod birinchi bo'lib browserimizga borib bizni
// cookie'imiz ichiga sid'ni joylamoqda

// sid => session id

// express session o'zi bilib database'imizga qaysi member qaysi id'ga tegishli
// ekanligini belgilab saqlab boradi

// ----------------------------------------------------------
// Bizga user'ni login & signup qilganligini e'tirof etadigan ma'lumotlar qayerda joylashgan?
// Browserdami yoki Database'da? Nima deb o'ylaysizlar?

// Javob => Faqatgina DataBase'da

// Browserda bizning member'ning ma'lumotlari mavjud emas.
// Browserda faqatgina member'ning session ID'si (sid) mavjud xolos

// Biz checkAuthSession metodini yaratib login & signup'larni check qildik
// Bu holatda ham biz error emas aksincha aniq ma'lumot olmoqdamiz

// Sababi cookie'ni o'ziga yarasha xislati borki, u har bir request'ga yopishib oladi

// --------------------------------------------------------------

// Quyida Cookie'ning xislatlari:

// 1) Xar bir requestga join bo'lib oladi
// Mana shu middleware qismiga cookie join bo'lmoqda
// Birinchi store (session collection) ichidan izlab sid mavjud bo'lsa unga dahldor bo'lgan session ma'lumotlarini request'ga joylab beradi

// app.use(
// 	session({
// 		secret: String(process.env.SESSION_SECRET),
// 		cookie: {
// 			maxAge: 3600 * 3600 * 3,
// 		},
// 		store: store,
// 		resave: true,
// 		saveUninitialized: true,
// 	})
// );

// Agar biz browser'dan cookie'ni o'chirib tashlasak, browserimiz backend'ga murojaat qiladi
// Lekin backendimiz cookie ichidagi SID'ni topa olmaydi, topa olmaganligi uchun
// database'imiz tarkibidagi collection ichidagi sessions ma'lutmolarini requestimizga bog'lab bera olmaydi.
// Ya'ni app.ts tarkibida sessions'ga dahldor bo'lgan middleware kiim murojaat etayotganligini bilmaydi. Sababi esa oddiy, cookie mavjud bo'lmaganligida!

// 2) Cookie'ni ikkinchi xislati, agar biz session collection tarkibidan user'ni data'sini o'chirib yuborsak
// u holda ham cookie'dan foydalanib login qilish jarayoni ham ishdan chiqadi. Ya'ni cookie'dan foydalanib login qila olmaymiz

// Bizda browserda SID mavjud ammo database'da session collection user data mavjud emas.
// Bunday holatda database tarkibidan browserda mavjud SID izlaydi va topa olmay shuning natijasida
// user qayta login qila olmaydi

// Soddaroq qilsak, Session Auth'da faqatginga browser uchun SID beriladi
// Database'da esa ana shu SID'ga dahldor bo'lgan ma'lumot yoziladi

// Cookie'ning yana bir imkoniyati bu o'zini o'zi self destroy qila olishida.
// Avvaliga maxAge orqalik cookie'ning qancha muddat faol bo'lishligini ta'minlaymiz
// Faollik yakunlangandan so'ng avval cookie browserdan o'chib ketadi, keyinroq esa o'sha cookie'ga
// tegishlik bo'lgan sessions collections tarkibidagi ma'lumotlar database'dan o'chib ketadi

// ----------------------------------------------------------------------

// res.redirect() bizni ma'lum bir link (endpoint)'ga yuboradi
// Quyida session destroy bo'lganidan so'ng bizni main page'ga yuborgin mantig'ini kirityapmiz:
// req.session.destroy(() => {
// 	res.redirect("/admin");
// });

// -------------------------------------------------------
// Biz bugungi darsgacha response'ning  quyidagi router'larini ko'rib chiqdik:
// res.send(), res.render(), res.json(), res.redirect()

// 46th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==============================================================================

// 47th Lesson
// 2024-06-22
// Product Controller

// Darsimiz rejasi:
// 1) Productga daxldor MVC'ni birga quramiz
// 2) Restaurant verification middleware mantig'ini hosil qilamiz
// 3) Browser local variablelarini hosil qilishni o'rganamiz
// 4) Serverizmizga fayl yuklash middleware mantig'ini develop qilamiz

// ------------------------------------------------------------------------------------------

// Hozirga qadar qilgan mantig'imiz memberlarga dahldor bo'lgan mantig'lar edi. Ya'ni bizning browserimizdan requestlar
// amalga oshirilida va ular router'lar orqalik controller'imizga keyin model service & model schema orqalik database'ga,
// keyin database'dan keraklik ma'lumotni olib Model => Controller => View tartibida ishlab Client'ga ma'lumot uzatildi

// Bundan keyingi darslarimizda endi Product'ga dahldor bo'lgan mantiq'larni develop qilamiz

// ------------------------------------------------------------------------------------------

// middleware uchun next qo'yilishi shart
// next() middleware uchun ishlatiladi. read docs

// TODO: read about next() on documentation

// Agar remote'ga loyihangizni push qilmagan bo'lsangiz git'ning --amend commandasidan foydalanishingiz mumkin
// --amend bu sizni yakuniy git commitingizni ustiga yangi comment yozib beradi ya'ni --amend orqalik so'nggi commentni update qila olamiz

// -------------------------------------------------------------------------------------

// Darsimizning keyingi qismi bu endi loyihamizga rasmlar yuklash ya'ni createNewProduct mantiqi ustida ishlash

// TODO: read about multer package on documentation

// path bu core package uni install qilish shart emas
// uuidv4 orqalik random id'lar hosil qilamiz

// TODO: read about uuid v3. v3. v4 etc. on documentation

// uploadProductImage.single() => bir vaqtni o'zida bitta faylni upload qiladi
// uploadProductImage.array() => bir vaqtni o'zida bir necha fayllarni upload qiladi

// 47th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-06-23
// 48th Leson
// Develop Product Schema Model

// Darsimiz rejasi:
// 1) Product enum value'larini belgilaymiz
// 2) Product Schema Modeli konfiguratsiyasini amalga oshiramiz

// ------------------------------------------------------

// Validation turlari ( 4 xil bo'ladi)

// Frontend va Backend oralig'ida amalga oshiriladigan Pipe Validation ham mavjud
// Lekin biz Burak loyihamizda 3 xil Validation'dan foydalanamiz:

// 1) Frontend Validation
// 2) Backend Validation
// 3) Database Validation

// --------------------------------------------------

// Biz Schema orqalik Database Validation'ni xosil qilmoqdamiz
// Agar kiritilgan ma'lumot database'ga noto'g'ri yuborilgan bo'lsa
// bizning schema'larimiz bizni himoyalaydi. Ya'ni noto'g'ri ma'lumotni kiritilmasligini ta'minlaydi

// 48th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-06-25
// 49th Lesson
// Product Service Model - createNewProduct & updateChosenProduct

// Darsimiz rejasi:
// 1) Restaurant Controllerlarning signup va login proccesslarini modify qilamiz
// 2) Product Service Model - createNewProduct biznes mantiqini tashkil qilamiz
// 3) Product Service Model - updateChosenProduct mantiqini develop qilamiz

// ----------------------------------------------------------

// Yodingizda tuting biz fayllarni faqatgina server'ni o'zida saqlaymiz, saqlangan fayllarni manziliniga url sifatida database (mongodb)ga saqlaymiz

// singup jarayonida biz serverga suratlarni multer package'i orqalik yuklamoqdamiz
// Yuklangan suratlarni biz aynan signup method tarkibida req.file qilish orqalik olishimiz mumkin.

// ------------------------------------------------------------

// Agar biz bir vaqtni o'zida bir necha suratlarni yuklasak (array) multer bizga
// 'files' sifatida ma'lumotlarni ta'minlab beradi
// req.files => multiple files (.array())

// Aksincha yagona suratni yuklasak (single) multer bizga
// 'file' sifatida ma'lumotlarni ta'minlab beradi
// req.file => a single file (.single())

// -----------------------------------------------------------
// new: true

// Agar new: true qilib ketsak bizga yangi o'zgargan ma'lutmoni namoyon qiladi
// Aksincha new: true'ni qo'ymasak yoki false qilib qo'ysak, bizga o'zgarguncha ya'ni
// o'zgarishdan oldingi eski ma'lumotni namoyon qiladi. new: false'da update bo'lgan ma'lumotni ko'rish uchun
// ikki marotaba request yuborishimiz kerak bo'ladi

// const result = await this.productModel
// 	.findOneAndUpdate({ _id: productId }, input, { new: true })
// 	.exec();

// new; true qo'yilasa, default false bo'ladi

// 49th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-06-25
// 50th Lesson
// Product - Service Model - getAllProducts

// Darsimiz rejasi:
// 1) Product Service Model - getAllProducts mantiqini develop qilamiz
// 2) Product Controllerlarimizdan EJS'larga ma'lumot yuborishni o'rganamiz

// ----------------------------------------------------------------

// Quyidagi middleware orqalik biz global variable hosil qilmoqdamiz (context)
// app.use((req, res, next) => {
// 	const sessionInstance = req.session as T;
// 	res.locals.member = sessionInstance.member;
// 	next();
// });

// 50th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-06-26
// 51th Lesson
// User Service Model - getUsers & updateChosenUser

// Darsimiz rejasi:
// 1) getUsers API'ni develop qilamiz
// 2) updateChosenUser API'i develop qilamiz

// 51th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-06-27
// 52th Lesson
// EJS - Admin Frontend Publishing

// Darsimiz rejasi:
// 1) Adminka frontendimizning CSS, JavaScript hamda image fayllarini yuklaymiz
// 2) Adminka loyihamizni EJS fayllarini yuklaymiz
// 3) Frontendda ishlatiladigan turli xil animation package'larni siz bilan birga o'rganamiz

// ------------------------------------------------------

// 52th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-06-29
// 53th Lesson
// EJS - Admin Login jarayoni tahlili

// Darsimiz rejasi:
// 1) Request turlari va Traditional API request
// 2) Admin login jarayonini tahlil qilamiz
// 3) Admin logout jarayonini birga tahlil qilamiz

// ------------------------------------------------------

// 53th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-06-29
// 54th Lesson
// EJS - Frontend signup jarayoni develop qilamiz

// Darsimiz rejasi:
// 1) jQuery'ni o'rganamiz
// 2) Validationlar va frontend validation xaqida mushohada qilamiz
// 3) Image preloading jarayonini tashkillashtiramiz
// 4) Adminka signup jarayonini yakunlaymiz

// ------------------------------------------------------

// jQuery vbu JavaScriptning kutubxonasi xisoblanadi

// Quyidagi jQuery'ning .ready() metodi bizga
// bizning web page'imiz to'liq yuklmanmagunga qadar biror bir operatsiyani amalga
// oshishidan checklab turadi. Ya'ni qachonki web page to'liq yuklanib bo'lganidan so'ng
// barcha biz yozgan mantiqlar ishga tushadi. Bu asosan internet tezligi past bo'lgan
// joylarda anchagina qo'l keladi. Va bu bizga biror xatolikni sodir bo'lishini oldini olib beradi:

// $(document).ready(function ({
//   jQuery methods go here
// }));

// Yuqoridagi kodni qisqagina varianti:
// $(function () {
// jQuery methods go here
// });

// ---------------------------------------------
// jQuery o'zi bizga nega kerak?
// jQuery bu JavaScriptning kutubxonasi bo'lib uni ishlatish bilan biz
// JS'ning anchagina qiyin bo'lgan kodlarini o'zimizga osonlashtirib olishimiz mumkin.
// Masalan, JS'da bir necha qator yozgan kodlarimizni jQuery'da juda ham kam kodlar bilan amalga oshirishimiz mumkin.

// For more about jQuery: https://www.w3schools.com/jquery/default.asp

// jQuery orqalik elementlarga murojat qilish usullari:
// class uchun nuqta (.button) bilan connect qilinadi
// id uchun panjara (#button) bilan connect qilinadi
// element uchun element nomi (button) bilan connect qilinadi

// HTML tarkibida biz internal sifatida ham jQuery kodlarimizni yozishimiz mumkin:
// <script>
//   $(function () {
//     // jQuery goes on here...
//   })
// </script>

// ---------------------------------------------------
// Validations:
// Bizda Burak loyihamizda 3 xil validations ishlatamiz:
// 1) Frontend validation
// 2) Backend validation
// 3) Database validation

// Nega biz bu 3 ta validation'dan foydalanishimiz kerak?
// Bizga Backend validation yoki Database uchun Schema validationni o'zi yetarlik emasmidi?

// Yo'q bu ikkata backend & database validationni o'zi yetarli emas, chunki nega biz
// frontendda validation qo'llamay noto'g'ri kiritilgan ma'lumotni backendga yuborishimiz kerak?
// Bu bizning mantiqlarga to'g'ri kelmaydi. Masalan frontendda biz to'ldirilmagan inputlarni ham
// backendga yuboradigan bo'lsak, bu mantiqga to'g'ri kelmaydi.

// ----------------------------------------------------

// 54th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-07-01
// 55th Lesson
// EJS - Frontend Products sahifasini develop qilamiz

// Darsimiz rejasi:
// 1) Products saxifamizga xaqiqiy datalarni chaqiramiz va render qilamiz
// 2) Yangi productlarni qo'shish mantiqini develop qilamiz
// 3) Frontendda mavjud productlarni update qilish mexanizmini develop qilamiz

// ------------------------------------------------------

// 55th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// ==========================================================================================

// 2024-07-02
// 56th Lesson
// EJS - Frontend User Control Developing

// Darsimiz rejasi:
// 1) Adminka loyihamizning userlarni boshqarish sahifasini develop qilamiz
// 2) Single page application uchun ishlatiladigan login jarayonini modify qilamiz

// ------------------------------------------------------

// 56th - dars shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-17
// 68th Lesson
// Create Authentication process on users

// Darsimiz rejasi:
// 1) Burak loyihasini Authentication bo'yicha belgilab olingan
// strategiyalarni muhokama etamiz
// 2) Login va Sign up jarayonlarida JWT'ni hosil qilamiz
// 3) Hosil qilayotgan Tokenlarimizni Cookie'larining ichida saqlaymiz
// 4) User memberlarimizning credentiallarini tekshirib test qilamiz

// ---------------------------------------------------

// Authentication jarayonini 3 xil usulda xosil qilishimiz mumkin:
// 1) Sessions (Cookies)
// 2) Tokens (Cookies)
// 3) Tokens (Headers)

// ---------------------------------------------
// Biz backend loyihamiz ichida token'larni hosil qildik.
// Endi ulardan frontendda foydalanish uchun biz ularni cookie'larga saqlashimiz kerak.

// token'larni vaqti ko'p bo'lsa ham, cookie'larni vaqti kam bo'lsa, u holda
// cookie'larimiz o'zini destroy qilganini hisobiga token'lar ishlamaydi

// token va cookie'lari orasida o'zaro muammo kelib chiqmasligi uchun
// token va cookie'larimizni yashash muddatini o'zaro bir xil qilib belgilashimiz kerak

// 68th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-17
// 69th Lesson
// Develop Logout and getMemberDetail API's

// Darsimiz rejasi:
// 1) Member Controllerlar'ga daxldor Authentication method'larini develop qilamiz
// 2) Logout jarayonini develop qilamiz
// 3) getMemberDetail API'ni hosil qilamiz

// ---------------------------------------------------

// 69th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-20
// 70th Lesson
// updateMember Rest API (Node JS)

// Darsimiz rejasi:
// 1) Middleware methodlarini ketma-ketlikda ishlatishni muhokama etamiz
// 2) updateMember Rest API'ni birga develop qilamiz

// ---------------------------------------------------

// 70th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-20
// 71th Lesson
// getTopUsers Rest API (NodeJS)

// Darsimiz rejasi:
// 1) Mongoose Query commandalarini o'rganamiz
// 2) getTopUsers biznes mantiqini develop qilamiz

// ---------------------------------------------------

// Greater Than Or Equal => $gte
// Quyidagi holatda, member'ning point'lari 1'dn katta bo'lsin degan mantiqni kiritmoqdamiz
//  memberPoints: {
// 		$gte: 1;
//  }

// .sort():
// Quyidagi qatorda member'ning pointlarini yuqori bo'lgan userlarni
// birinchiga chiqarib sortlab bergin ma'nosini beradi
// .sort({ memberPoints: -1 }) => descending (Kattadan boshlab kichik tartibida)
// .sort({ memberPoints: +1 }) => ascending (Kichikdan boshlab katta tartibida)

// .sort({ memberPoints: "desc" }) => ascending (Kichikdan boshlab katta tartibida)
// .sort({ memberPoints: "asc" }) => descending (Kichikdan boshlab katta tartibida)

// .limit() => orqalik biz faqatgina 4'ta user'ni sortlab bergin mantig'ini kirityapmiz

// .exec() => Bundan keyin keladigan barcha query'larni shu yerda yakunlayapmiz.
// Ya'ni shu yerdan keyin, keyingi query'larga o'tmaydi

// 71th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-20
// 72th Lesson
// Develop getRestaurant Rest API

// Darsimiz rejasi:
// 1) getRestaurant bizness mantiqini develop qilamiz
// 2) Lean Query commandasini tahlil etamiz

// ---------------------------------------------------

// .findOne() => Yagona object qaytaradi
// .find() => Array qaytaradi

// [] => Bo'sh array truthy value hisoblanadi

// MongoDB'dan qaytgan document object'lar .lean() orqalik oddiy js objectlariga aylantiriladi

// .lean() or .lean(true) (by default lean is true)

// 72th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-22
// 73th Lesson
// getProducts Rest Api nodeJS

// Darsimiz rejasi:
// 1) MongoDB Aggregationni o'rganamiz
// 2) URL'da qatnashadigan query va params tushunchalari
// 3) getProdutcts bizness mantiqini develop qilamiz

// ---------------------------------------------------

// Aggregation nima? => Aggregation schema orqalik quriladi va u pipeline'lar orqalik tashkillashtiriladi.
// Ya'ni aggregation bizga array'ni ichida turli xil pipeline'larni qurishimizga imkon beradi.
// Aggregation bu mukammal bo'lgan query mantiqlarini qurishda bizga yordamga keladi.
// Ayniqsa aggregation bir necha collection'larni bir vaqtni o'zida ma'lum bir documention'larni cross-query
// mexanizmlarini bizga tashkillashtirib beradi. Ya'ni bir vaqtni o'zida bir nechta pipeline'ni ochganligi sabablik
// bu pipeline'lar orqalik bir nechta collection'larni bir vaqtda o'qish imkoniyatini hosil qilib beradi.

// Aggregation'ga yana bir misol, masalan bizda ikkita kema bo'lsin. Hamda birinchi kemammiz bu
// cho'ponlardan iborat bo'lgan kema bo'lsin, hamda uni yonida ketayotgan ikkinchi kemamiz o'sha birinchi kemadagi
// cho'ponlarni qo'ylaridan iborat bo'lgan kema bo'lsin.
// Va bizga quyidagicha masala yuklatilsin: Masalan birinchi kemadagi cho'ponlar orasidan eng yoshi 3'ta cho'pon tanlab olinsin.
// Va tanlab olingan cho'ponlarga tegishli bo'lgan qo'ylarini ikkinchi kemadan axtarish mexanizimini bajaradigon mexanizm tuzish kerak bo'lsin.

// Agar bir yuqoridagi masalani aggretation usulidan emas, balki query methodian foydalanib yozadigon bo'lsak qanday bo'lar edi?

// Query methodi orqalik, birinchi kemamizdan biz yoshi eng kichik bo'lgan 3'ta cho'ponni izlar edik. Va bizda natija bir array bo'ladi
// va shu array ichida 3'ta cho'pon bo'ladi. Bu cho'ponlar saqlangan array 3 marotaba loop bo'ladi.
// Har birinchi loop'da biz ikkinchi kemadan (collection) 3 marotabadan loop qilib tegishlik bo'lgan qo'ylarni olib kelib, bir joyga jamlab
// bizning client'imizga yuborishimiz kerak edi.

// Huddi shu usul orqalik bizning server'imiz database'ga 4 marotaba murojaat qilmoqda.

// Aytaylik, ikkinchi holat, misol uchun eng yosh 10'ta cho'ponimizni qo'ylarini topsih kerak bo'lsa, unda bizda
// unda biz bu holatda server va database orasida bir necha marotaba query tashkillashtirishimizga to'g'ri keladi.

// Shunday ortiqcha noqulayliklarni chetlab o'tib, bundayin complex query'larni ya'ni bir necha collection (kema)'lar aro
// searching mexanizimini tashkillashtirish uchun, bizga aggretation xizmatga keladi.

// Aggregation faqatgina bundagina emas, aggregation bilan juda ko'p operatsiyalarni pipeline'larda hosil qilishimiz mumkin.
// Aynan mana shu pipeline'larimiz array shaklida bo'ladi va o'sha pipleline'larimiz orqalik complex mantiqlarni hosil qilishimiz mumkin ekan.

// Jumladan aggregation'larda ham o'zining kommandalari mavjud

// Demak, aggregation argument sifatida array'ni qabul qilar ekan va arrayni ichida bir qator pipeline'larni
// ketma - ketlikda berishimiz mumkin ekan.

// Aggregate.prototype.match() => Bu query'dagi .find() mantig'iga o'xshash mantiq hisoblanadi.
// Quyida .match()'ning ma'nosi document ichidagi department dataset'ini 'sales' yoki 'engineering' qiymatiga teng bo'lgan
// dokumentlarni topib berish buyrug'ini kirityapmiz.

// aggregate.match({department: {$in: ["sales", "engineering"]}});

// Aggregate.prototype.limit() => Keyinga jarayonga o'tish uchun maksimum limit qo'yish mantig'i:
// aggregate.limit(10);

// Aggregate.prototype.lookup() => Bir vaqtni o'zida bir nechta collection bo'ylab cross-query qilish mantig'i imkonini beradi:
// aggregate.lookup({from: "users", localField: "userId", foreignField; "_id", as: "users"})

// Aggregate.prototype.sample() => Bu bizga random dokumentlarni tanlab olish mantig'ini beradi.
// aggregate.sample(3) => Quyidagi mantiq orqalik, masalan bizda, aggregation orqalik 20'ta data paydo bo'lsa,
// .sample() bizga ixtiyoriy random holatda 3'tasini tanlab beradi.

// Aggregate.prototype.search() => Bu bizga text search mexanizimini tashkillashtirish uchun bizga yordamga keladi.
// const res = await Model.aggregate().search({
// 	text: {
// 		query: "baseball",
// 		path: "plot",
// 	},
// });

// Aggregate.prototype.skip() => Kelgusi jarayondan oldin nechtadur data'larni skip qilib beradi.
// aggregate.skip(10) => 10'tasi skip bo'ladi

// Aggregate.prototype.sort() => Data'larimizni sort qilib berish mexanizimini amalga oshirib beradi
// aggregate.sort({field: "asc", test: -1});
// aggregate.sort("field -test");

// TODO: more info about aggregation => https://mongoosejs.com/docs/api/aggregate.html

// ------------------------------------------------------------------

// Query => query'lar bizni url'larimizda hosil bo'ladi. Biz ularni quyidagicha kiritishimiz kerak:
// http://localhost:3003/member/products/all?name=brain
// result =>  { name: 'brian' }

// POST => method'larida header & body qismi mavjud
// GET => method'larida faqatgina header qismi mavjud

// Biz header qismi orqalik ham ma'lumotni backend'ga yuborishimiz mumkin.
// Demak query va params orqalik yuborishimiz mumkin.
// Biz hozir query'larni tahlil etyapmiz.

// Birinchi query'chi ochish uchun so'roq (?) belgisini qo'yamiz.
// Undan keyin davom etadigan query'larni qo'yish uchun esa and (&) belgisini qo'yamiz
// MASALAN:
// http://localhost:3003/products/all?name=brian&age=26&nation=german
// result => { name: 'brian', age: '26', nation: 'german' }

// -------------------------------------------------------
// Params => params'larni ham biz url'larimizda hosil qilib olamiz.
// Har qanday link ohiridan kiritilgan textlarni params deb qabul qilamiz.

// MASALAN:
// router.get("/products/all:id", productController.getProducts);

// :id o'rniga biz url'dan text ko'rinishida har qanday ma'lumotni kiritishimiz mumkin.

// http://localhost:3003/products/all/hello23World
// result =>  { id: 'hello23World' }

// Biz param'larni istaganimizcha qo'yishimiz mumkin:
// MASALAN:
// router.get("/products/all/:id/:param", productController.getProducts);
// http://localhost:3003/products/all/hello23World/hithere

// result =>  { id: 'hello23World', param: 'hithere' }

// --------------------------------------------------------------

// Biz ham param'ni ham query'ni birga ishlatishimiz mumkinmi?
// Ha albatta ishlatishimiz mumkin.
// MASALAN:
// http://localhost:3003/products/all/hello?name=brian

// result =>
// SPA => getProducts req.query => { name: 'brian' }
// SPA => getProducts req.params => { id: 'hello' }

// -------------------------------------------------------------

// Bizning request'larimiz GET va POST methodlaridan foydalanib quriladi.
// Agar biznin methodimiz GET methodidan foydalanib qurilgan bo'lsa, requestimizning faqatgina header qismi
// mavjud bo'ladi va shartlik ravishda body qismi mavjud bo'lmaydi deb ketganmiz.

// Lekin shunday bo'lsada biz GET methodi orqalik hosil qilingan so'rovni body qismida ham yuborsak bo'ladi
// ammo bu ko'p developer'lar tomonidan qabul qilinmagan amaliyot hisoblanadi. Shuning uchun
// biz doim GET methodini ishlatgan vaqtimizda frontendan ~ backend'ga ma'lumotlarni header orqalik ya'ni query va param orqalik ma'lumotlarni
// yuborish bu hamma qabul qilgan standart hisoblanadi.

// GET methodi orqalik ham body qismini shakllantirsak backend bu ma'lumotarni oladi lekin bu standart
// bo'lmaganligi uchun, biz bu usuldan foydalanmaymiz.

// Agar frontend'dan backend'ga ma'lumtoni body orqalik yuborish kerak bo'lsa biz buni
// POST methodi orqalik amalga oshiramiz.

// aggregation o'zida array'larni jalb qiladi

// 73th shu yerda yakunlandi
// 수고 하셨습니다!


// =================================================================

// 2024-07-23
// 74th Lesson
// Develop getProduct Rest API

// Darsimiz rejasi:
// 1) getProduct business mantiqini develop qilamiz
// 2) Tomoshaga bog'liq bo'lgan Service hamda Schema modellarni tashkil etamiz
// 3) Tomosha qilish tizimini integratsiyasini amalga oshiramiz

// ---------------------------------------------------

// memberController.retrieveAuth => orqalik biz login bo'lgan va login bo'lmagan user'lar uchun
// ma'lum bir rest api'dan foydalanish imkoniyatini beramiz.
// Ya'ni mantiq bo'yicha agar user authenticated bo'lgan bo'lsa biz  uni ma'lumotini req.member'ga
// biriktirib beramiz. Aksincha, authenticated bo'lmagan user bo'lsa, biz hech qanday jarayonni amalga oshirmay
// keyinchi qadamga (next()) o'tishiga imkon beramiz.

// memberController.retrieveAuth methodidan foydalanishimizning yana bir sababi ko'rishlar sonini plus birga oshirish.
// Va keyinchalik viewed qilgan user yana o'sha product'ni ko'rgan vaqti views sonini oshirmaslikdir.
// Shuning uchun ham aynan mana shu mantiq orqalik, kim murojaat etayotganligini bilishimiz kerak bo'ladi.



// 74th shu yerda yakunlandi
// 수고 하셨습니다!
