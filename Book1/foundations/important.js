// how to test the console log //////////////////
// ! node main.js

// push -> The push() method in JavaScript is used to add one or more elements to the end of an array and returns the new length of the array. 

// JavaScript code uses the console.log() method to output a message to the browser console, which is a developer tool used for debugging and troubleshooting code.

// ? ${} 
    // ${variable} 
    // The ${} syntax inside the backticks is used to interpolate the value of the totalRainfall variable into the string.


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
