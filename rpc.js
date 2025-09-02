var humanScore = 0
var computerScore = 0

function computerChoice(){
    const choices = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function humanChoice(){
    //const userInput = prompt("Enter RPS: ");
    const userInput = "rock"
    return userInput;
}

function play(human, computer){
    if(computer == "scissor" && human == "rock"){
        humanScore += 1;
        console.log(`human:${human} x computer:${computer} =  human win`);
    }
    else if(computer == "scissor" && human == "paper"){
        computerScore += 1;
        console.log(`human:${human} x computer:${computer} = computer win`);
    }
    else if(computer == "rock" && human == "paper"){
        computerScore += 1;
        console.log(`human:${human} x computer:${computer} = computer win`);
    }
    else if(computer == "rock" && human == "scissor"){
        computerScore += 1;
        console.log(`human:${human} x computer:${computer} = computer win`);
    }
    else if(computer == "paper" && human == "rock"){
        computerScore += 1;
        console.log(`human:${human} x computer:${computer} = computer win`);
    }
    else if(computer == "paper" && human == "scissor"){
        humanScore += 1;
        console.log(`human:${human} x computer:${computer} = human win`);
    }
    else{
        console.log(`human:${human} x computer:${computer} =  Draw`);
    }
}

function playGame(){
    for(let i=1;i<=5;i++){
        human = humanChoice();
        computer = computerChoice();
        play(human, computer)
        console.log(humanScore, computerScore);
    }
    if(humanScore>computerScore){
        console.log("Human win");
    }
    else if(humanScore==computerScore){
        console.log("Draw");
    }
    else{
        console.log("Computer win");
    }
}
playGame();