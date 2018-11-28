var teamSeedStr = "";
var teamSeedInt = "";
var scrambledWords = "";
var scrambledTeams = "";
var seededList = "";
var seededTeams = "";
var assassinWins = false;
var isSpy = false;
var seedStr = "";
var seedInt = "";
var manualSeed = false;
var blueScore = null;
var redScore = null;
var score = null;


//CREATE 4-CHARACTER SEED
function makeSeed(newSeed) {
    assassinWins = false;
    isSpy = false;
    if (newSeed === null) {
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < 4; i++)
            seedStr += possible.charAt(Math.floor(Math.random() * possible.length));

        getWords();
    } else {
        getWords();
    }
    
}

//RUN GENERATED SEED THROUGH ARRAY SHUFFLER
function getWords() {
    seedInt = "0"+seedStr.charCodeAt(0)+seedStr.charCodeAt(1)+seedStr.charCodeAt(2)+seedStr.charCodeAt(3);
    console.log("Game Seed Integer: " + seedInt);
        
    scrambledWords = new Chance(seedInt);
    seededList = scrambledWords.shuffle(word).slice();
    console.log(seededList);
    createTeams();
}
        
//CREATE TEAMS
function createTeams() {
    teamSeedStr = seedStr;
    console.log("Team Seed String: " + teamSeedStr);

    teamSeedInt = "0"+teamSeedStr.charCodeAt(0)+teamSeedStr.charCodeAt(1)+teamSeedStr.charCodeAt(2)+teamSeedStr.charCodeAt(3);
    console.log("Team Seed Integer: " + teamSeedInt);

    scrambledTeams = new Chance(teamSeedInt);
    seededTeams = scrambledTeams.shuffle(teams).slice();
    console.log(seededTeams);
    
    if (manualSeed == true) {
        refreshData();
        for (var x = 0; x < 25; x++) {
            var cell = document.getElementById(x);
            cell.style.backgroundColor = "black";
            cell.style.color = "white";
        }
    }
    
    resetScore();
}



//REFRESH PAGE FOR SEED REGENERATION
function refreshPage() {
    window.location.reload();
}

//CLICK WORD TO REVEAL TEAM COLOR OR GREEN FOR SPYMASTER
function revealTeam(x) {
    var cell = document.getElementById(x);
    
    //DO NOT SCORE IF WORD ALREADY REVEALED PLAYER
    if ((cell.style.backgroundColor == "red" || cell.style.backgroundColor == "blue") && isSpy == false) 
    {
        console.log("REPEAT CLICK: NOT A SPY");
        return;
    }
    
    //DO NOT SCORE IF WORD ALREADY REVEALED SPYMASTER
    if (cell.style.backgroundColor == "green" && isSpy == true) {
        console.log("REPEAT CLICK: SPY");
        return;
    }

    //REVEAL WORD COLOR or MARK GREEN
    if (isSpy == false) {
        cell.style.backgroundColor = seededTeams[x];
        if (seededTeams[x] == "yellow" || seededTeams[x] == "gray") {
            cell.style.color = "black";
        }
    } else {
        cell.style.backgroundColor = "green";
        cell.style.color = "black";
    }

    //DECREMENT SCORE VALUE REGARDLESS OF SPYMASTER STATUS
    if (assassinWins == true) {
        grayWins();
        return;
    } else if (seededTeams[x] == "red" || seededTeams[x] == "blue") {
        score = document.getElementById(seededTeams[x] + "Score").innerHTML;
        if (blueScore == 0 || redScore == 0) {
            console.log("The game is already over.");
        } else
            score--;
        document.getElementById(seededTeams[x] + "Score").innerHTML = score;
    }


    if (seededTeams[x] == "gray") {
        grayWins();
        assassinWins = true;
        return;
    }

    if (document.getElementById("blueScore").innerHTML == "0") {
        blueWins();
        return;
    }

    if (document.getElementById("redScore").innerHTML == "0") {
        redWins();
        return;
    }
    
    console.log("Spy?: " + isSpy);
}





//TOGGLE SPYMASTER SCREEN AND DISPLAY/HIDE ALL TEAM COLORS
function revealSpy() {
    
    //RESET SCORE WHEN SPY BUTTON IS PRESSED
    document.getElementById("redScore").innerHTML = "9";
    document.getElementById("blueScore").innerHTML = "8";
    
    
    if (isSpy == false) {
        for (var x = 0; x < 25; x++) {
            var cell = document.getElementById(x);
            cell.style.backgroundColor = seededTeams[x];
            if (seededTeams[x] == "yellow" || seededTeams[x] == "gray") {
                cell.style.color = "black";
            }    
        }
        isSpy = true;
    } else {
            for (var x = 0; x < 25; x++) {
            var cell = document.getElementById(x);
            cell.style.backgroundColor = "black";
            cell.style.color = "white"; 
        }
        isSpy = false;
    }
    console.log("Spy?: " + isSpy);
    
}

//GET INPUT FROM SEED FIELD
function checkLength(field) {
    if (field.value.length == 4) {
        console.log("SEED LENGTH MATCH!")
        seedStr = document.getElementById("seedField").value.toUpperCase();
        manualSeed = true;
        console.log("Manual Game Seed String: " + seedStr);
        makeSeed(seedStr);
    }
}

//RESET SCORE
function resetScore() {
    redScore = 9;
    blueScore = 8;
    document.getElementById("redScore").innerHTML = redScore;
    document.getElementById("blueScore").innerHTML = blueScore;
    score = null;
}

//REFRESH PAGE
function refreshData() {
    document.getElementById("seedSpan").innerHTML = seedStr;
    for (var x = 0; x < 25; x++) {
        document.getElementById(x).innerHTML = seededList[x];
    }
}

makeSeed(null);
console.log("Game Seed String: " + seedStr);
