const choices = document.querySelectorAll(".choices");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreBoard = {
    player: 0,
    computer: 0
};

function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }else if(rand <= 0.67){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function getWinner(p , c){
    if(p === c){
        return 'draw';
    }else if(p == 'rock'){
        if(c === 'paper'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if(p == 'paper'){
        if(c === 'scissors'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if(p == 'scissors'){
        if(c === 'rock'){
            return 'computer';
        }else{
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player'){
        scoreBoard.player++;
        // show modal result
        result.innerHTML = `
            <h1 class="text-win">You Won</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }else if(winner === 'computer'){
        scoreBoard.computer++;
       
        result.innerHTML = `
            <h1 class="text-win">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }else {
        result.innerHTML = `
            <h1>It's A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }

    // show score
    score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>
        `;
    
    modal.style.display = 'block';
}

function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}

function clearModal(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);