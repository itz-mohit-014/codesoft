
const displayScreen = document.getElementById('disply-screen');
// select all button as an node list for handle events
const buttons = document.querySelectorAll('button');
let currentInput = '';


buttons.forEach(button => {

  // used handle events for buttons
  button.addEventListener('click', () => {
    // used an variable to copy value
    const value = button.value;
    // used if-else statement to calculate value and perform operation
    if (value === '=') {
      try {
        currentInput = eval(currentInput);
        displayScreen.value = currentInput;
      } catch (error) {
        displayScreen.value = 'Error';
      }
    } 
    // for all clear
    else if (value === 'AC') {
      currentInput = '';
      displayScreen.value = '';
    } 
    // for delete digit one by one
    else if (value === 'del') {
      currentInput = currentInput.toString().slice(0, -1);
      
      displayScreen.value = parseFloat(currentInput);
    } 
    // for updating value 
    else {
      currentInput += value;
      displayScreen.value = currentInput;
    }
  });
});

