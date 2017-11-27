// Create a variable humanScore. Give it a value of the number 0.
var humanScore = 0;
// Create a variable computerScore. Give it a value of the number 0.
var computerScore=0;
// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!
function play(humanPlay, computerPlay){


  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."
  console.log("You played " + humanPlay + " The bot played "  + computerPlay + ".");
  // If the human play is equal to the computer play
  if (humanPlay === computerPlay) {
    console.log("You tied. :|");
  }
  // Log "You tied. :|" to the console.
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
  // Log "You win! :)" to the console
  // Add one to the humanScore variable (be sure to use += )
  else if (humanPlay==="paper" && computerPlay==="rock" || humanPlay==="rock" && computerPlay==="scissors" || humanPlay==="scissors" && computerPlay==="paper") {
    console.log("You win! :)");
    humanScore+=1;
  }
  // Otherwise log "You lose! :(" to the console
  // Add one to the computerScore variable (be sure to use += )
  else {
    console.log("You lose! :(");
    computerScore+=1;
  }
  console.log("You have " + humanScore + " points");
  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  console.log("The bot has " + computerScore + " points");
  // For example: "The bot has 3 points"

  // END OF FUNCTION (Place the closing curly brace here!)
}
// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.
play("rock", "scissors");
play("paper", "rock");
play("scissors", "rock");
play("scissors", "paper");
play("paper", "scissors");
play("rock", "paper");

// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
