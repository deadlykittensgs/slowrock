
const options = ["rock","paper","scissors"];

function getComputerChoice() {

const choice = options [Math.floor(Math.random()* options.length)];
return choice;
}



function checkWinner (playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
    return "tie";
}

else if (
         (playerSelection ==  "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper"))

{
    return "player";
}

            else 
        {
                return "computer"
        }
}


function playRound (playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "tie")
{
    return "its a tie"
}
        else if (result ==  "player")
    {
            return `you win ${ playerSelection} beats ${computerSelection}`
    }
                else {
                        return `you lose ${computerSelection} beats ${playerSelection}`
                     }
}


function getPlayerChoice(){

    let validInput = false

while (validInput == false )
{
    const choice = prompt ("rock paper scissors");

if (choice == null){
    continue;
}
const choiceInlower = choice.toLowerCase()
if (options.includes(choiceInlower)){
    validInput == true;
    return choiceInlower;

}
}
}



function game ()
{
    console.log ("welcome")

    let scorePlayer = 0;
    let scoreComputer =0;

for (let i = 0; i < 5; i++){

        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection)); 


        if    (checkWinner(playerSelection, computerSelection == "player" ))
        {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection,computerSelection == "computer"))
        {
            scoreComputer++
        }
}
        console.log ("game over")

    if(scorePlayer > scoreComputer)
    {
    console.log ("player was the winner")
    }
    else if (scorePlayer < scoreComputer)
        {
        console.log ("computer wins")
        }
    else 
            {
    console.log ("its a tie");
            }

}

game ()





