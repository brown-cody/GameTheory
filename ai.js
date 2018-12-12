/*
1 - Win Same, Lose Next
2 - Win Same, Lose Prev
3 - Win Next, Lose Same
4 - Win Next, Lose Prev
5 - Win Prev, Lose Same
6 - Win Prev, Lose Next
7 - Win Same, Lose Same
8 - Win Next, Lose Next
9 - Win Prev, Lose Prev
*/

winWeight = 1;
lossWeight = 0;


// AI LOGIC 1
// WINNING PLAYERS CHOOSE THE SAME MOVE
// LOSING PLAYERS CHOOSE THE NEXT MOVE
function sameNext() {
    
    modeLog = 'Win Same, Lose Next';
    var movePredict;

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting same move.';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict = 0;
        }
    } else {
        aiResult = 'Player lost last round, counteracting next move';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict = 0;
        } else if (movePredict == 4) {
            movePredict = 1;
        }
    }

    return movePredict;
}

// AI LOGIC 2
// WINNING PLAYERS CHOOSE THE SAME MOVE
// LOSING PLAYERS CHOOSE THE PREV MOVE
function samePrev() {
    
    modeLog = 'Win Same, Lose Prev';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting same move.';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict = 0;
        }
    } else {
        aiResult = 'Player lost last round, counteracting previous move';
        movePredict = previousMoveInt;
        
    }

    return movePredict;
}

// AI LOGIC 3
// WINNING PLAYERS CHOOSE THE NEXT MOVE
// LOSING PLAYERS CHOOSE THE SAME MOVE
function nextSame() {
    
    modeLog = 'Win Next, Lose Same';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting next move.';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict = 0;
        } else if (movePredict == 4) {
            movePredict = 1;
        }
    } else {
        aiResult = 'Player lost last round, counteracting same move';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict = 0;
        }
        
    }

    return movePredict;
}

// AI LOGIC 4
// WINNING PLAYERS CHOOSE THE NEXT MOVE
// LOSING PLAYERS CHOOSE THE PREV MOVE
function nextPrev() {
    
    modeLog = 'Win Next, Lose Prev';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting next move.';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict = 0;
        } else if (movePredict == 4) {
            movePredict = 1;
        }
    } else {
        aiResult = 'Player lost last round, counteracting prev move';
        movePredict = previousMoveInt;
        
    }

    return movePredict;
}


// AI LOGIC 5
// WINNING PLAYERS CHOOSE THE PREV MOVE
// LOSING PLAYERS CHOOSE THE SAME MOVE
function prevSame() {
    
    modeLog = 'Win Prev, Lose Same';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting prev move.';
        movePredict = previousMoveInt;
    } else {
        aiResult = 'Player lost last round, counteracting same move';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict = 0;
        }
        
    }

    return movePredict;
}

// AI LOGIC 6
// WINNING PLAYERS CHOOSE THE PREV MOVE
// LOSING PLAYERS CHOOSE THE NEXT MOVE
function prevNext() {
    
    modeLog = 'Win Prev, Lose Next';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting prev move.';
        movePredict = previousMoveInt;
    } else {
        aiResult = 'Player lost last round, counteracting next move';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict = 0;
        } else if (movePredict == 4) {
            movePredict = 1;
        }
        
    }

    return movePredict;
}

// AI LOGIC 7
// WINNING PLAYERS CHOOSE THE SAME MOVE
// LOSING PLAYERS CHOOSE THE SAME MOVE
function sameSame() {
    
    modeLog = 'Win Same, Lose Same';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting same move.';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict = 0;
        }
    } else {
        aiResult = 'Player lost last round, counteracting same move';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict = 0;
        }
        
    }

    return movePredict;
}


// AI LOGIC 8
// WINNING PLAYERS CHOOSE THE NEXT MOVE
// LOSING PLAYERS CHOOSE THE NEXT MOVE
function nextNext() {
    
    modeLog = 'Win Next, Lose Next';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting next move.';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict = 0;
        } else if (movePredict == 4) {
            movePredict = 1;
        }
    } else {
        aiResult = 'Player lost last round, counteracting next move';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict = 0;
        } else if (movePredict == 4) {
            movePredict = 1;
        }
        
    }

    return movePredict;
}

// AI LOGIC 8
// WINNING PLAYERS CHOOSE THE PREV MOVE
// LOSING PLAYERS CHOOSE THE PREV MOVE
function prevPrev() {
    
    modeLog = 'Win Prev, Lose Prev';
    var movePredict;   

    if (moves[arraySize].winner == 'Player') {
        aiResult = 'Player won last round, counteracting prev move.';
        movePredict = previousMoveInt;
    } else {
        aiResult = 'Player lost last round, counteracting prev move';
        movePredict = previousMoveInt;
        
    }

    return movePredict;
}









// TAKE PLAYERMOVE AND AI MOVE ATTEMPT AND DETERMINE WHO WINS
// KEEP TRACK OF AI WINS
function aiTry(attempt) {
    
    var win;
    var testMoveInt
    
    if (playerMove === 'Rock') {
        testMoveInt = 0;
    } else if (playerMove === 'Paper') {
        testMoveInt = 1;
    } else if (playerMove === 'Scissors') {
        testMoveInt = 2;
    }
    
    if (testMoveInt === 0 && attempt == 0) {
        win = "Tie";
    } else if (testMoveInt === 0 && attempt === 1) {
        win = "AI";
    } else if (testMoveInt === 0 && attempt === 2) {
        win = "Player";
    } else if (testMoveInt === 1 && attempt === 0) {
        win = "Player";
    } else if (testMoveInt === 1 && attempt === 1) {
        win = "Tie";
    } else if (testMoveInt === 1 && attempt === 2) {
        win = "AI";
    } else if (testMoveInt === 2 && attempt === 0) {
        win = "AI";
    } else if (testMoveInt === 2 && attempt === 1) {
        win = "Player";
    } else if (testMoveInt === 2 && attempt === 2) {
        winner = "Tie";
    } 
    
    if (win === "AI") {
        return winWeight;
    } else {
        return lossWeight;
    }
    
}

