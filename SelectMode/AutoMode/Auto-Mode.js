let Username;
let tic_tac;
let userInput = document.getElementById('user-name');

// Function to change the CSS style of the tic-tac (X and O) as well as to store the selected tic-tac by user
function pickTicTac(color, bg_color, border, selected, unselected) {
    
    document.getElementById(selected).style.cssText = `color: ${color}; background-color: ${bg_color}; border: 3px solid ${border}; transform: scale(1.07);`;
    tic_tac = selected;

    if(tic_tac === 'X') {
        document.getElementById(unselected).style.cssText = `color: #ff793f; background-color: #ecf0f1; border: 3px solid #3d3d3d;`;
    }else if(tic_tac === 'O') {
        document.getElementById(unselected).style.cssText = `color: #079992; background-color: #ecf0f1; border: 3px solid #3d3d3d;`;
    }
}

// Start button function
let start = () => {
    if(tic_tac == undefined)
        alert("Select Tic Tac!");
    else{
        Username = document.getElementById('user-name').value;
        localStorage.setItem('Auto_Mode_Username', Username);
        localStorage.setItem('Auto_Mode_User_Tic_Tac', tic_tac);
        
        // Starting game by setting href for the anchor tag of start button
        let a = document.getElementById('start-btn-anchor-tag');
        a.setAttribute("href", "../Game/AutoModeGame/AutoModeGame.html");
    }
}



// txt variable to store input value
// len variable to store the length of input value
// showMessage variable to store showMessage element
var txt;
var len;
var showMessage = document.getElementById('showMessage');
// Event to limit user max. 15 characters are allowed for the name
userInput.addEventListener('input', (e) => {
    len = userInput.value.length;
    if(len <= 16){
        txt = userInput.value;
        showMessage.style.display = 'none';
    }
    else{
        userInput.value = txt;
        showMessage.style.display = 'block';
    }
});