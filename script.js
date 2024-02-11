function getComputerChoice(){
    let choices=["rock","paper","scissor"];
    let choice=Math.floor(Math.random()*choices.length)+1;
    switch  (choice) {
        case 1:
            return choices[0];         
        case 2:
            return choices[1];    
        case 3:           
            return choices[2];
    }
}
   function round (computerChoice,playerChoice){
    if(playerChoice=="rock"){
        if(computerChoice=="paper")
            return "You Lose! "+computerChoice+" beats "+playerChoice;
        else if (computerChoice=="rock")
             return "You Tied! "+computerChoice+" ties "+playerChoice;
        else 
            return "You Won! "+playerChoice+" beats "+computerChoice;
   }
   else if (playerChoice=="paper"){
        if(computerChoice=="scissor")
            return "You Lost! "+computerChoice+" beats "+playerChoice;
        else if (computerChoice=="rock" )
            return "You Won! "+playerChoice+" beats "+computerChoice;
        else 
            return "You Tied! "+computerChoice+" ties "+playerChoice;
   }
   else if (playerChoice=="scissor"){
    if (computerChoice=="paper")
        return "You Won! "+playerChoice+" beats "+computerChoice;
    else if (computerChoice=="rock")
        return "You Lost! "+computerChoice+" beats "+playerChoice;
    else 
         return  "You Tied! "+computerChoice+" ties "+playerChoice;
}
}
function game(){
    let wincount=0;
    let answer;
    for(let i=1;i<=5;i++){
        while(true){
            answer=prompt("Enter your choice: ");
            answer=answer.toLowerCase();
            console.log(answer);
            if(answer!="rock"&&answer!="paper"&&answer!="scissor"){            
                alert("Enter a valid choice!");
            }
            else
                break;
            
        }
       
         let result=round(getComputerChoice(),answer);
            alert(result);
            if(result.charAt(4)=='W'){
                wincount++;
            }
          
    }
    alert(wincount>2 ? "you won "+wincount+" rounds. you have won":"you won "+wincount+" rounds. you have lost");
}
game();
