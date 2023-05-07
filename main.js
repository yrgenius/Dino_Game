const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const startBtn = document.querySelector('.btn__start');
const scoreOut = document.querySelector('.score');
let isStart = false;
let score = 0;

startBtn.addEventListener('click', start);
document.addEventListener('keydown', jump);

//TODO: разобраться с фокусом на кнопке 
function start() {
    isStart
        ? stopAnimation()
        : startAnimation();

    let isAlive = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            stopAnimation();
            clearInterval(isAlive);
        }

        //TODO: разобраться с подсчетом очков 
        if (cactusLeft === 1) {
            score += 150;
            scoreOut.textContent = score;
        }
    }, 10);
}

function jump() {
    if (event.code === 'Space') {
        if (dino.classList != 'jump') dino.classList.add('jump');
        setTimeout(endJump, 500);
    }
}

function endJump() {
    dino.classList.remove('jump');
}

function startAnimation() {
    cactus.classList.add('active');
    startBtn.textContent = 'Stop';
    isStart = !isStart;
}

function stopAnimation() {
    cactus.classList.remove('active');
    startBtn.textContent = 'Start';
    isStart = !isStart;
    score = 0;
    scoreOut.textContent = score;
}



