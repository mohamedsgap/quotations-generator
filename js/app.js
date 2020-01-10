
const generateButton = document.querySelector("#btn-generate");
const deleteButton = document.querySelector('#btn-delete');

// change the backgroudColor of Buttons when  mouse over/out!

generateButton.addEventListener("mouseover", () => {
  generateButton.style.backgroundColor = "deeppink";
});

generateButton.addEventListener("mouseout", () => {
  generateButton.style.backgroundColor = "darkmagenta";
});

deleteButton.addEventListener("mouseover", () => {
  deleteButton.style.backgroundColor = "darkmagenta";
});

deleteButton.addEventListener("mouseout", () => {
  deleteButton.style.backgroundColor = "deeppink";
});

// created a variable for tech quotes input.
const techInput = document.querySelector("#TechRadioBtn");

// created a variable for sport quotes input.
const sportInput = document.querySelector("#SportRadioBtn");

// created a varibles for dorpdown list values
let valuesOfQuotes = document.querySelector("#QuotesNumbers");
let numberOfQuotes = parseInt(document.querySelector("#QuotesNumbers").value);

// checking that certained number of quotes has been selected.
valuesOfQuotes.addEventListener('change', (e)=>{
  numberOfQuotes = parseInt(e.target.value);
})

// A function to random the quotes!
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

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
  return numberOfQuotes;
};

// built a function to get value of checked quotes type!
const getQuotesValue = () => {
  if (document.querySelector("#TechRadioBtn").checked) {
    return techInput.value;
  } else if (document.querySelector("#SportRadioBtn").checked) {
    return sportInput.value;
  } else {
    return alert("Nothing has checked!");
  }
};

const quotesContainer = document.createElement("div");
quotesContainer.classList.add("quotes-container");

/// built a function to render some of quotes depend on the number and type!
function generateQuotes(getQuotesNumber, getQuotesValue) {
  let quotesNumber = getQuotesNumber();
  let quotesValue = getQuotesValue();
  const quoteType = ["tech", "sport"];

  if (quotesValue === quoteType[0]) {
    for (let i = 0; i < quotesNumber; i++) {
      let quoteText = document.createElement("p");
      shuffle(techQuotations);
      techQuotations.forEach(quoteObject => {
        quoteText.innerHTML = `${quoteObject.quotation} ${quoteObject.author}`;
      });
      quotesContainer.appendChild(quoteText);
    }
    document.body.appendChild(quotesContainer);

  } else if (quotesValue === quoteType[1]) {
    for (let i = 0; i < quotesNumber; i++) {
      let quoteText = document.createElement("p");
      shuffle(sportQuotations);
      sportQuotations.forEach(quoteObject => {
        quoteText.innerHTML = `${quoteObject.quotation} ${quoteObject.author}`;
      });
      quotesContainer.appendChild(quoteText);
    }
    document.body.appendChild(quotesContainer);
  }
}

generateButton.addEventListener("click", () => {
  generateQuotes(getQuotesNumber, getQuotesValue);
});

deleteButton.addEventListener('click', ()=> {
  quotesContainer.innerHTML = '';
  quotesContainer.parentNode.removeChild(quotesContainer);
})