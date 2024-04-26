/* They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

const bouquet={
    name: "spring Delight",
    price: 250,
    description: "Beautiful arrangement of spring flowers"
}

// define an array of objects

let bouquets: Array<typeof bouquet>=[];

// pushing multipul objects

bouquets.push(bouquet)

bouquets.push({
    name: "Summer Bliss",
    price: 350,
    description: "Beautiful arrangment of summer flowers"
})
let bouquet3={
    name: "Red Hot",
    price: 3500,
    description:"Beautiful arrangement of red rose"
}
bouquets.push(bouquet3)
// console.log(bouquets)

bouquets.push({name: "Freshness", price:250, description:"A beautiful arrangment of white and yello roses"})
// console.log(bouquets)

// function to display bouquets

function displayBouquets(bouquets:Array<typeof bouquet>){
  for(let i of bouquets){
    console.log(`
    title: ${i.name}
    description: ${i.description}
    price: ${i.price}
    ============================\n`)
  }

    // for(let i=0; i<bouquets.length; i++){
    //     console.log(bouquets[i].name)      * or this 
    // }
}
displayBouquets(bouquets)