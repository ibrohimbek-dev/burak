// 2024-06-11
// 41th lesson
// Member Service Model (admin signup)

// Darsimiz rejasi:
// 1) API o'zi nima va uning qanday turlari mavjud
// 2) Adminka loyihasi uchun mo'ljallangan signup API'ni to'liq develop qilamiz

// =================================================================

// Mongoose bu MongoDB bilan ishlash uchun hosil qilingan maxsus package hisoblanadi

// MVC => Model View Controller
// Order of MVC
// Client => Controller => Model => Database => Model => Controller => View => Controller => Client

// Project Standards:
// 1) Logging Standards
// 2) Naming Standards ==>
//                      functions, methods, varibales => camelCase    // goHome
//                      class => PasCalCase                           // MemberService
//                      folder, file => keb-bab-case                        // fol-der-name
//                      css => sna_ke_case                            // btn_style
// 3) Error Handlings

// ==================================================================

// API ==> Aplication Programming Interface

// API explaned as a restaurant:
// Application => Customer
// Waiter => API
// Kitchen => Server

// Customer => Waiter => Kitchen => Waiter => Customer

// =================================================================

// Eng ko'p ishlatiladigan API turlari:
// 1) Traditional API (api)
// 2) Rest API
// 3) GraphQL API

// ======================================================================================================
// Qachon Promise ishlatamiz?
// Agar bizning methodimiz asynchronous bo'lmasa unda biz Promise ishlatmaymiz.
// Promise faqatgina asynchronous method'da ishlatiladi xolos.

// ================================================================================================

// .exec() orqalik query'lar ketma - ketligini to'xtatishimiz mumkin. Va bu kam resurs iste'mol qiladi
