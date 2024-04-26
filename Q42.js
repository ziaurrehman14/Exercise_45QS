"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magicians names
const magicianNames = ["Harry Porter", "David copperfied", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_Great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
// Modify the array to add "The Great" to each magician's name
const greatMagicianNames = make_Great(magicianNames);
// Call the function to show the original magicians's names
console.log("Original Magicians:");
showMagicians(magicianNames);