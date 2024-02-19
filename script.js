let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, compGuess, targetNum) => {
  const humanDifference = Math.abs(targetNum - humanGuess);
  const computerDifference = Math.abs(targetNum - compGuess);

  if (humanDifference <= computerDifference) {
    return true; // Human player wins or it's a tie
  } else {
    return false; // Computer wins
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

//console.log(advanceRound());
//console.log(updateScore('human'));   // To test the code