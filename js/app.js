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

// created a varibles for dorpdown list values
let valuesOfQuotes = document.querySelector("#QuotesNumbers");
let numberOfQuotes = parseInt(document.querySelector("#QuotesNumbers").value);

// tested some case with eventListener!
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

// A function to random the quotes!
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// built a function to get the number of generated quotes from the dropdown list
const getQuotesNumber = () => {
    valuesOfQuotes.addEventListener('change', (e)=>{
    numberOfQuotes = parseInt(e.target.value);
    })
    return numberOfQuotes
  }
 
  // built a function to get value of checked quotes type!  
const getQuotesValue = () => {
  if (document.querySelector("#TechRadioBtn").checked){
    return document.querySelector("#TechRadioBtn").value;
  } else if (document.querySelector("#SportRadioBtn").checked) {
    return document.querySelector("#SportRadioBtn").value;
  } else {
    return alert('Nothing has checked!')
  }
}




