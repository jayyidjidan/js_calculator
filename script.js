    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const resetButton = document.getElementById('reset');
    const countButton = document.getElementById('count');

    let currentInput = '';

    // Add event listeners for buttons
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            
            // Clear the display if AC is clicked
            if (value === 'AC') {
                currentInput = '';
                display.value = '';
            }
            // Calculate result when "=" is clicked
            else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();  // Use eval to evaluate the expression
                    display.value = currentInput;
                } catch (e) {
                    display.value = 'Error';  // If there's an error, show 'Error'
                    currentInput = '';  // Reset the current input after error
                }
            } 
            // Handle normal numbers and operators
            else {
                currentInput += value;
                display.value = currentInput;  // Update the display
            }
        });
    });
