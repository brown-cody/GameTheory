
var playerMove;
var aiMove;
var aiMoveInt;
var result;
var winner;

var move0 = {playerMove:"testplayer0", aiMove:"testai0", winner:"testwinner0"};
var move1 = {playerMove:"testplayer1", aiMove:"testai1", winner:"testwinner1"};
var move2 = {playerMove:"testplayer2", aiMove:"testai2", winner:"testwinner2"};
var move3 = {playerMove:"testplayer3", aiMove:"testai3", winner:"testwinner3"};
var move4 = {playerMove:"testplayer4", aiMove:"testai4", winner:"testwinner4"};

//var moves = [move0, move1, move2, move3, move4];
var moves = [];

function playerThrow(move) {
    playerMove = move;
    document.getElementById("playerMoveText").style = "visibility:visible;"
    document.getElementById("playerMoveText").innerHTML = move;
    document.getElementById("playerMoveImage").src = 'images/player_' + move + '.png';
    
    aiThrow();
}

function aiThrow() {
    aiMoveInt = Math.floor(Math.random() * 3); // randomly chooses a 0, 1, or 2
    
    switch (aiMoveInt) {
        case 0:
            aiMove = "Rock";
            break;
        case 1:
            aiMove = "Paper";
            break;
        case 2:
            aiMove = "Scissors";
            break;
    }
    

    document.getElementById("aiMoveText").style = "visibility:visible;"
    document.getElementById("aiMoveText").innerHTML = aiMove;
    document.getElementById("aiMoveImage").src = 'images/ai_' + aiMove + '.png';
    
    getResult();
}

function getResult() {
    document.getElementById("result").style = "visibility:visible;"
    
    if (playerMove === "Rock" && aiMove === "Rock") {
        result = "It's a Tie! Try again.";
        winner = "Tie";
    } else if (playerMove === "Rock" && aiMove === "Paper") {
        result = "Paper beats Rock. AI wins!";
        winner = "AI";
    } else if (playerMove === "Rock" && aiMove === "Scissors") {
        result = "Rock beats Scissors. You win!";
        winner = "Player";
    } else if (playerMove === "Paper" && aiMove === "Rock") {
        result = "Paper beats Rock. You win!";
        winner = "Player";
    } else if (playerMove === "Paper" && aiMove === "Paper") {
        result = "It's a Tie! Try again.";
        winner = "Tie";
    } else if (playerMove === "Paper" && aiMove === "Scissors") {
        result = "Scissors beats Paper. AI wins!";
        winner = "AI";
    } else if (playerMove === "Scissors" && aiMove === "Rock") {
        result = "Rock beats Scissors. AI wins!";
        winner = "AI";
    } else if (playerMove === "Scissors" && aiMove === "Paper") {
        result = "Scissors beats Paper. You win!";
        winner = "Player";
    } else if (playerMove === "Scissors" && aiMove === "Scissors") {
        result = "It's a Tie! Try again.";
        winner = "Tie";
    } 
    
    document.getElementById("result").innerHTML = result;
    
    setResult();
    logToConsole();
}

function setResult() {
    var move = {playerMove:playerMove, aiMove:aiMove, winner:winner};
    moves.push(move);
    
    logResult();
}

function logResult() {
    
    /*var i;
    for (i = 0; i < 5; i++) {
        document.getElementById("player" + i).innerHTML = moves[i].playerMove;
        document.getElementById("ai" + i).innerHTML = moves[i].aiMove;
        document.getElementById("winner" + i).innerHTML = moves[i].winner;
    } */
}



function logToConsole() {
    console.log("Player Move: " + playerMove);
    console.log("AI Move: " + aiMove);
    console.log("Winner var: " + winner);
    console.log("Result field: " + result);
}