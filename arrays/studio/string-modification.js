const input = require('readline-sync');
const testLetter = input.question('How many letters will be relocated?')
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let secondString = str.slice(3,10);
let thirdString = str.slice(0,3);
fourthString = secondString.concat(thirdString,);
console.log(fourthString);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
