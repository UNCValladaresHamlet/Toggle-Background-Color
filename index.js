// Target / Create Element
const button = document.getElementById("button");
const color = document.querySelector(".color");
const colors = ["green", "yellow", "red", "blue", "pink" ]

button.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

})

let getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

