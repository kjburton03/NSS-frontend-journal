// ! array
const yellowFruit = "Banana"
const orangeFruit = "Orange"
const redFruit = "Apple"
const greenFruit = "Watermelon"
const blueFruit = "Blueberry"

const fruits = [yellowFruit, orangeFruit, redFruit, greenFruit, blueFruit]

console.log(fruits)




// ! index of an array


const myFavoriteColors = [ "red", "violet", "pink", "green", "white", "orange" ]

const whiteColor = myFavoriteColors[4]
console.log(whiteColor)

const violetColor = myFavoriteColors[1]
console.log(violetColor)

const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
]

/*
    Declare three variables to store the string value
    of a glass in the array. Use the correct index to
    get the right value.
*/


console.log("I am cleaning the following glasses:")

// Put each variable in one of the parenthesis below
console.log(dishes[1])
console.log(dishes[4])
console.log(dishes[9])



// ! calling variables in a string

const giveUp = "give you up"
const letDown = "let you down"

console.log(`Never gonna ${giveUp}, never gonna ${letDown}`)



const originals1 = [ "Original paper 1", "Original paper 2", "Original paper 3" ]

originals1.push("Original paper 4")

console.log(originals1)

const originals = [ "Original paper 1", "Original paper 2", "Original paper 3" ]
const copies = []  // Blank array that will contain the copies

for (const paper of originals) {
	const copy = `Copy of ${paper}`
	copies.push(copy)
}

console.log(copies)

const clay = [ "Clay", "Clay", "Clay", "Clay" ]
const toFireInKiln = []

for (clay of clays) {
   const mug = `${clay} coffee mug`
   toFireInKiln.push(mug)
}

console.log(toFireInKiln)