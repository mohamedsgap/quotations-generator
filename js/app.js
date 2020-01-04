// change the backgroudColor of generateButton when the mouse over and out!
const generateButton = document.querySelector(".btn");

generateButton.addEventListener("mouseover", () => {
  generateButton.style.backgroundColor = "crimson";
});

generateButton.addEventListener("mouseout", () => {
  generateButton.style.backgroundColor = "chocolate";
});

// created a variable for tech quotes input.
const techInput = document.querySelector("#TechRadioBtn");

// created a variable for sport quotes input.
const sportInput = document.querySelector("#SportRadioBtn");

// created a varible for dorpdown list value
let valuesOfQuotes = document.querySelector("#QuotesNumbers");
let numberOfQuotes = parseInt(document.querySelector("#QuotesNumbers").value);

valuesOfQuotes.addEventListener('change', (e)=>{
    numberOfQuotes = parseInt(e.target.value);
    console.log(`The number of quotes equals ${numberOfQuotes}`);
})

techInput.addEventListener('change', ()=> {
    console.log(`${document.querySelector("#TechRadioBtn").value} has been checked`)
})

sportInput.addEventListener('change', ()=> {
    console.log(`${document.querySelector("#SportRadioBtn").value} has been checked`)
})
