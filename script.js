const icon1=document.querySelector('#icon-1');
const icon2=document.querySelector('#icon-2');
const icon3=document.querySelector('#icon-3');
const fillBar=document.querySelector('#fill-bar2');
const turnIcon=document.querySelector('#round');
const playerRockIcon=document.createElement('img');
const computerRockIcon=document.createElement('img');
const computerPaperIcon=document.createElement('img');
const computerScissorIcon=document.createElement('img');
const textResult=document.querySelector('#result-text');
var correctAudio=new Audio('win.mp3');
correctAudio.preload='auto';
correctAudio.load();
const loseAudio=new Audio('lose.mp3');
loseAudio.preload='auto';
loseAudio.load();
playerRockIcon.src='./images/playerrock.png';
computerRockIcon.src='./images/rock.png';
computerRockIcon.style.width=150+ "px";
playerRockIcon.style.width=150+ "px";
const playerPaperIcon=document.createElement('img');
playerRockIcon.classList.add('img-pop')
computerPaperIcon.src='./images/paper.png';
computerPaperIcon.style.width=150+ "px";
playerPaperIcon.src='./images/playerpaper.png';
playerPaperIcon.style.width=150+ "px";
computerScissorIcon.src='./images/scissor.png';
computerScissorIcon.style.width=150+ "px";
const playerScissorIcon=document.createElement('img');
playerScissorIcon.src='./images/playerscissor.png';
computerRockIcon.classList.add('computer-pop');
computerPaperIcon.classList.add('computer-pop');
computerScissorIcon.classList.add('computer-pop');
playerPaperIcon.classList.add('img-pop')
playerScissorIcon.classList.add('img-pop')
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
switch (choice) {
case 1:
turnIcon.appendChild(computerRockIcon);
return choices[0];

case 2:
turnIcon.appendChild(computerPaperIcon);
return choices[1];
case 3:
turnIcon.appendChild(computerScissorIcon);
return choices[2];
}
}
function moveFill (winner, playerChoice, computerChoice){
if(winner=="player"){
if(playerChoice=='rock'){
playerRockIcon.classList.add('winner');
}
else if(playerChoice=='paper'){
playerPaperIcon.classList.add('winner');
}
else {
playerScissorIcon.classList.add('winner');
}
let remainPercent=100-percent;
console.log(remainPercent);
let remainPlayerScore=5-playerScore;
console.log(remainPlayerScore);
let barLength=remainPercent/remainPlayerScore;
percent+=barLength;
playerScore++;
document.querySelector('#player-score').innerText="Your score:";
document.querySelector('#player-number').innerText=playerScore;
fillBar.style.width=percent + "%";
console.log(percent,winner);
textResult.style.color='#15F5BA';
return "You Won! "+playerChoice+" beats "+computerChoice;
}
else {
if(computerChoice=='rock'){
console.log('computer selected rock');
computerRockIcon.classList.add('winner');
}
else if(computerChoice=='paper'){
computerPaperIcon.classList.add('winner');
}
else {
computerScissorIcon.classList.add('winner');
}
let remainPercent=percent;
console.log(remainPercent);
let remainComputerScore=5-computerScore;
console.log(remainComputerScore);
let barLength=remainPercent/remainComputerScore;
percent-=barLength;
computerScore++;
document.querySelector('#computer-score').innerText="Computer's score:";
document.querySelector('#computer-number').innerText=computerScore;

fillBar.style.width=percent + "%";
console.log(percent,winner);
textResult.style.color='red';
return "You Lose! "+computerChoice+" beats "+playerChoice;
}


}
function removeClass(){
playerRockIcon.classList.remove('winner');
playerPaperIcon.classList.remove('winner');
playerScissorIcon.classList.remove('winner');
computerRockIcon.classList.remove('winner');
computerScissorIcon.classList.remove('winner');
computerPaperIcon.classList.remove('winner');
}
function round (playerChoice,computerChoice){
removeClass();
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
return "You Tied! "+computerChoice+" ties "+playerChoice;
}

}
}
function checkWin(){
if (playerScore==5){
correctAudio.play();
turnIcon.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 12px #15F5BA)");
document.querySelector('#result-text').innerText="Hurray! You have Won the game";

}
else if(computerScore==5){
loseAudio.play();
turnIcon.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 12px red)");
document.querySelector('#result-text').innerText="OOPS! You just lost to a computer";

}

}

function makeAMove(move){
if(playerScore!=5&&computerScore!=5){
while (turnIcon.firstChild) {
turnIcon.removeChild(turnIcon.lastChild);
}
switch (move) {
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

makeAMove("scissor");
})
btnRetry.addEventListener('click', ()=>{
playerScore=0;
computerScore=0;
while (turnIcon.firstChild) {
turnIcon.removeChild(turnIcon.lastChild);
}
document.querySelector('#computer-number').innerText=computerScore;
document.querySelector('#player-number').innerText=playerScore;
textResult.innerText='First to reach 5 score wins';
textResult.style.color='white';
percent=50;
fillBar.style.width=percent + "%";
removeClass();
turnIcon.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 0px #1A0D3C)");
})
