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
        return (["player wins !!!",1]);
    }
    else if ((PlayerChoice == rock && ComputerChoice == rock) || (PlayerChoice == paper && ComputerChoice == paper) || (PlayerChoice == scissors && ComputerChoice == scissors)){
        return (["same choices",2]);
    }
    else 
    {
        return (["computer wins x__x ",0]);
    }
}

const rock = document.querySelector('#r');
const paper = document.querySelector('#p');
const scissor = document.querySelector('#s');
let result = [];
const dashbord = document.querySelector('#dashbord');
let h2 = document.createElement('h2');
let score = document.createElement('h4');

dashbord.appendChild(h2);
dashbord.appendChild(score);

let scorePlayer = 0;
let scoreComputer = 0;
score.textContent = "Player : "+ scorePlayer + ", Computer : "+scoreComputer;


rock.addEventListener('click',()=>{
    if(scoreComputer == 5 || scorePlayer == 5)
    {
        score.textContent = "Player : "+ scorePlayer + ", Computer : "+scoreComputer;
        h2.textContent = "GAME OVER";
    }
    else 
    {

    
        result = OneRound('R',getComputerChoice());
        h2.textContent = result[0];
        if(result[1] == 0)
            scoreComputer = scoreComputer + 1;
        else if (result[1] == 1)
            scorePlayer = scorePlayer + 1;
        
        score.textContent = "Player : "+ scorePlayer + ", Computer : "+scoreComputer;
    }
});

scissor.addEventListener('click',()=>{
    if(scoreComputer == 5 || scorePlayer == 5)
    {
        score.textContent = "Player : "+ scorePlayer + ", Computer : "+scoreComputer;
        h2.textContent = "GAME OVER";
    }
    else 
    {

        result = OneRound('S',getComputerChoice());    
        h2.textContent = result[0];
        if(result[1] == 0)
            scoreComputer = scoreComputer + 1;
        else if (result[1] == 1)
            scorePlayer = scorePlayer + 1;
        
        score.textContent = "Player : "+ scorePlayer + ", Computer : "+scoreComputer;
    }
});

paper.addEventListener('click',()=>{

    if(scoreComputer == 5 || scorePlayer == 5)
    {
        score.textContent = "Player : "+ scorePlayer + ", Computer : "+scoreComputer;
        h2.textContent = "GAME OVER";
    }
    else 
    {

        result = OneRound('P',getComputerChoice());
        h2.textContent = result[0];
        if(result[1] == 0)
            scoreComputer = scoreComputer + 1;
        else if (result[1] == 1)
            scorePlayer = scorePlayer + 1;

        score.textContent = "Player : "+ scorePlayer + ", Computer : "+scoreComputer;
    }
});





// const div = document.createElement('div');
// div.classList.add('dashbord');


// console.log("computer choice is : ",getComputerChoice());
// console.log("player choice is : ",getPlayerChoice());