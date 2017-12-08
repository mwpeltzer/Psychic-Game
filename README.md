# Psychic-Game

##How To Play The Game

- Load the page

- Select any letter from the keyboard

- If you selected the correct letter, your wins will go up 

- If not, keep selecting until you are out of guesses

## Requirements

- Create a game that pits the user against the computer 

- Write a function that picks a random letter out of the alphabet

- Using an event listener, create another function that listeners to user input from the keyboard

- Push the input from the user to the html page that shows:
	- Total Wins
	- Losses
	- Guesses Left
	- Your Guesses Made So Far

## Technologies Used

Javascript

HTML


## Code Example

- Random Letter Generator

// Stores an array in the variable 'computerChoices' that lists lists and splits all the letters in the alphabet
 
	var computerChoices = "abcdefghijklmnopqrstuvwxyz".split(""); 

//  Creating variables to hold the number of wins, losses, guesses lest and guesses so far. They start at 0.
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var guessesSofar = []; //array to capture guessed letters

	var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('Computer: ', computerRandom);	

