/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Challenge

1. A player looses his ENTIRE score when he rolls two 6's in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a seperate variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use google to fifure this our)

3. Add another dice to the game, so that there are two dices now. The player loses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the firs one.)

*/
var scores, roundScore, activePlayer, gamePlaying;

init();
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gamePlaying) {
    // 1. Random Number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'content/dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'content/dice-' + dice2 + '.png';

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice1 !== 1 && dice2 !== 1) {
      // Add Score
      // ▼ roundScore = roundScore + dice;
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    /*
        if (dice === 6 && lastDice === 6){
            // Player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1){
            // Add Score
            // ▼ roundScore = roundScore + dice;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;            
        } else {
            nextPlayer();
        }    
        lastDice = dice;  
        */
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    // Add current score to global score
    // ▼ scores[activePlayer] = scores[activePlayer] + roundScore
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var winningScore;

    var input = document.querySelector('.final-score').value;
    // Undefined, 0, null or "" are coerced to false
    // Anything else is coerced to true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    // Check if player won the game
    // The first player to reach 100 points on GLOBAL score wins the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'You Win!';
      document.querySelector('#dice-1').style.display = 'none';
      document.querySelector('#dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next player
  // activePlayer     (if it's)   0   (then)  activePlayer    (should be) 1   (else)  activePlayer    (should be) 0;
  // activePlayer     ===         0   ?       activePlayer    =           1   :       activePlayer    =           0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  gamePlaying = true;

  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}

//--|▼|Experimental Code|▼|*****************************************************************************************************************|▼|Experimental Code|▼|--//

//--|▲|Experimental Code|▲|*****************************************************************************************************************|▲|Experimental Code|▲|--//

//|▼|Back-up Code|▼|*******************************************************************************************************************************|▼|Back-up Code|▼|//
/*
var scores, roundScore, activePlayer, gamePlaying;

init(gamePlaying = true);

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = '../../content/images/pig_game/dice-' + dice +'.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1){
            // Add Score
            // ▼ roundScore = roundScore + dice;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;            
        } else {
            nextPlayer();
        }        
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // Add current score to global score
        // ▼ scores[activePlayer] = scores[activePlayer] + roundScore
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        

        // Check if player won the game
        // The first player to reach 100 points on GLOBAL score wins the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'You Win!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer(){
        // Next player
        // activePlayer     (if it's)   0   (then)  activePlayer    (should be) 1   (else)  activePlayer    (should be) 0;
        // activePlayer     ===         0   ?       activePlayer    =           1   :       activePlayer    =           0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}
*/
