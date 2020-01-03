// import quotations list!
import quotations from './quotations.js';

// change the backgroudColor of generateButton when the mouse over and out! 
const generateButton = document.querySelector('.btn');

generateButton.addEventListener('mouseover', () => {
    generateButton.style.backgroundColor= "crimson";
})

generateButton.addEventListener('mouseout', () => {
    generateButton.style.backgroundColor= "chocolate";
})

console.log(typeof quotations)
