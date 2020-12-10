var score,roundScore,activePlayer,gamePlaying;
init();

// score = [0,0];
// roundScore = 0;
// activePlayer = 0;
// dice  = Math.floor(Math.random() * 6) +1;
// console.log(dice);
 //document.querySelector('#current-' + activePlayer).textContent=dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';
// var x = document.querySelector('#score-0').textContent;

//console.log(x);
// document.getElementById('score-0').textContent='0';
// document.getElementById('score-1').textContent='0';
// document.getElementById('current-0').textContent='0';
// document.getElementById('current-1').textContent='0';

// document.querySelector('.dice').style.display = 'none'; 



document.querySelector('.btn-roll').addEventListener('click',function(){
     
    if(gamePlaying)
    {
        var dice = Math.floor(Math.random() * 6) +1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
     
        if(dice !== 1){

             roundScore += dice;
             document.querySelector('#current-' + activePlayer).textContent = roundScore;


        }else{
             nextplayer(); 
        }
    }

});


document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying){
       score[activePlayer] += roundScore;
    //  score[activePlayer] = score[activePlayer] + roundScore;
    
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    //document.querySelector('.dice').style.display = 'none';
        if(score[activePlayer] >= 20){
           document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
           gamePlaying = false;
        }
        else{
            nextplayer();
        }
    }
    
    
});

function nextplayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';


        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click',init);
 



function init(){
    score = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}





































