/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */




// Array of magicians name

const magicianNames: string[] =["Harry Porter","David copperfied","Hermione Granger","Professor Albus Dumbledore","Ron Weasley"];

function show_magicians(magician: string[]):void {
    for (const item of magician) {
        console.log(item);
    }
}

// Call the function to show the magicians names
console.log("Magician’s Name")
show_magicians(magicianNames);

export{};
