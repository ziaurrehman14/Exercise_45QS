/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/


//  Function to create a fruit
function createFruite(name: string, color: string, taste: string){
       return{
        name,
        color,
        taste,
    };
}
//  Create an array of fruits
 const fruits = [
createFruite("Apple", "Red", "Sweet"), 
createFruite("Banana", "Yellow", "Sweet"),
createFruite("Mango", "Green", "Citrusy"),
createFruite("Pineapple", "Red", "Sweet"),
createFruite("Peach", "Orange","sweet"),
];

//  Access an invalid index
const invalidIndex = 10  // There are only  5 elements in the array, so this will caiuse an error
 console.log(`Fruit at index ${invalidIndex}:`, fruits [invalidIndex])

//  Print this fruit 
fruits.forEach((fruit)=>{
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`)
})
export {};