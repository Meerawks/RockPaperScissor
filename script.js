const icon1=document.querySelector('#icon-1');
const icon2=document.querySelector('#icon-2');
const icon3=document.querySelector('#icon-3');
const fillBar=document.querySelector('#fill-bar2');
const turnIcon=document.querySelector('#round');
const playerRockIcon=document.createElement('img');
const textResult=document.querySelector('#result-text');

playerRockIcon.src='./images/rock.png';
playerRockIcon.style.width=150+ "px";
const playerPaperIcon=document.createElement('img');
playerPaperIcon.src='./images/paper.png';
playerPaperIcon.style.width=150+ "px";
const playerScissorIcon=document.createElement('img');
playerScissorIcon.src='./images/scissor.png';
playerScissorIcon.style.width=150+ "px";
const btnRetry=document.querySelector('button');

let width = fillBar.offsetWidth;
let parentWidth =fillBar.offsetParent.offsetWidth;
let percent = Math.round(100 * width / parentWidth);


let playerScore=0;
let computerScore=0;

function getComputerChoice(){
    let choices=["rock","paper","scissor"];
    let choice=Math.floor(Math.random()*choices.length)+1;
    switch  (choice) {
        case 1:
            turnIcon.appendChild(playerRockIcon.cloneNode(true));
            return choices[0];  
            
        case 2:
            turnIcon.appendChild(playerPaperIcon.cloneNode(true));
            return choices[1];    
        case 3:           
             turnIcon.appendChild(playerScissorIcon.cloneNode(true));
            return choices[2];
    }
}
function moveFill (winner, playerChoice, computerChoice){
    if(winner=="player"){      
        playerScore++;
        document.querySelector('#player-score').innerText="Your score:";
        document.querySelector('#player-number').innerText=playerScore;
        percent+=10;
        fillBar.style.width=percent + "%";
        console.log(percent,winner);
        textResult.style.color='#15F5BA';

        return "You Won! "+playerChoice+" beats "+computerChoice;
    }
    else {
        computerScore++;
        document.querySelector('#computer-score').innerText="Computer's score:";
        document.querySelector('#computer-number').innerText=computerScore;
        percent-=10;
        fillBar.style.width=percent + "%";
        console.log(percent,winner);
        textResult.style.color='red';
        return "You Lose! "+computerChoice+" beats "+playerChoice;
    }
 
   
}
   function round (playerChoice,computerChoice){
    if(playerChoice=="rock"){
        if(computerChoice=="paper"){
            return moveFill("computer",playerChoice,computerChoice);
           
        }
        else if (computerChoice=="rock"){
            textResult.style.color='white';
             return "You Tied! "+computerChoice+" ties "+playerChoice;
            
            }
        else {
            return moveFill("player",playerChoice,computerChoice);
          
        
        }
   }
   else if (playerChoice=="paper"){
        if(computerChoice=="scissor"){
            return moveFill("computer",playerChoice,computerChoice);
            
        }
        else if (computerChoice=="rock" ){
            return moveFill("player",playerChoice,computerChoice);
           
        }
        else {
            textResult.style.color='white';
            return "You Tied! "+computerChoice+" ties "+playerChoice;
        }
   }
   else if (playerChoice=="scissor"){
    if (computerChoice=="paper"){
        return moveFill("player",playerChoice,computerChoice);
        
    }
    else if (computerChoice=="rock"){
        return moveFill("computer",playerChoice,computerChoice);
       
    }
    else {
         textResult.style.color='white';
         return  "You Tied! "+computerChoice+" ties "+playerChoice;
     }

}
}
    function checkWin(){
       if (playerScore==5){
        turnIcon.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 12px #15F5BA)");
        document.querySelector('#result-text').innerText="Hurray! You have Won the game";
     
       }
       else if(computerScore==5){
        turnIcon.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 12px red)");
       document.querySelector('#result-text').innerText="OOPS! You just lost to a computer";
   
       }
     
    }

    function makeAMove(move){
        if(playerScore!=5&&computerScore!=5){
            while (turnIcon.firstChild) {
                turnIcon.removeChild(turnIcon.lastChild);
              }
              switch  (move) {
                case "rock":
                    turnIcon.appendChild(playerRockIcon);
                    break;
                    
                case "paper":
                    turnIcon.appendChild(playerPaperIcon);
                    break;
                        
                case "scissor":           
                    turnIcon.appendChild(playerScissorIcon);
                break;
                
            }
            let result=round(move,getComputerChoice());
            textResult.innerText=result;
           
            checkWin();
            console.log(playerScore)
            }
    }

    icon1.addEventListener('click', () => {
        makeAMove("rock");
    })
    icon2.addEventListener('click', () => {
        makeAMove("paper");
    })
    icon3.addEventListener('click', () => {
        makeAMove("scissor");S
    })
   btnRetry.addEventListener('click', ()=>{
        playerScore=0;
        computerScore=0;
        document.querySelector('#computer-number').innerText=computerScore;
        document.querySelector('#player-number').innerText=playerScore;
        textResult.innerText='First to reach 5 score wins';
        percent=50;
        fillBar.style.width=percent + "%";
        turnIcon.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 0px #1A0D3C)");
   })

