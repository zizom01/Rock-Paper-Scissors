const cat = "image 212.png";
const rock = "image 213.png";
const paper = "image 214.png";
const scissor = "image 215.png";
const horse = "image 216.png";
const btn = document.getElementById('start');
const player1 = document.getElementById('options');
const player2 = document.getElementById('player2');
const myImg = document.getElementById('myImg');
const opImg = document.getElementById('opImg');
const win = document.getElementById('win');
const scoreText = document.getElementById("score");
const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
    location.reload(); // Reloads the current page
});

var player = 0;
var player2Num = 0;
var opp = 0;
var score = 0;

function getFileName(src) {
    return src.substring(src.lastIndexOf('/') + 1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('change', () => {
    if (player1.value !== "player1") {
        player1.hidden = true;
    }
    if (player2.value !== "player2") {
        player2.hidden = true;
    }
    console.log(player2.value)
});

btn.addEventListener('click', () => {
    document.getElementById('vs').hidden = false;
    player2.hidden = true;
    console.log(player2.value)
    win.textContent = "";

    if (player1.value === 'cat') {
        myImg.src = cat;
        myImg.hidden = false;
        player = 1;
    } else if (player1.value === 'rock') {
        myImg.src = rock;
        myImg.hidden = false;
        player = 2;
    } else if (player1.value === 'paper') {
        myImg.src = paper;
        myImg.hidden = false;
        player = 3;
    } else if (player1.value === 'scissors') {
        myImg.src = scissor;
        myImg.hidden = false;
        player = 4;
    } else if (player1.value === 'horse') {
        myImg.src = horse;
        myImg.hidden = false;
        player = 5;
    }

    if (player2.value === 'cat') {
        opImg.src = cat;
        opImg.hidden = false;
        player2Num = 1;
    } else if (player2.value === 'rock') {
        opImg.src = rock;
        opImg.hidden = false;
        player2Num = 2;
    } else if (player2.value === 'paper') {
        opImg.src = paper;
        opImg.hidden = false;
        player2Num = 3;
    } else if (player2.value === 'scissors') {
        opImg.src = scissor;
        opImg.hidden = false;
        player2Num = 4;
    } else if (player2.value === 'horse') {
        opImg.src = horse;
        opImg.hidden = false;
        player2Num = 5;
    }

    var random = getRandomInt(1, 5);

    if (player2.value === 'player2') {
        if (random === 1) {
            opImg.src = cat;
            opImg.hidden = false;
            opp = 1;
        } else if (random === 2) {
            opImg.src = rock;
            opImg.hidden = false;
            opp = 2;
        } else if (random === 3) {
            opImg.src = paper;
            opImg.hidden = false;
            opp = 3;
        } else if (random === 4) {
            opImg.src = scissor;
            opImg.hidden = false;
            opp = 4;
        } else if (random === 5) {
            opImg.src = horse;
            opImg.hidden = false;
            opp = 5;
        }
    }

    if (player2.value !== 'player2') {
        if (player == player2Num) {
            win.textContent = "Tie";
        } else if (player == 1) {
            if (player2Num == 2 || player2Num == 5) {
                console.log(1);
                win.textContent = 'Player 1 Wins';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "Player 2 wins";
            }
        } else if (player == 2) {
            if (player2Num == 4 || player2Num == 5) {
                console.log(1);
                win.textContent = 'Player 1 Wins';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "Player 2 wins";
            }
        } else if (player == 3) {
            if (player2Num == 2 || player2Num == 1) {
                console.log(1);
                win.textContent = 'Player 1 Wins';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "Player 2 wins";
            }
        } else if (player == 4) {
            if (player2Num == 3 || player2Num == 1) {
                console.log(1);
                win.textContent = 'Player 1 Wins';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "Player 2 wins";
            }
        } else if (player == 5) {
            if (player2Num == 3 || player2Num == 4) {
                console.log(1);
                win.textContent = 'Player 1 Wins';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "Player 2 wins";
            }
        }
    } else {
        if (player == opp) {
            win.textContent = "Tie";
        } else if (player == 1) {
            if (opp == 2 || opp == 5) {
                console.log(1);
                win.textContent = 'You Win';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "You Lose";
            }
        } else if (player == 2) {
            if (opp == 4 || opp == 5) {
                console.log(1);
                win.textContent = 'You Win';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "You Lose";
            }
        } else if (player == 3) {
            if (opp == 2 || opp == 1) {
                console.log(1);
                win.textContent = 'You Win';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "You Lose";
            }
        } else if (player == 4) {
            if (opp == 3 || opp == 1) {
                console.log(1);
                win.textContent = 'You Win';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "You Lose";
            }
        } else if (player == 5) {
            if (opp == 3 || opp == 4) {
                console.log(1);
                win.textContent = 'You Win';
                score++;
                scoreText.textContent = score;
            } else {
                win.textContent = "You Lose";
            }
        }
    }
});
