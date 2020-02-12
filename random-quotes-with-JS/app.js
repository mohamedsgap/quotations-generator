// storing quotes as fragments inside an object
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

// function takes quote type and number and return random generated quote.
function generateQuotes(quotesType, quotesNumber) {
    let generatedQuotes = [];
    if (quotesNumber >= 1 && quotesNumber <= 5) {
        for (let i = 0; i < quotesNumber; i++) {
            const beginQuotes = quotes[`${quotesType}`].begin[Math.floor(Math.random() * 10)]
            const middleQuotes = quotes[`${quotesType}`].middle[Math.floor(Math.random() * 10)]
            const endQuotes = quotes[`${quotesType}`].end[Math.floor(Math.random() * 10)]

            generatedQuotes.push(`${beginQuotes} ${middleQuotes} ${endQuotes}`);
        }
        
    return generatedQuotes.map(quote => {
        console.log(quote);
    });

    } else {
        console.log("Please, input a number between 1-5");
    }      
}

// test     
generateQuotes("tech", 3);











