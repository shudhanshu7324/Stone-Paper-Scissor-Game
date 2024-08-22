const crossBtn = document.querySelector('.cross-btn');
const gameRule = document.querySelector('.games-rule');
const ruleBtn = document.querySelector('.rules-btn');


crossBtn.addEventListener('click', ()=>{
    gameRule.style.visibility = 'hidden';
    crossBtn.style.visibility = 'hidden';
})

ruleBtn.addEventListener('click', ()=>{
    gameRule.style.visibility = 'visible';
    crossBtn.style.visibility = 'visible';
})


let computerScore = 0;
let yourScore = 0;

const cmpScore = document.getElementsByClassName('cmp-score');
const urScore = document.getElementsByClassName('ur-score');

cmpScore[0].innerText = computerScore;
urScore[0].innerText = yourScore;

const computer = ["paper","scissor","rock"];

function computerSelect(){
    const computerResult = computer[Math.floor(Math.random()*3)];
    return computerResult;
}



const buttons = document.querySelectorAll('.icon');

buttons.forEach(button=>{
    button.addEventListener('click', function(){
        const result = computerSelect();
        console.log("Pc choosed " ,result);
        console.log("You have choose " ,this.id);
        
        
        if((this.id === "rock" && result === 'scissor') || (this.id === 'scissor' && result === 'paper') || (this.id === 'paper' && result === 'rock')){
            console.log("You win");
            yourScore+=1;
            urScore[0].innerText = yourScore;
            const anchor = document.createElement('a');
            anchor.href = './pages/won.html';
            button.appendChild(anchor)
            anchor.click();
        }else if((this.id === "rock" && result === 'rock') || (this.id === 'scissor' && result === 'scissor') || (this.id === 'paper' && result === 'paper')){
            console.log("Math tie");
            const anchor = document.createElement('a');
            anchor.href = './pages/tie.html';
            button.appendChild(anchor)
            anchor.click();
        }else{
            console.log("pc win");   
            computerScore+=1;
            cmpScore[0].innerText = computerScore;
            const anchor = document.createElement('a');
            anchor.href = './pages/lose.html';
            button.appendChild(anchor)
            anchor.click();
        }
    })
})







