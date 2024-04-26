// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”


let favTransport: Array <[transport:string, brand:string ]>=[]

favTransport.push(["motercycle", "honda"])
favTransport.push(["car", "toyota"])
favTransport.push(["cycle", "shorab"])

// console.log(favTransport)

// using foreach to print a series of statemaent
favTransport.forEach(([transport, brand])=>{
    console.log(`I would like to own a ${brand} ${transport}.`)
})