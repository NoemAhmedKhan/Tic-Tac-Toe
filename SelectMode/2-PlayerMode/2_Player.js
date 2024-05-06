let P1_Name;
let P1_Tic_Tac;
let P2_Name;
let P2_Tic_Tac;
let Player1_ShowMessage = document.getElementById('Player_1_Show_Message');
let Player1_Input = document.getElementById('player-1-name');
let Player2_ShowMessage = document.getElementById('Player_2_Show_Message');
let Player2_Input = document.getElementById('player-2-name');


// // Function to change the CSS style of the tic-tac (X and O) as well as to store the selected tic-tac by player 1 and player 2

function Pick_Tic_Tac(color, bg_color, border, selected, unselected) {
    
    // if-else if ladder to change the CSS style of unselected tic-tac and store the tic-tac's selected by both player 1 and player 2
    if(selected === 'X1' && unselected === 'O1') {
        P1_Tic_Tac = 'X';
        document.getElementById(unselected).style.cssText = `color: #ff793f; background-color: #ecf0f1; border: 3px solid #3d3d3d;`;
    }
    else if(selected === 'O1' && unselected === 'X1') {
        P1_Tic_Tac = 'O';
        document.getElementById(unselected).style.cssText = `color: #079992; background-color: #ecf0f1; border: 3px solid #3d3d3d;`;
    }
    else if(selected === 'X2' && unselected === 'O2') {
        P2_Tic_Tac = 'X';
        document.getElementById(unselected).style.cssText = `color: #ff793f; background-color: #ecf0f1; border: 3px solid #3d3d3d;`;
    }
    else if(selected === 'O2' && unselected === 'X2') {
        P2_Tic_Tac = 'O';
        document.getElementById(unselected).style.cssText = `color: #079992; background-color: #ecf0f1; border: 3px solid #3d3d3d;`;
    }

    // if-condition to restrict (player 1 and player 2) to select only one tic-tac
    if(P1_Tic_Tac  !=  P2_Tic_Tac) {
        document.getElementById(selected).style.cssText = `color: ${color}; background-color: ${bg_color}; border: 3px solid ${border}; transform: scale(1.07);`;
    }
}


// Start button function
let start = () => {
    P1_Name = document.getElementById('player-1-name').value;
    P2_Name = document.getElementById('player-2-name').value;

    // if-else condition to check whether the tic tac is selected or not
    if(P1_Tic_Tac == undefined && P2_Tic_Tac == undefined)
        alert("Select Tic Tac!");
    else if(P1_Tic_Tac === P2_Tic_Tac)
        alert("Select Tic Tac!");
    else if(P1_Tic_Tac == undefined)
        alert("Select Tic Tac For " + P1_Name);
    else if(P2_Tic_Tac == undefined)
        alert("Select Tic Tac For " + P2_Name);
    else{
        localStorage.setItem('Player_1_Name', P1_Name);
        localStorage.setItem('Player_1_Tic_Tac', P1_Tic_Tac);
        localStorage.setItem('Player_2_Name', P2_Name);
        localStorage.setItem('Player_2_Tic_Tac', P2_Tic_Tac);
        
        // Starting game by setting href for the anchor tag of start button
        let a = document.getElementById('start-btn-anchor-tag');
        a.setAttribute("href", "../Game/2PlayerModeGame/2PlayerModeGame.html");
    }
}



// txt_1 variable to store input value of Player 1
// len_1 variable to store the length of input value by Player 1
var txt_1;
var len_1;
// Event to limit Player 1 max. 15 characters are allowed for the name
Player1_Input.addEventListener('input', (e) => {
    len_1 = Player1_Input.value.length;

    if(len_1 <= 16){
        txt_1 = Player1_Input.value;
        Player1_ShowMessage.style.display = 'none';
    }
    else{
        Player1_Input.value = txt_1;
        Player1_ShowMessage.style.display = 'block';
    }
});


// txt_2 variable to store input value of Player 2
// len_2 variable to store the length of input value by Player 2
var txt_2;
var len_2;
// Event to limit Player 2 max. 15 characters are allowed for the name
Player2_Input.addEventListener('input', (e) => {
    len_2 = Player2_Input.value.length;
    
    if(len_2 <= 16){
        txt_2 = Player2_Input.value;
        Player2_ShowMessage.style.display = 'none';
    }
    else{
        Player2_Input.value = txt_2;
        Player2_ShowMessage.style.display = 'block';
    }
});