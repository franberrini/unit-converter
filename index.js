let inputText = document.getElementById("input-text")
let inputBtn = document.getElementById("input-btn")

let lengthText = document.getElementById("length")
let volumeText = document.getElementById("volume")
let massText = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

inputBtn.addEventListener("click", function(){
    let inputValue = inputText.value

    lengthText.textContent = `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(2)} feet`
    volumeText.textContent = `${inputValue} liters = ${(inputValue * literToGallon).toFixed(2)} gallons`
    massText.textContent = `${inputValue} kilograms = ${(inputValue * kiloToPound).toFixed(2)} pounds`
})