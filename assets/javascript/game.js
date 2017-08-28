    


// 2. Get User input (pick of any letter) - store in variable for later use

// 3. Creates an array that lists out all of the options (all the letters of the alphabet).
 
	var computerChoices = "abcdefghijklmnopqrstuvwxyz".split(""); 

// 4. Creating variables to hold the number of wins, losses, and guesses. They start at 0.
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;

// 5. Function for when user presses a key
	document.onkeyup = function(event) {

// 6. Determines what key was pressed
	var userGuess = event.key;


// 7. Randomly chooses a choice from the options array. This is the Computer's choice of letter.
    var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	// 8. Create a function that tells user if they guessed correct letter of the alphabet
	// if user guess is equal to computers choice, that is a win and game resets
	// if user guess is not equal to computers choice, that is a loss and number of guesses left is subtracted by 1
	// if number of guesses left is equal to zero, this counts as a loss and the game resets
		console.log(userGuess)

	
	}
