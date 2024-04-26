"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
// Define the arry of favorite
const favoriteFruits = ["apple", "banana", "orange"];
// syntex: arrayname.include("element")
// check for specific fruits using independent if statements
// let a = favorite_fruits.includes("apple")  / example 
// console.log(a) "apple" true   "mango" false  
if (favoriteFruits.includes("apple")) {
    console.log("I like apple!");
}
if (favoriteFruits.includes("banana")) {
    console.log("I enjoy banana!");
}
if (favoriteFruits.includes("orange")) {
    console.log("Orange are delicious!");
}
if (favoriteFruits.includes("grape")) {
    console.log("Grapes are tasty!");
}
if (favoriteFruits.includes("mango")) {
    console.log("Mango are one of my favourit!");
}
