"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
Object.defineProperty(exports, "__esModule", { value: true });
// Nin-empty array case
let userNames = ['admin', 'Ali Phull', 'Muhammad Ahmed', 'Muhammad Zia', 'Muhammad Basit'];
// functional case
function greetUser(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello Admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again`);
        }
    }
}
console.log('For non empty username:\n');
greetUser(userNames);
//  to make array emty we just assing an empty array to userNames 
userNames = [];
console.log('\nFor empty username:\n');
greetUser(userNames);
