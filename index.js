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
        if(result === this.id){
            console.log("tie");   
        } else{
            console.log("won");   
        }
    })
})


// console.log(result);


