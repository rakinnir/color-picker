const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

// triggering the button
btn.addEventListener("click", function () {
  colorCode = "#"
  for (let i = 0; i < 6; i++) {
    randomNumber = getRandomNumber()
    colorCode += hex[randomNumber]
  }
  document.body.style.background = colorCode
  color.textContent = colorCode
})

// getting random number between 1-15
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
