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
import moment from "moment"

console.log("This is server.ts file");

const person_1: string = "Brian";
const count_1: number = 100;

const currentTime = moment().format("YYYY MM DD");
console.log(currentTime);



