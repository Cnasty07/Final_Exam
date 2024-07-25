// const mongoose = require("mongoose") // imports mongoose / mongo db
const onSubmitForm = document.querySelector("#submit") // finds submit button

onSubmitForm.addEventListener("submit", function (e) {
    const weight = document.querySelector("#weight").value // gets value of weight in kg
    const height = document.querySelector("#height").value // gets value of height in meters

    const BMI = weight / (height * height) // calculates the bmi to return
    // document.querySelector("#result").innerHTML.text = BMI.value
})
