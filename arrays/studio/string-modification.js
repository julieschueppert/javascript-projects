const input = require('readline-sync');
// let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// let secondString = str.slice(3,10);
// let thirdString = str.slice(0,3);
// let fourthString = secondString.concat(thirdString,);

//Use a template literal to print the original and modified string in a descriptive phrase.
// console.log((fourthString), 'translates to', (str), 'in pseudo-pig latin.');  

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// let str = input.question('What do you want to translate?');
// let lettersToRelocate = input.question('How many letters will be relocated?');
// let first3Letters = str.slice(0, lettersToRelocate);
// let removedLetters = str.slice(lettersToRelocate);
// let newString = removedLetters + first3Letters;

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let str = input.question('What do you want to translate?');
let lettersToRelocate = input.question('How many letters will be relocated?');

if(lettersToRelocate > str.length){
    let first3Letters = str.slice(0, 3);
    let removedLetters = str.slice(3);
    let newString = removedLetters + first3Letters;
    console.log("Can't do that many letters!");
} else {
    let first3Letters = str.slice(0, lettersToRelocate);
    let removedLetters = str.slice(lettersToRelocate);
    let newString = removedLetters + first3Letters;
    console.log((newString), 'translates to', (str), 'in pseudo-pig latin.');
}