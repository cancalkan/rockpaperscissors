let userScore      = 0;
let PcScore        = 0;
const pcchoise = getPcMove();
const UserScore_span = document.getElementById("user-score");
const PcScore_span   = document.getElementById("pc-score");
const ScoreBoard_div = document.querySelector(".score-board");
const Result_div     = document.querySelector(".result > p ");
const rock_div       = document.getElementById("rock");
const paper_div      = document.getElementById("paper");
const scissors_div   = document.getElementById("scissors");

function getPcMove(){
    const choices= ['rock', 'paper', 'scissors'];
    const randomnumber= Math.floor(Math.random()*3);
    return choices[randomnumber];
}
function uppercase(letter){
    if(letter=="rock") return "Rock" ;
    if(letter=="paper") return "Paper" ;
    if(letter=="scissors") return "Scissors" ;



}

function win(UserChoice, pcchoise){
    const UserChoice_div=  document.getElementById(UserChoice);
    userScore++;
    UserScore_span.innerHTML=userScore;
    PcScore_span.innerHTML=PcScore;
    Result_div.innerHTML= uppercase( UserChoice)+" beats "+uppercase(pcchoise)+ " . User Win!   ";
    UserChoice_div.classList.add('green-affect');
    setTimeout(function() {UserChoice_div.classList.remove('green-affect')}, 500);
}

function lose(UserChoice,pcchoise){
    const UserChoice_div=  document.getElementById(UserChoice);
    PcScore++;
    UserScore_span.innerHTML=userScore;
    PcScore_span.innerHTML=PcScore;
    Result_div.innerHTML= uppercase( pcchoise)+" beats "+uppercase(UserChoice)+ " . Computer Win!  ";
    UserChoice_div.classList.add('red-affect');
    setTimeout(function() {UserChoice_div.classList.remove('red-affect')}, 500);

}
function draw(UserChoice,pcchoise){UserScore_span.innerHTML=userScore;
    const UserChoice_div=  document.getElementById(UserChoice);
    Result_div.innerHTML= uppercase( pcchoise)+" equals "+uppercase(UserChoice)+ " . It is a Draw!  ";
    UserChoice_div.classList.add('gray-affect');
    setTimeout(function() {UserChoice_div.classList.remove('gray-affect')}, 500);
}
function move(UserChoice){
    const pcchoise = getPcMove();
    switch(UserChoice+pcchoise){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(UserChoice,pcchoise);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(UserChoice,pcchoise);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(UserChoice,pcchoise);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function()
{
    move("rock");
} )
paper_div.addEventListener('click', function()
{
    move("paper");
} )

scissors_div.addEventListener('click', function()
{
    move("scissors");
} )
}
main();
