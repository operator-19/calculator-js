# calculator-js

This code implements a simple calculator using HTML, CSS, and JavaScript. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

The calculator consists of two display screens - one to show the current input and another to show the previous input and the operator used. The user can enter numbers using the number buttons and perform operations using the operator buttons. The decimal button allows the user to add decimal points to the current input.

The code uses event listeners to capture the user's input and perform the corresponding actions. Whenever a user clicks a number button, the handleNumber function is called to update the current input and display it on the screen. Whenever an operator button is clicked, the handleOperator function is called to update the operator and previous input, and clear the current input.

When the user clicks the equal button, the calculate function is called to perform the operation and update the previous input. If the previous input is greater than five characters, the display screen shows only the first five characters followed by an ellipsis.

The clear button resets the calculator, clearing all inputs and resetting the operator to an empty string.

Overall, this code demonstrates how to implement a basic calculator using JavaScript and provides a foundation for building more complex calculators.

This code utilizes various JavaScript techniques to implement a simple calculator, including:

DOM manipulation: selecting HTML elements and updating their content based on user input

Event listeners: capturing user input and performing corresponding actions

Functions: handling different aspects of calculator functionality, making the code more modular and organized

Variables: storing and manipulating data to keep track of the calculator's state and perform operations on it

Conditional statements: performing different actions based on the current state of the calculator

Math functions: converting strings to numbers and rounding results to three decimal places.

