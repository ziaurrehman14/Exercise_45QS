/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */



function makeShirt(size: string = "Large", message:string = "I love TypesScript"): void {
     return console.log(`Size: ${size}, Messege: '${message}'`);
}

// Large shirt with default messege
makeShirt(); // Output: Size:Large , Messege:I Love TypeScript

// Medium Shirt with default messege 
makeShirt(`Medium`); //Output: Size:Medium , Messege:I Love TypeScript

// Custom shirt with a messege and size
makeShirt("Small", "Please Focous on TypeScript"); //Output: Size:Small , Messege:Please Focous on TypeScript