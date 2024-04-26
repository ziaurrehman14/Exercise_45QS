/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */


// Defining a function that accepts a soze and the text of a messege that shoul be printed on the Shirt

let make_shirt = (size: string, message: string): string => {
    console.log(`Size: ${size}, Message: ${message}`);
    return `Size: ${size}, Message: ${message}`;
}

// call the function

// call the function with the size and the message variables.
let size: string = "Large"
let message: string = "TypeScrip Insights with Zia"
make_shirt(size, message)

// directly call the function
make_shirt("Medium", "TypeScrip Insights with Zia");