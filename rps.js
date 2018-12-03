
var playerMove;
var aiMove;
var aiMoveInt;
var result;
var winner;
var setMove;
var moves = [];
var arraySize;
var playerScore = 0;
var aiScore = 0;

function resetGame() {
    document.getElementById("playerMoveText").style = "visibility:hidden;";
    document.getElementById("playerMoveImage").src = 'images/unknown.png';
    document.getElementById("aiMoveText").style = "visibility:hidden;";
    document.getElementById("aiMoveImage").src = 'images/unknown.png';
    document.getElementById("rowh").style = "visibility:hidden;";
    document.getElementById("result").style = "visibility:hidden;";
    document.getElementById("playerScore").innerHTML = "-";
    document.getElementById("aiScore").innerHTML = "-";
    
    var i;
    for (i = 0; i < moves.length; i++) {
        document.getElementById("row" + i).style = "visibility:hidden;";
    }
    
    playerMove = null;
    aiMove = null;
    aiMoveInt = null;
    result = null;
    winner = null;
    setMove = null;
    moves = [];
    arraySize = null;
    playerScore = 0;
    aiScore = 0;
}

function playerThrow(move) {
    
    playerMove = move;
    
    document.getElementById("playerMoveText").innerHTML = move;
    document.getElementById("playerMoveText").style = "visibility:visible;";
    document.getElementById("playerMoveImage").src = 'images/player_' + move + '.png';
    
    aiThrow();
}

function aiThrow() {
    
    if (document.getElementById("aiCheck").checked == true) {
        result = "ERROR: AI Not Implemented."
        document.getElementById("result").innerHTML = result;
        document.getElementById("result").style = "visibility:visible;";
        return;
    } else {
        aiMoveInt = Math.floor(Math.random() * 3); // randomly chooses a 0, 1, or 2
    }
    
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
    
    document.getElementById("aiMoveText").innerHTML = aiMove;
    document.getElementById("aiMoveText").style = "visibility:visible;";
    document.getElementById("aiMoveImage").src = 'images/ai_' + aiMove + '.png';
    
    getResult();
}

function getResult() {
    
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
    
    if (winner === "Player") {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
    } else if (winner === "AI") {
        aiScore++;
        document.getElementById("aiScore").innerHTML = aiScore;
    }
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style = "visibility:visible;";
    
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
    console.log("Player Move:  " + playerMove);
    console.log("AI Move:      " + aiMove);
    console.log("Winner:       " + winner);
    console.log("Result:       " + result);
    console.log("moves.length: " + moves.length);
    console.log("arraySize:    " + arraySize);
    console.log("Log:          " + moves[arraySize].playerMove + ', ' + moves[arraySize].aiMove + ', ' + moves[arraySize].winner);
    console.log("--------------------------------------------");
}