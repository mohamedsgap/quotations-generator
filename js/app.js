
// change the backgroudColor of generateButton when the mouse over and out! 
const generateButton = document.querySelector('.btn');

generateButton.addEventListener('mouseover', () => {
    generateButton.style.backgroundColor= "crimson";
})

generateButton.addEventListener('mouseout', () => {
    generateButton.style.backgroundColor= "chocolate";
})



