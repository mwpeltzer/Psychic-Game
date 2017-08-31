


// 2. Get User input (pick of any letter) - store in variable for later use

// 3. Creates an array that lists out all of the options (all the letters of the alphabet).
 
	var computerChoices = "abcdefghijklmnopqrstuvwxyz".split(""); 

// 4. Creating variables to hold the number of wins, losses, guesses lest and guesses so far. They start at 0.
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var guessesSofar = []; //array to capture guessed letters

		var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('Computer: ', computerRandom);	


// 5. Function for when user presses a key
	document.onkeyup = function(event) {
		
// 6. Determines what key was pressed
	var userGuess = event.key;
	console.log(userGuess);
// 7. stores your guess in the array
	guessesSofar.push(guessesSofar);  
	
// i need to create something that tells the computer what letters are selected 
// so that it knows when they match or not...
// Only run the code if these variables are true!!!

// If user guess = computer random, user gets a + 1 in wins, guessesLeft resets
		if (userGuess === computerRandom) {
			wins++;
			guessesLeft = 9;
			console.log(wins);
// If guesses left = 0, losses gets + 1 
		} else if (guessesLeft === "0") {
		  losses++; 
		  guessesLeft = 9;
		  console.log(losses);
// If none of the above is true, guesses left gets - 1 
		} else {
			guessesLeft--; 
			console.log(guessesLeft);
		}

// Need to figure out how to make the process repeat if one of the conditions is met

	// Displaying tallies in html

			 var html = //"<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSofar +
        "</p>";
		
			
	document.querySelector('#game').innerHTML = html; 


	};

// FOR LOOP THE TALKS TO THE IF STATEMENT!!!!!


