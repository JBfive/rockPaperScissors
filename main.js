const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log("555 Error: User input not valid");
  }
}

const getComputerChoice = () => {
  const computer = Math.floor(Math.random() *3);
  switch (computer) {
    case 0 :
      compChoice = 'rock';
    break;
    case 1 : 
      compChoice = 'paper';
    break;
    case 2 :
      compChoice = 'scissors';
    break;
    default:
    break;
  }
  return compChoice;
}


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie!";
  }
  if (userChoice === 'bomb') {
    return "User cheated, but won anyway.";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer won.";
    }
    else {
      return "User won.";
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer won.";
    }
    else {
      return "User won.";
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer won.";
    }
    else {
      return "User won.";
    }
  }
}

//console.log(determineWinner(getUserChoice('Rock'), getComputerChoice()));

const playGame = () => {
  const userChoice = getUserChoice('Rock');
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();