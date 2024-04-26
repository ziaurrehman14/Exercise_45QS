"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
  of the guest who can’t make it.
 • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
  you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "Zia Khan",
    "Zia Rehman",
    "Ahmed",
];
exports.guestList = guestList;
// Print the name of person who can't make it
let guestHowCantMakeIt = "Ahmed";
console.log(`${guestHowCantMakeIt} can't make it to Dinner`);
// Replace the name of person who can't make it
let NewGuest = "Rukhsana";
let indexOfguestHowCantMakeIt = guestList.indexOf(guestHowCantMakeIt);
//  console.log(indexOfguestHowCantMakeIt)
if (indexOfguestHowCantMakeIt !== -1) {
    guestList[indexOfguestHowCantMakeIt] = NewGuest;
}
// console.log(guestList[2])
// Print a seconnd set of invitation messeges
console.log("seconnd set of invitation messeges");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
