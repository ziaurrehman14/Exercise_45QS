"use strict";
/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. */
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases 
let personNames = "zia ahmed rukhsana hajra";
let lowecase = personNames.toLowerCase();
let uppercase = personNames.toUpperCase();
let words = personNames.split(" ");
let titleCaseName = " ";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(lowecase);
console.log(uppercase);
console.log(titleCaseName);
// There are two ways to write a program either write it like or do it like this
// // Name Cases
// let personName = ("ziaurrehman");
// // For Uppercase
// let upperCase = personName.toUpperCase();
// console.log(`Upper Case = ${upperCase}`);
// // For Lowercase
// let lowerCase = personName.toLowerCase();
// console.log(`Lower Case = ${lowerCase}`);
// // For Titlecase
// let firstLetter = personName.slice(0,1).toUpperCase();
// let lastLetters = personName.slice(1, personName.length);
// console.log(`Title Case = ${firstLetter+lastLetters}`)
