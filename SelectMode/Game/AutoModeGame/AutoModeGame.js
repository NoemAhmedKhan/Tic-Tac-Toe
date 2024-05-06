// Retrieving values from local storage
var UserName = localStorage.getItem('Auto_Mode_Username');
var UserSelected_Tic_Tac = localStorage.getItem('Auto_Mode_User_Tic_Tac');
var Name = document.getElementById('player-name');
var AutoName = 'Auto';
var AutoSelected_Tic_Tac;
// Color's of tic tac
var User_TicTac_Color;
var Auto_TicTac_Color;
// Tic_Tac variable to store tic-tac selected by the user and auto-mode
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
        // Changing name and tic-tac at the completion of 0:29 sec.
        if( Name.innerHTML === UserName ) {
            Name.innerHTML = AutoName;
            Tic_Tac = AutoSelected_Tic_Tac;
            // calling AutoTic() function to activate auto-mode at time over 0.29 sec.
            AutoTic();
        }
        else {
            Name.innerHTML = UserName;
            Tic_Tac = UserSelected_Tic_Tac;
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



// *********************** DETECT POSSIBLE COMBINATIONS FUNCTION ***************************** //
function detectPossibleCombination(tempArr){
    // Combination (1, 2, 3)
    if( tempArr.includes(1) && tempArr.includes(2) )
       return 3;
    else if( tempArr.includes(1) && tempArr.includes(3) )
       return 2;
    else if( tempArr.includes(2) && tempArr.includes(3) )
       return 1;

    // Combination (1, 4, 7)
    else if( tempArr.includes(1) && tempArr.includes(4) )
       return 7;
    else if( tempArr.includes(1) && tempArr.includes(7) )
       return 4;
    else if( tempArr.includes(4) && tempArr.includes(7) )
       return 1;

    // Combination (1, 5, 9)
    else if( tempArr.includes(1) && tempArr.includes(5) )
       return 9;
    else if( tempArr.includes(1) && tempArr.includes(9) )
       return 5;
    else if( tempArr.includes(5) && tempArr.includes(9) )
       return 1;

    // Combination (2, 5, 8)
    else if( tempArr.includes(2) && tempArr.includes(5) )
       return 8;
    else if( tempArr.includes(2) && tempArr.includes(8) )
       return 5;
    else if( tempArr.includes(5) && tempArr.includes(8) )
       return 2;

    // Combination (3, 6, 9)
    else if( tempArr.includes(3) && tempArr.includes(6) )
       return 9;
    else if( tempArr.includes(3) && tempArr.includes(9) )
       return 6;
    else if( tempArr.includes(6) && tempArr.includes(9) )
       return 3;

    // Combination (3, 5, 7)
    else if( tempArr.includes(3) && tempArr.includes(5) )
       return 7;
    else if( tempArr.includes(3) && tempArr.includes(7) )
       return 5;
    else if( tempArr.includes(5) && tempArr.includes(7) )
       return 3;

    // Combination (4, 5, 6)
    else if( tempArr.includes(4) && tempArr.includes(5) )
       return 6;
    else if( tempArr.includes(4) && tempArr.includes(6) )
       return 5;
    else if( tempArr.includes(5) && tempArr.includes(6) )
       return 4;

    // Combination (7, 8, 9)
    else if( tempArr.includes(7) && tempArr.includes(8) )
       return 9;
    else if( tempArr.includes(7) && tempArr.includes(9) )
       return 8;
    else if( tempArr.includes(8) && tempArr.includes(9) )
       return 7;

    else
       return 0;

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



// ************************ AUTO-FILL BOXES FUNCTION ************************** //
// Array to store boxes number (1 to 9) to fill by (AutoMode)
//     1. AutoModeArr[] -> to store numbers (1 to 9) of selected boxes by the (AutoMode)
var AutoModeArr = [];
var autoModeIndex = 0;

// Function to fill the boxes by auto-mode tic-tac
function AutoTic() {
    // Counter variable to auto-fill the box within the time limit
    var Counter = Math.round( Math.random() * 28 ) + 1;

    // Disabling all boxes at auto-fill mode
    for (let i of AllBoxes) {
        i.disabled = true;
    }

    // setTimeOut to execute the code after a specific time (Counter)
    setTimeout( () => {
        
        // - random_Box_Num variable
        // - if-else logic to prevent (stop) user way to win.
        // 1    2    3
        // 4    5    6
        // 7    8    9
        // So, possible combinations are -> (1, 2, 3) || (1, 4, 7) || (1, 5, 9) || (2, 5, 8) || (3, 6, 9) || (3, 5, 7) || (4, 5, 6) || (7, 8, 9)
        var random_Box_Num;
        random_Box_Num = detectPossibleCombination(UserArr); 

        // while-loop and if-condition to auto-fill the box by auto-mode
        while ( box_Numbers.length > 0 ) {
    
            if( box_Numbers.includes(random_Box_Num) ) {
               document.getElementById(`${random_Box_Num}`).innerHTML = Tic_Tac;
               document.getElementById(`${random_Box_Num}`).style.color = Auto_TicTac_Color;
               AutoModeArr[autoModeIndex] = random_Box_Num;
               autoModeIndex++;
               break;
            }
            else{
                // Generating random box number from (1-9)
                random_Box_Num = Math.floor(Math.random() * 9) + 1;
            }
        }

        // Calling filterOutFilledBoxes() function
        filterOutFilledBoxes(random_Box_Num);

        // Storing box-number into an array which is auto-filled by the auto-mode and changing name from (auto to username) at auto-filling the box
        Name.innerHTML = UserName;
        Tic_Tac = UserSelected_Tic_Tac;
    
        // - Restarting the timer at auto filling the box
        // - Checking who won the game
         var win = checkWin(AutoModeArr);
         if(win)
            gameOver("Auto Won!");
         else if(box_Numbers.length === 0)
            gameOver("Match Draw!");
         else{
            clearInterval(interval);
            timer = 29;
            interval = setInterval(TimeStart, 1000);
         }

        },  (Counter * 1000) );

}



// ******************************** USER SELECT BOXES FUNCTION ********************************* //
// Array to store boxes number (1 to 9) at click by (User)
//     1. UserArr[] -> to store numbers (1 to 9) of selected boxes by the (User)
var UserArr = [];
var userIndex = 0;

// Function to fill the boxes by user's tic-tac
function tic(box_Num) {
    // if-condition to check the disabled property of the clicked element
    //     -> if it is clicked 1 time then it would be .disabled = true; and if user try to click again on the same element in the next chance then it will not work!
    //     1. if .disabled = true; then it would not work by clicking on it again.
    //     2. if .disabled = false; then it would work by clicking on it.

    
    if(Name.innerHTML  ===  UserName) {

        for (let i of AllBoxes) {
            if(i.innerHTML === '-')
                i.disabled = false;
        }

        if(document.getElementById(box_Num).disabled != true){
            // Tic-Tac marked 
            document.getElementById(`${box_Num}`).innerHTML = Tic_Tac;
            document.getElementById(`${box_Num}`).style.color = User_TicTac_Color;

            // Calling filterOutFilledBoxes() function
            filterOutFilledBoxes(box_Num);

            // Storing box-number into an array which is selected by the user and changing name from (username to auto) at click on the box
            Name.innerHTML = AutoName;
            Tic_Tac = AutoSelected_Tic_Tac;
            UserArr[userIndex] = box_Num;
            userIndex++;

            // - Restarting the timer at clicking on the box
            // - Checking who won the game
            var win = checkWin(UserArr);
            if(win)
               gameOver(UserName + " Won!");
            else if(box_Numbers.length === 0)
               gameOver("Match Draw!");
            else{
               clearInterval(interval);
               timer = 29;
               interval = setInterval(TimeStart, 1000);
   
               AutoTic();
            }
        }
    }
}




// ******************* START GAME FUNCTION ********************** //
function StartGame() {

if( UserSelected_Tic_Tac === 'X' ) {
   User_TicTac_Color = '#079992'; // Green Color For 'X' Tic Tac (User)
   AutoSelected_Tic_Tac = 'O';
   Auto_TicTac_Color = '#ff793f'; // Orange Color For 'O' Tic Tac (Auto)
}
else {
   User_TicTac_Color = '#ff793f'; // Orange Color For 'O' Tic Tac (User)
   AutoSelected_Tic_Tac = 'X';
   Auto_TicTac_Color = '#079992'; // Green Color For 'X' Tic Tac (Auto)
}

// Here - 0 and 1 will detect User OR Auto who will start the game first
// For User - it will be -> 0
// For Auto - it will be -> 1
// Number (0 and 1) are generated randomly
var rand = Math.round( Math.random() );
if( rand === 0 ) {
    Name.innerHTML = UserName;
    Tic_Tac = UserSelected_Tic_Tac;
}
else {
    Name.innerHTML = AutoName;
    Tic_Tac = AutoSelected_Tic_Tac;
    AutoTic();
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