const RPSArray = ['rock', 'paper', 'scissors']
const NUMBER_ROUNDS = 3
function getComputerChoice() {
    return RPSArray[Math.floor(Math.random() * RPSArray.length)];
}

function getPlayerChoice() {
    let playerInput = ''
    while (RPSArray.indexOf(playerInput) < 0) {
        playerInput = prompt('Please choose from rock, paper, scissors').toLowerCase()
    }
    return(playerInput)
}

function round(playerChoice, computerChoice) {
    if (didPlayerWin(playerChoice, computerChoice) === 'tie') {
        round(getPlayerChoice(), getComputerChoice())
    } else {
        return didPlayerWin(playerChoice, computerChoice) === 'win'
    }
}

function didPlayerWin(playerChoice, computerChoice) {
    console.log()
    if (playerChoice === computerChoice) {
        console.log('You tied')
        return 'tie'
    } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'scissors' && computerChoice === 'rock') || playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lost')
        return 'lose'
    } else {
        console.log('You won')
        return 'win'
    }
}

function game() {
    let playerWins = 0
    let computerWins = 0
    const winsNeeded = Math.ceil(NUMBER_ROUNDS/2)
    while ((playerWins < winsNeeded) && (computerWins < winsNeeded)) {
        if (round(getPlayerChoice(), getComputerChoice())) {
            console.log('Congrats, you win this round!')
            playerWins++
        } else {
            console.log('You lose this round!')
            computerWins++
        }
    }
    if (playerWins > computerWins) {
        return 'Congrats, you beat the computer!'
    } else {
        return 'You lost to a robot.'
    }
}
// console.log(getPlayerChoice())
// console.log(getComputerChoice())

// console.log(round(getPlayerChoice(), getComputerChoice()))

alert(game())