//Selecting Elements
const plaYer0 = document.querySelector('.player--0');
const plaYer1 = document.querySelector('.player--1');

const holdClick = document.querySelector('.btn--hold');

const score0_EL = document.getElementById('score--0');
const score1_EL = document.getElementById('score--1');
const current_0 = document.getElementById('current--0');
const current_1 = document.getElementById('current--1');
const Kamateli = document.querySelector('.btn--roll');
let DICE = document.querySelector('.dice');
DICE.classList.add('hidden');




//Starting Elements

score0_EL.textContent = 0;
score1_EL.textContent = 0;

// let currentScore = 0;
// const score  = [0, 0];
// let activePlayer = 0;

let currentScore, score, activePlayer, playing;





const reset = function() {
    currentScore = 0;
    playing = true;
    activePlayer = 0;
    score = [0, 0]
    score0_EL.textContent = 0;
    score1_EL.textContent = 0;
    current_0.textContent = 0;
    current_1.textContent = 0;
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    plaYer0.classList.remove('player--winner');
    plaYer1.classList.remove('player--winner');

    plaYer0.classList.add('player--active');
    plaYer1.classList.remove('player--active');
    
}

reset();



// ღილაკზე დაკლიკებით კამათელის გაგორება - რანდომ ციფრი

function change() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    plaYer0.classList.toggle('player--active');
    plaYer1.classList.toggle('player--active');
}

Kamateli.addEventListener('click', function() {
    if (playing) {
    const Random_dice = Math.trunc(Math.random() *6) +1;
    DICE.src = `dice-${Random_dice}.png`;
    DICE.classList.remove('hidden');

    if (Random_dice !==1) {
        currentScore += Random_dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }

    else {
       change();

    }

}
})

// მიმდინარე ქულები ჯამდება


holdClick.addEventListener('click', function() {
    if (playing) {
    // 1. Add current score to active player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    }
    // 2. Check if player's score is >= 100
    if (score[activePlayer] >= 100) {

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing = false;
    }
 else {
    change();
 }
      // Switch to the next player
})









//Reset 



document.querySelector('.btn--new').addEventListener('click', reset);