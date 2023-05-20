function getComputerChoice(){
    const max = 3;
    let randomNb = Math.floor(Math.random() * max);
    if (randomNb == 0)
        return 'R';
    else if (randomNb == 1)
        return 'P';
    else if (randomNb == 2)
        return 'S';
}

function getPlayerChoice()
{
    let PlayerChoice = prompt("R for Rock , P for paper & S for scissors : ");
    if (PlayerChoice != 'R' && PlayerChoice != 'P' && PlayerChoice != 'S')
    {
        let bool = false;
        while(bool == false)
        {
            alert("choose one of : R P S ");
            PlayerChoice = prompt("R for Rock , P for paper & S for scissors : ");
            if ( PlayerChoice == 'R' || PlayerChoice == 'P' || PlayerChoice == 'S')
                bool = true;
        }
    }
    return PlayerChoice;
}

function OneRound(PlayerChoice,ComputerChoice)
{
    const rock     = 'R';
    const paper    = 'P';
    const scissors = 'S';

    console.log("player choice is : ",PlayerChoice);
    console.log("computer choice is : ",ComputerChoice);

    if((PlayerChoice == rock && ComputerChoice == scissors) || (PlayerChoice == paper && ComputerChoice == rock) || (PlayerChoice == scissors && ComputerChoice == paper))
    {
        console.log("player wins !!!");
    }
    else if ((PlayerChoice == rock && ComputerChoice == rock) || (PlayerChoice == paper && ComputerChoice == paper) || (PlayerChoice == scissors && ComputerChoice == scissors)){
        console.log("same choices")
    }
    else 
    {
        console.log("computer wins x__x ");
    }
}

OneRound(getPlayerChoice(),getComputerChoice());
// console.log("computer choice is : ",getComputerChoice());
// console.log("player choice is : ",getPlayerChoice());