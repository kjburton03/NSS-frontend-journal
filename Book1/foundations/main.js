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

const clayt = [ "Clay", "Clay", "Clay", "Clay" ]
const toFireInKiln = []

for (clays of clayt) {
   const mug = `${clayt} coffee mug`
   toFireInKiln.push(mug)
}

console.log(toFireInKiln)

// * chapter 4 arrays and conditions

const weather = "raining"

if (weather === "raining") {
	console.log("Remember your umbrella")
}
else if (weather === "snowing") {
	console.log("Remember your jacket and scarf")
}
else if (weather === "sunny") {
	console.log("Remember your sunscreen")
}



const babies = [ "puppy", "kitten", "puppy", "duckling", "puppy", "kitten", "duckling", "kitten" ]
const grownAnimals = []

for (const baby of babies) {
	if (baby === "puppy") {
		grownAnimals.push("dog")
	}
	else if (baby === "kitten") {
		grownAnimals.push("cat")
	}
	else if (baby === "duckling") {
		grownAnimals.push("duck")
	}
}

console.log(grownAnimals)
// [ "dog", "cat", "dog", "duck", "dog", "cat", "duck", "cat" ]

const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
    if (ingredient === "beef patty") {
        finishedFood.push('burger')
    }
    else if(ingredient === "egg") {
        finishedFood.push('over-easy')
    }
    else if(ingredient === "potato") {
        finishedFood.push('scallioned potatos')
    }
	/*
		Write your if/else code here. In each block use .push() to insert
		the correct string into the finishedFood array.
	*/
}

console.log(finishedFood)

//  * ch5 Array length

const rainfallPerMonth = [ 5, 12, 18, 20, 22, 17, 29, 21, 20, 22, 30, 9 ]
let totalRainfall = 0  // Start at 0 and add to it in the loop

for (const rain of rainfallPerMonth) {
	totalRainfall += rain
}

// To find the average, you take the total and divide by the number of items
const averageRainfall = totalRainfall / rainfallPerMonth.length

console.log(`Total rainfall was ${totalRainfall} inches
Average rainfall was ${averageRainfall} inches
`)




const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const expense of monthlyExpenses) {
    totalExpense += expense
	// Add the current monthly cost to the value of totalExpense
}

// Calculate your average monthly food costs
const averageExpense = totalExpense/(monthlyExpenses.length)

// Make sure you use backticks for multi-line string output
console.log(`${averageExpense} & ${totalExpense} & ${monthlyExpenses.length} && ${monthlyExpenses.push('cat')} &&& ${monthlyExpenses.length} &&&& ${monthlyExpenses} &&&&& ${monthlyExpenses.length}`)



// * chapter 6 more average miles 
// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 69, 420, 53, 32, 92, 49, 23, 21, 64 ]
let totalMiles = 0

// Declare a variable to store the total. Initial value is 0.

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
    totalMiles += miles
}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / weeklyMiles.length
// Output the average miles and the total miles to the console
console.log(averageMiles)




// * chapter 7 for of shit

const wines = [ "red", "white", "white", "white", "red", "white", "red" ]
const wineCellar = []
const wineRefrigerator = []

for (const wine of wines) {
	if (wine === "red") {
		wineCellar.push(wine)
	}
	else {
		wineRefrigerator.push(wine)
	}
}

console.log(`
Contents of wine cellar: ${wineCellar.length}
Contents of wine refrigerator: ${wineRefrigerator}
`)
//* this
//* confuses
//* you
//* every
//* time
//* --->

const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for (const hour of hours){
    if (hour <= 7){
        grumpyHours.push(hour)
    }
    else if (hour >= 7){
        happyHours.push(hour)
    }
}

console.log(happyHours.length)
console.log(grumpyHours)

//* <------


// * chapter 8 Building Strings with Iteration

let pears = 4
pears++
console.log(pears)  // Will output 5

let party = "hell yeah"
party++
console.log(party) //NaN



const pineappleBelongsOnPizza = true
const theyWereOnABreak = true
const theOfficeIsFunny = false

if (pineappleBelongsOnPizza && theyWereOnABreak) {
	// Both variables are true, so this code runs
	console.log("Basic")
}

if (pineappleBelongsOnPizza && theOfficeIsFunny) {
	// Since both of the variables' values are not true, this won't run
	console.log("Bad")
}
if (pineappleBelongsOnPizza || theOfficeIsFunny) {
	// One of the variables' value is true, so this runs
	console.log("Basicalllly")
}

if (theyWereOnABreak || theOfficeIsFunny) {
	// One of the variables' value is true, so this runs
	console.log("Badely")
}


const allFeedback = [
    "I don't regret coming, but I won't recommend it to a friend.",
	"I would say I was disappointed in the production.",
	"I was happy. The whole play had me smiling.",
	"What a delightful evening. Money well spent.",
	"Meh. It was fine.",
	"While there was nothing terrible, I was disappointed in the music.",
	"I was delighted by the fun music and the whimsical dances.",
	"I didn't hate it, but the last 20 minutes had me completely bored."
]

let happyCustomers = 0
let unhappyCustomers = 0

for (const feedback of allFeedback) {
	/*
		If the current feedback includes the string of "delight" or the string
		of "happy", increase the value of the happyCustomers variable by 1
	*/
	if (feedback.includes("delight") || feedback.includes("happy")) {
		happyCustomers++
	}
	/*
		If the current feedback includes the string of "disappointed" or
		the string of "bored", increase the value of the unhappyCustomers
		variable by 1
	*/
	else if (feedback.includes("disappointed") || feedback.includes("bored")) {
		unhappyCustomers++
	}
}

console.log(`Happy customers: ${happyCustomers}
Unhappy customers: ${unhappyCustomers}
`)