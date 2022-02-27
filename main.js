// create a function to generate a choice of the user //
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

// test out function.  Should return lowercased and error //
// console.log(getUserChoice('Paper'));
// console.log(getUserChoice('RoCk'));
// console.log(getUserChoice('scissorS'));
// console.log(getUserChoice('Socks'));

// create a function to generate a choice for the computer //
const getComputerChoice = () => {
  num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// test out function //
// console.log(getComputerChoice()); //

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'User wins!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'User wins!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'User wins!';
  } else if (userChoice === 'bomb') {
    return 'User wins!';
  } else {
    return 'Computer wins!';
  }
}

// test out function //
// console.log(determineWinner('rock', 'scissors')); // user wins //
// console.log(determineWinner('rock', 'rock')); // tie //
// console.log(determineWinner('rock', 'paper')); // computer wins //

const playGame = (userChoice, computerChoice) => {
  userChoice = getUserChoice('paper'); // test it out with paper for the user //
  console.log(`User played ${userChoice}.`);
  computerChoice = getComputerChoice();
  console.log(`Computer played ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
