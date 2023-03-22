# calculator-js

This code implements a simple calculator using HTML, CSS, and JavaScript. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

The calculator consists of two display screens - one to show the current input and another to show the previous input and the operator used. The user can enter numbers using the number buttons and perform operations using the operator buttons. The decimal button allows the user to add decimal points to the current input.

The code uses event listeners to capture the user's input and perform the corresponding actions. Whenever a user clicks a number button, the handleNumber function is called to update the current input and display it on the screen. Whenever an operator button is clicked, the handleOperator function is called to update the operator and previous input, and clear the current input.

When the user clicks the equal button, the calculate function is called to perform the operation and update the previous input. If the previous input is greater than five characters, the display screen shows only the first five characters followed by an ellipsis.

The clear button resets the calculator, clearing all inputs and resetting the operator to an empty string.

Overall, this code demonstrates how to implement a basic calculator using JavaScript and provides a foundation for building more complex calculators.

This code uses a variety of JavaScript techniques to implement a simple calculator, including:

DOM Manipulation: The code uses DOM manipulation techniques to select HTML elements and manipulate their content based on user input. For example, the code uses querySelector and textContent to select and update the content of various display screens, buttons, and other HTML elements.

Event Listeners: The code uses event listeners to capture user input and perform the corresponding actions. For example, the code uses forEach to loop through all the number and operator buttons, and add an event listener to each button that calls the corresponding handler function when the button is clicked.

Functions: The code defines several functions to handle different aspects of the calculator functionality, including handling numbers, operators, and calculations. The use of functions allows the code to be modular and organized, making it easier to read, maintain, and reuse.

Variables: The code uses variables to store and manipulate data, such as the current and previous input values, the operator, and the result of the calculation. The use of variables allows the code to keep track of the state of the calculator and perform operations on that state.

Conditional Statements: The code uses conditional statements to perform different actions based on the current state of the calculator. For example, the code uses if statements to check whether the current or previous input is empty before performing a calculation or displaying the result.

Math Functions: The code uses basic math functions, such as Number and Math.round, to convert strings to numbers and round the result of a calculation to three decimal places.


