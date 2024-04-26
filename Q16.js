"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = [
    "Zia Khan",
    "Zia Rehman",
    "Ahmed",
];
// Informing people that you found a bigger dinner  table.
for (let guest of guestList) {
    console.log(`Hello, ${guest},We found a bigger dinner table.`);
}
// Add a new guest to the beginning of Array
let newGuestAtBegining = "Ayesha";
guestList.unshift(newGuestAtBegining);
// console.log(guestList)  for check
// Add one guest to the middle of Array
let newGuestInMiddle = "Mian Asif";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// console.log(guestList)  for check
// use append() to add new guest to the end of your list
let newGuestAtEnd = "Rukhsana";
guestList.push(newGuestAtEnd);
// console.log(guestList)  for check
// Print a new set of invitation messege 
console.log("New set of invitaion messege");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner`);
}
// var Names1 = ["Mryam", "Saba", "Muskan", "Isha"];
// for (var i = 0; i < Names1.length; i++) {
//     console.log("Good morning", Names1[i] + ".", "i would like to invite you make a dinner on july 15, 2023.");
// }
// console.log("isha could not make a dinner she is buy.");
// Names1[3] = "Maham";
// for (var i = 0; i < Names1.length; i++) {
//     console.log("good morning", Names1[i] + ".", "i would like to invite you to make a dinner on july 15, 2023");
// }
// console.log("Hello.it is inform that we have found a bigger table for dinner we will adding more guest.");
// console.log("we will invite Ali, Haider, and zara to the dinner");
// Names1.unshift("Ali");
// Names1.splice(2, 0, "Haider");
// Names1.push("zara");
// for (var i = 0; i < Names1.length; i++) {
//     console.log("Good morning", Names1[i] + ".", "i would like to invite you make a dinner on july 15, 2023.");
// }
