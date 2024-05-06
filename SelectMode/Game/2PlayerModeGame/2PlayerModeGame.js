// Retrieving values from local storage
var P1 = localStorage.getItem('Player_1_Name');
var P2 = localStorage.getItem('Player_2_Name');
var Name = document.getElementById('player-name');
var P1_TicTac = localStorage.getItem('Player_1_Tic_Tac');
var P2_TicTac = localStorage.getItem('Player_2_Tic_Tac');
var P1_TicTac_Color;
var P2_TicTac_Color;
// Variable Tic_Tac
var Tic_Tac;


// All boxes selected
var AllBoxes = document.getElementsByClassName('boxes');
// All boxes number
var box_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// ************************ TIMER CLOCK *************************** //
// Timer
var timer = 29;
var timerBox = document.getElementById('timer');
// *********** TIME START FUNCTION *********** //
function TimeStart() {
    if(timer < 0){
         timer = 30;
         // Changing name at the completion of 0:29 sec.
         if( Name.innerHTML === P1 ) {
            Name.innerHTML = P2;
         }
         else if( Name.innerHTML === P2 ) {
            Name.innerHTML = P1;
         }
    }
    else if(timer < 10) {
        timerBox.innerHTML = `0:0${timer}`;
        timerBox.style.cssText = 'color: #ee5253';
    }
    else {
        timerBox.innerHTML = `0:${timer}`;
        timerBox.style.cssText = 'color: #636e72';
    }

    timer--;
}
// setInterval() to start the timer
var interval = setInterval(TimeStart, 1000);



// ************************ FILTER-OUT FILLED BOXES FUNCTION ****************************** //
function filterOutFilledBoxes(box){
   box_Numbers = box_Numbers.filter( f => f != box );
}



// *********************** CHECK TO WIN FUNCTION ***************************** //
function checkWin(tempArr){
   // Combination (1, 2, 3)
   if( tempArr.includes(1) && tempArr.includes(2) && tempArr.includes(3) )
      return true;
   // Combination (1, 4, 7)
   else if( tempArr.includes(1) && tempArr.includes(4) && tempArr.includes(7) )
      return true;
   // Combination (1, 5, 9)
   else if( tempArr.includes(1) && tempArr.includes(5) && tempArr.includes(9) )
      return true;
   // Combination (2, 5, 8)
   else if( tempArr.includes(2) && tempArr.includes(5) && tempArr.includes(8) )
      return true;
   // Combination (3, 6, 9)
   else if( tempArr.includes(3) && tempArr.includes(6) && tempArr.includes(9) )
      return true;
   // Combination (3, 5, 7)
   else if( tempArr.includes(3) && tempArr.includes(5) && tempArr.includes(7) )
      return true;
   // Combination (4, 5, 6)
   else if( tempArr.includes(4) && tempArr.includes(5) && tempArr.includes(6) )
      return true;
   // Combination (7, 8, 9)
   else if( tempArr.includes(7) && tempArr.includes(8) && tempArr.includes(9) )
      return true;
   else
      return false;

}




// ******************************** Player 1 & Player 2 SELECT BOXES FUNCTION ********************************* //
// Array to store boxes number (1 to 9) clicked by Player 1 & Player 2
//     1. P1_Arr[] -> for player 1
//     2. P2_Arr[] -> for player 2
var P1_Arr = [];
var P1_Index = 0;
var P2_Arr = [];
var P2_Index = 0;
var win = false;

// Function to tic the boxes
function tic(box_Num) {
    
   if( Name.innerHTML  ===  P1  &&  document.getElementById(`${box_Num}`).disabled  !=  true ) {
      document.getElementById(`${box_Num}`).innerHTML = Tic_Tac;
      document.getElementById(`${box_Num}`).style.color = P1_TicTac_Color;
      P1_Arr[P1_Index] = box_Num;
      P1_Index++;
      filterOutFilledBoxes(box_Num);
      document.getElementById(`${box_Num}`).disabled = true;

      // Changing name and tic tac for other player
      Name.innerHTML = P2;
      Tic_Tac = P2_TicTac;

      // Checking who won the game (Player 1 OR Player 2)
      win = checkWin(P1_Arr);
      if(win)
         gameOver(P1 + " Won!");
      else if(box_Numbers.length === 0)
         gameOver("Match Draw!");
      else{
         // Restarting the timer at clicking on the box
         clearInterval(interval);
         timer = 29;
         interval = setInterval(TimeStart, 1000);
      }

      // Restarting the timer at clicking on the box
      clearInterval(interval);
      timer = 29;
      interval = setInterval(TimeStart, 1000);
   }
   else if( Name.innerHTML === P2  &&  document.getElementById(`${box_Num}`).disabled  !=  true ) {
      document.getElementById(`${box_Num}`).innerHTML = Tic_Tac;
      document.getElementById(`${box_Num}`).style.color = P2_TicTac_Color;
      P2_Arr[P2_Index] = box_Num;
      P2_Index++;
      filterOutFilledBoxes(box_Num);
      document.getElementById(`${box_Num}`).disabled = true;

      // Changing name and tic tac for other player
      Name.innerHTML = P1;
      Tic_Tac = P1_TicTac;

      // Checking who won the game (Player 1 OR Player 2)
      win = checkWin(P2_Arr);
      if(win)
         gameOver(P2 + " Won!");
      else if(box_Numbers.length === 0)
         gameOver("Match Draw!");
      else{
         // Restarting the timer at clicking on the box
         clearInterval(interval);
         timer = 29;
         interval = setInterval(TimeStart, 1000);
      }
   }
}




// ******************* START GAME FUNCTION ********************** //
function StartGame() {

if( P1_TicTac === 'X' && P2_TicTac === 'O' ) {
   P1_TicTac_Color = '#079992';
   P2_TicTac_Color = '#ff793f';
}
else {
   P1_TicTac_Color = '#ff793f';
   P2_TicTac_Color = '#079992';
}

// Here - 1 and 2 will detect Player 1 OR Player 2 who will start the game first
// For Player 1 - it will be -> 1
// For Player 2 - it will be -> 2
// Number (0 and 1) are generated randomly
var rand = Math.round( Math.random() ) + 1;

if( rand === 1 ) {
   Name.innerHTML = P1;
   Tic_Tac = P1_TicTac;
}
else if( rand === 2 ) {
   Name.innerHTML = P2;
   Tic_Tac = P2_TicTac;
}

}

StartGame();



// MAIN DIV, GAMEOVER DIV, WINDIV
var mainDiv = document.getElementById('main-game-div');
var gameOverDiv = document.getElementById('main-gameover-div');
var winDiv = document.getElementById('win-div');

// *********************** GAME OVER FUNCTION *************************** //
function gameOver(message){
   mainDiv.style.display = 'none';
   gameOverDiv.style.display = 'block';
   winDiv.innerHTML = message;
   document.body.style.cssText = 'height: 100vh; width: 100%;';
}



// ******************** REPLAY FUNCTION ************************ //
function replay(){
   gameOverDiv.style.display = 'none';
   mainDiv.style.display = 'block';
   window.location.reload();
}



// ******************** HOME FUNCTION ************************ //
function home(){
   window.location.href = '../../../index.html';
}