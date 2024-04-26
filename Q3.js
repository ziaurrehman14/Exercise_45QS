"use strict";
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */
// Name Cases
let personName = ("ziaurrehman");
// For Uppercase
let upperCase = personName.toUpperCase();
console.log(`Upper Case = ${upperCase}`);
// For Lowercase
let lowerCase = personName.toLowerCase();
console.log(`Lower Case = ${lowerCase}`);
// For Titlecase
let firstLetter = personName.slice(0, 1).toUpperCase();
let lastLetters = personName.slice(1, personName.length);
console.log(`Title Case = ${firstLetter + lastLetters}`);
// let personNames = "zia ahmed rukhsana hajra";
// let lowecase = personNames.toLowerCase();
// let uppercase = personNames.toUpperCase();
// let words = personNames.split(" ");
// let titleCaseName = " ";
// for (let i=0; i<words.length; i++){
//     titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()+" "
// };
// console.log(lowecase)
// console.log(uppercase)
// console.log(titleCaseName)
// line 42 and 49 in different in upper code but this code is perfectly run
// let personNames = "zia ahmed muneeb bilal";
// let lowecase = personNames.toLowerCase();
// let uppercase = personNames.toUpperCase();
// let words = personNames.split(" ");
// let titleCaseName =<Array<string>>[];
// for(let i=0; i<words.length; i++){
//  titleCaseName[i] = words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()
// };
// console.log(lowecase)
// console.log(uppercase)
// console.log(titleCaseName.join(` `))
