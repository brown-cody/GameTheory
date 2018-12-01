
var playerMove;
var aiMove;
var aiMoveInt;
var result;
var winner;
var setMove;
var arraySize;
var moves = [];

function playerThrow(move) {
    playerMove = move;
    document.getElementById("playerMoveText").style = "visibility:visible;";
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
    

    document.getElementById("aiMoveText").style = "visibility:visible;";
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

}

function setResult() {
    setMove = {playerMove:playerMove, aiMove:aiMove, winner:winner};
    
    moves.push(setMove);
    
    if (moves.length > 5) {
        moves.shift();
    }
    
    arraySize = moves.length - 1;
    
    logResult();
    logToConsole();
}

function logResult() {
    
    document.getElementById("rowh").style = "visibility:visible;";
    
    var i;
    for (i = 0; i < moves.length; i++) {
        document.getElementById("player" + i).innerHTML = moves[arraySize - i].playerMove;
        document.getElementById("ai" + i).innerHTML = moves[arraySize - i].aiMove;
        document.getElementById("winner" + i).innerHTML = moves[arraySize - i].winner;
        
        document.getElementById("row" + i).style = "visibility:visible;";
    }
}



function logToConsole() {
    console.log("Player Move: " + playerMove);
    console.log("AI Move: " + aiMove);
    console.log("Winner var: " + winner);
    console.log("Result field: " + result);
    console.log('MOVES.LENGTH: ' + moves.length);
    console.log('ARRAYSIZE: ' + arraySize);
    console.log('MOVE ARRAY: ' + moves[arraySize].playerMove + ', ' + moves[arraySize].aiMove + ', ' + moves[arraySize].winner);
    console.log('-----------------------------------------------------------------------');
}