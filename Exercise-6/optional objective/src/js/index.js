/* Okay, before you panic over the amount of code, take a small break. When you come
We will go through each set of lines one at a time. */

let numSquares = 9;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = randomColorG();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let livesDisplay = document.querySelector("#current-lives");
let scoreDisplay = document.querySelector("#score-message");
let easyBtn = document.querySelector("#easyBtn");
let mediumBtn = document.querySelector("#mediumBtn");
let hardBtn = document.querySelector("#hardBtn");
let continueButton = document.querySelector("#continueBtn");
let lives = 5;
let score = 0;
scoreDisplay.textContent = score;
livesDisplay.textContent = lives;

/* The text above sets up all the variables to be used in this program. 
What each variable does in short is:
	numSquares = The number of squares used in the program.
	colors = An array that stores all of the random colors
	squares = Returns all of the squares within the html.
	pickedColor = Selects a color from the colors array.

	colorDisplay = Displays what RGB value the player has to find.
	messageDisplay = Displays if the player selects the right color.
	livesDisplay = Displays the amount of lives the player has.
	scoreDisplay =  Displays the current score of the player.

	resetbutton = Resets the current colors, selected color, score, and 
	lives of the player.
	easyBtn = Selects the easy difficulty, where there are 3 boxes.
	mediumBtn = Selects the medium difficulty, where there are 6 boxes.
	hardBtn = Selects the hard difficulty, where there are 9 boxes.
	continueButton = Continues the game, adding one point to the score counter
	
	lives = Stores the amount of lives the player has.
	score = Stores the current score of the player. 

The querySelector() returns the first Element within the document that matches the 
specified selector, or group of selectors
*/

easyBtn.addEventListener("click", function(){
	appeardisplay()
	//This reveals any squares that were hidden during another game.

	hardBtn.classList.remove("selected");
	mediumBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//This highlight the button to show what is selected.
	
	numSquares = 3;
	score = 0;
	lives = 5;
	//These set the values of each game mechanic.

	colors = generateRandomColors(numSquares);
	//This generates colors for each square.

	pickedColor = randomColorG();
	//Changes the current selected color.

	scoreDisplay.textContent = score;
	livesDisplay.textContent = lives;
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	/* These display the current score and lives to the player, in addition to revealing
	the selected color to find and the message displayed. */

	continueButton.style.display = "none";
	//This removes the continue button if it is there.

	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	/* loop through each square and reset colors while displaying none for squares without 
	new reset colors. */
});

mediumBtn.addEventListener("click", function(){
	appeardisplay()

	hardBtn.classList.remove("selected");
	mediumBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	numSquares = 6;
	score = 0;
	lives = 5;

	colors = generateRandomColors(numSquares);

	pickedColor = randomColorG();

	scoreDisplay.textContent = score;
	livesDisplay.textContent = lives;
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";

	continueButton.style.display = "none";

	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	appeardisplay()

	easyBtn.classList.remove("selected");
	mediumBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	numSquares = 9;
	score = 0;
	lives = 5;
	
	colors = generateRandomColors(numSquares);

	pickedColor = randomColorG();

	scoreDisplay.textContent = score;
	livesDisplay.textContent = lives;
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";

	continueButton.style.display = "none";

	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	//Add initial colors to squares in the html.
	
	squares[i].addEventListener("click", function buttonclick(){
	//Add click listeners to squares to make them interactable.

		let clickedColor = this.style.backgroundColor;
		//Grab color of clicked square.

		console.log(clickedColor, pickedColor);
		//Compare the selected color to the color that was picked color.

		if(clickedColor === pickedColor){
		//checks if the clicked color is equal to the picked color.

			messageDisplay.textContent = "Correct!";
			/* Change the message inside the display to Correct! to indicate that the user 
			selected the right rbg values. */

			changeColors(clickedColor);
			continueButton.style.display = "inline";
			/* changes the color of the squares to the winning color 
			and reveals the continue button. */ 
		}	
		else {
			lives = lives - 1;
			//Deducts the player's life by 1.

			this.style.backgroundColor = "#232323";
			//Changes the background of the wrong button. 

			messageDisplay.textContent = "Try Again";
			livesDisplay.textContent = lives;
			//Updates the messages of the messageDisplay and livesDisplay.

			if (lives === 0) {
			//Checks if lives equal to 0.
				
				messageDisplay.textContent = "Game Over";
				//Checks if message to state "Game Over". 

				nonedisplay();
				//Hides all of the squares.

				scoreDisplay.textContent = score;
				//Updates the score display.
			}
		}
		});
}

function nonedisplay(){
	for(let i = 0; i < squares.length; i++){
		squares[i].style.display = "none";
	}	
	//Hides all of the squares.
}

function appeardisplay(){
	for(let i = 0; i < squares.length; i++){
		squares[i].style.display = "inline";
	}	
	//Reveals all of the squares.
}

function changeColors(colorz){

	for(let i = 0; i < squares.length; i++){
	//loop through all of the squares.
		
		squares[i].style.background = colorz;
		//Changes each color to match given color.
	}	
}

function randomColorG(){
	let random = Math.floor(Math.random() * colors.length)
	//pick a random number for the selection of picked color.
	return colors[random];
}

function generateRandomColors(genColor){
	let arr = []
	//creates an array.

	for(let i = 0; i < genColor; i++){
	//repeat a certain amount of times proportional to the amount of squares
		arr.push(randomColor())
		// get random color and push it into array.
	}
	return arr;
	//return the array to colors.
}

function randomColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	//selects a number from 0 - 255 to get the rgb colors.

	return "rgb(" + r +", " + g +", " + b +")";
	//returns the rgb colors.
}

continueButton.addEventListener("click", function(){
	//Continues the current game session.

	continueButton.style.display = "none";
	//Hides the continue button.
	
	++score;
	//Adds 1 point to the score.
	
	colors = generateRandomColors(numSquares);
	//Generates a new set of random colors.

	pickedColor = randomColorG();
	//Selects one of the colors to be found.

	scoreDisplay.textContent = score;
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//Updates the current vales of score, color, and message.

	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//Colors in the squares with the array of colors.
})