// Target / Create Element
// Update With Text, Style, Attribute
// Append It To The DOM
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //Array of numbers and beginning 6 Letters that make up hex code
const button = document.getElementById("button"); 
const color = document.querySelector(".color");

//Added Eventlistener to the button with a function that changes the background color of HTML page
button.addEventListener("click", function () {  
    // console.log(randomNumber) //shows us the random number produced in browser console

    let hexColor = "#"; //created a variable hexColor to be our starting string
    for (let index = 0; index < 6; index++) { //for loop goes through array, EX: #ffffff 6 is the length of how many variables it takes to produce a hex code
        hexColor += hex[getRandomNumber()]; // function produces a random number which becomes the index position of the array (hex). Loop goes through it 6 times and produces the random hexcode
    }
    color.textContent = hexColor; //Random hex number is attached to the text content of the color element
    document.body.style.backgroundColor = hexColor; //the background the 
})

let getRandomNumber = () => { //produces a random number
    return Math.floor(Math.random() * hex.length) 
}
//The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).
//The length property sets or returns the number of elements in an array.
