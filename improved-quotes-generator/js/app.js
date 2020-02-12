const quotes = {
  tech: {
      begin: [
          "Any sufficiently advanced",
          "You never change things by fighting",
          "We are stuck with technology",
          "Please no matter how we advance technologically",
          "There will come a time when it isn't They are",
          "I know there's a proverb which that says",
          "Technological progress has merely",
          "It's supposed to be automatic",
          "The iPod completely",
          "Even the technology that promises to unite us",
      ],
      middle: [
          "technology is indistinguishable",
          "the existing reality To change something",
          "when what we really want is",
          "please don't abandon the boo",
          "spying on me through my phone anymore",
          "To err is human but a human error is nothing",
          "provided us with more efficient",
          "but actually you have",
          "changed the way",
          "divides us Each of us is now electronically connected to the globe"
      ],
      end: [
          "from magic",
          "build a new model that makes the existing model obsolete",
          "just stuff that works",
          "There is nothing in our material world more beautiful than the book",
          "Eventually it will be My phone is spying on me",
          "to what a computer can do if it tries",
          "means for going backwards",
          "to push this button",
          "people approach music",
          "and yet we feel utterly alone"
      ]
  },
  sport: {
      begin: [
          "Hard work beats talent",
          "It’s hard to beat",
          "Never say never because",
          "You have to expect",
          "There may be people that have more",
          "I became a good pitcher when I",
          "When you’ve got something",
          "Most people never run far",
          "I’ve failed over and over",
          "Do you know what my favorite"
      ],
      middle: [
          "when talent doesn’t",
          "a person who",
          "limits like fears are",
          "things of yourself",
          "talent than you but there’s no excuse",
          "stopped trying to make them miss the",
          "to prove there’s nothing",
          "enough on their first wind",
          "and over again in my life",
          "part of the game is"
      ],
      end: [
          "work hard",
          "never gives up",
          "often just an illusion",
          "before you can do them",
          "for anyone to work harder than you do",
          "ball and started trying to make them hit it",
          "greater than a challenge",
          "to find out they’ve got a second",
          "And that is why I succeed",
          "The opportunity to play"
      ]

  }
}

const generateButton = document.querySelector("#btn-generate");
const deleteButton = document.querySelector("#btn-delete");

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
valuesOfQuotes.addEventListener("change", e => {
  numberOfQuotes = parseInt(e.target.value);
});

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
    for (let i = 0; i < quotesNumber; i++) {
      let quoteText = document.createElement("p");
      const beginQuotes = quotes[`${quotesValue}`].begin[Math.floor(Math.random() * 10)]
      const middleQuotes = quotes[`${quotesValue}`].middle[Math.floor(Math.random() * 10)]
      const endQuotes = quotes[`${quotesValue}`].end[Math.floor(Math.random() * 10)]
      quoteText.innerHTML = `${beginQuotes} ${middleQuotes} ${endQuotes}`;
      quotesContainer.appendChild(quoteText);
    }
    document.body.appendChild(quotesContainer);
} 

generateButton.addEventListener("click", () => {
  generateQuotes(getQuotesNumber, getQuotesValue);
});

deleteButton.addEventListener("click", () => {
  quotesContainer.innerHTML = "";
  quotesContainer.parentNode.removeChild(quotesContainer);
});

