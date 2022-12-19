

function makeMove(myID) {
    if (document.getElementById(myID).innerHTML == "") {
        var player1 = "x";
        var player2 = "o";
        var userMove = checkMove();
        if (userMove == "player1") {
            //console.log("Player 1 Move");
            document.getElementById(myID).style.color = "#ff8906";
            document.getElementById(myID).innerHTML = player1;
            document.getElementById("game-log").value += "Player1 " + myID + " " + player1 + "\n";
            
        }
        else if (userMove == "player2") {
            //console.log("Player 2 Move");
            document.getElementById(myID).style.color = "#e53170";
            document.getElementById(myID).innerHTML = player2;
            document.getElementById("game-log").value += "Player2 " + myID + " " + player2 + "\n";
            
        }
        console.log(checkMove());
        checkWin();
    }
}

function checkMove() {
    var gameLog = document.getElementById("game-log").value;
    if (gameLog == "") {
        return "player1";
    }
    else if (gameLog != "") {
        var splitedText = gameLog.split(/\r|\n/);
        var splitedTextLength = splitedText.length;
        var playerMoves = [];
        var lastMove = "";
        splitedText.forEach(pMoves => {
            if (pMoves != "") {
                playerMoves.push(pMoves);
            }

            if (playerMoves.at(-1).search("Player1") == 0) {
                lastMove = "player2";
            }
            else if (playerMoves.at(-1).search("Player2") == 0) {
                lastMove = "player1";
            }
        });

        if (splitedTextLength == 10) {
            restartGame();
        }
        
        return lastMove;
    }
}

function checkWin() {
    var winTypes = [
        "box1-box2-box3", 
        "box4-box5-box6", 
        "box7-box8-box9", 
        "box1-box4-box7",
        "box2-box5-box8",
        "box3-box6-box9",
        "box1-box5-box9",
        "box3-box5-box7"
    ];
    var movesTypes = ["X", "O"];
    winTypes.forEach(Winner => {
        var winnerMoves = Winner.split("-");
        movesTypes.forEach(uMoves => {
            var inBox1 = document.getElementById(winnerMoves.at(0)).innerText;
            var inBox2 = document.getElementById(winnerMoves.at(1)).innerText;
            var inBox3 = document.getElementById(winnerMoves.at(2)).innerText;

            if (inBox1 == uMoves && inBox2 == uMoves && inBox3 == uMoves) {
                var getScorePlayer1 = sessionStorage.getItem("score-player1");
                var getScorePlayer2 = sessionStorage.getItem("score-player2");
                if (getScorePlayer1 == null && uMoves == "X") {
                    console.log("Player1 not Score Set");
                    sessionStorage.setItem("score-player1", "1");
                }
                else if (getScorePlayer1 != null && uMoves == "X") {
                    console.log("Player1 Score Set");
                    var getScore = sessionStorage.getItem("score-player1");
                    var newScore = eval(parseInt(getScore) + 1);
                    sessionStorage.setItem("score-player1", newScore);
                }
                
                if (getScorePlayer2 == null && uMoves == "O") {
                    sessionStorage.setItem("score-player2", "1");
                    console.log("Player2 not Score Set");
                }
                else if (getScorePlayer2 != null && uMoves == "O") {
                    console.log("Player2 Score Set");
                    var getScore = sessionStorage.getItem("score-player2");
                    var newScore = eval(parseInt(getScore) + 1);
                    sessionStorage.setItem("score-player2", newScore);
                }
                var winnerCross = winnerMoves.at(0) + "-" + winnerMoves.at(1) + "-" + winnerMoves.at(2);
                switch (winnerCross) {
                    case "box1-box2-box3":
                        animateCross("h-line-top");
                        break;
                    case "box4-box5-box6":
                        animateCross("h-line-mid");
                        break;
                    case "box7-box8-box9":
                        animateCross("h-line-btm");
                        break;
                    case "box1-box4-box7":
                        animateCross("v-line-fst");
                        break;
                    case "box2-box5-box8":
                        animateCross("v-line-mid");
                        break;
                    case "box3-box6-box9":
                        animateCross("v-mid-lst");
                        break;
                    case "box1-box5-box9":
                        animateCross("d-lft-rgt");
                        break;
                    case "box3-box5-box7":
                        animateCross("d-rgt-lft");
                        break;
                    default:
                        break;
                }
                setTimeout(function() {
                    restartGame();
                  }, 1000);
            }
            
        });
        

    });

}


function restartGame() {
    
    //document.getElementById("score1").innerHTML = sessionStorage.getItem("score-player1");
    document.getElementById("score1").innerHTML = sessionStorage.getItem("score-player1") ? sessionStorage.getItem("score-player1") : "0";
    //sessionStorage.getItem("score-player1") ? sessionStorage.getItem("score-player1") : "0";
    //document.getElementById("score2").innerHTML = sessionStorage.getItem("score-player2");
    document.getElementById("score2").innerHTML = sessionStorage.getItem("score-player2") ? sessionStorage.getItem("score-player2") : "0";
    document.getElementById("game-log").value = "";
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";   
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
    document.getElementById("game-cross").style.left = "-100%";
    document.getElementById("game-cross").style.top = "-100%";
    document.getElementById("game-cross").style.rotate = "0deg";
    document.getElementById("game-cross").style.opacity = "0";
    document.getElementById("cross-inner").style.width = "0%";
}

function resetGame() {
    sessionStorage.clear();
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
    document.getElementById("game-log").value = "";
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";   
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
    document.getElementById("game-cross").style.left = "-100%";
    document.getElementById("game-cross").style.top = "-100%";
    document.getElementById("game-cross").style.rotate = "0deg";
    document.getElementById("game-cross").style.opacity = "0";
    document.getElementById("cross-inner").style.width = "0%";
}


function animateCross(crossPos) {
    console.log(crossPos);
    var gameCross = document.getElementById("game-cross");
    var crossIn = document.getElementById("cross-inner");
    switch (crossPos) {
        case "h-line-top":
            gameCross.style.opacity = "1";
            gameCross.style.width = "250px";
            gameCross.style.left = "25px";
            gameCross.style.top = "43px";
            gameCross.style.rotate = "0deg";
            crossIn.style.width = "100%";
            break;
        case "h-line-mid":
            gameCross.style.opacity = "1";
            gameCross.style.width = "250px";
            gameCross.style.left = "25px";
            gameCross.style.top = "145px";
            gameCross.style.rotate = "0deg";
            crossIn.style.width = "100%";
            break;
        case "h-line-btm":
            gameCross.style.opacity = "1";
            gameCross.style.width = "250px";
            gameCross.style.left = "25px";
            gameCross.style.top = "245px";
            gameCross.style.rotate = "0deg";
            crossIn.style.width = "100%";
            break;
        case "v-line-fst":
            gameCross.style.opacity = "1";
            gameCross.style.width = "250px";
            gameCross.style.left = "-76.5px";
            gameCross.style.top = "145px";
            gameCross.style.rotate = "90deg";
            crossIn.style.width = "100%";
            break;
        case "v-line-mid":
            gameCross.style.opacity = "1";
            gameCross.style.width = "250px";
            gameCross.style.left = "24.5px";
            gameCross.style.top = "145px";
            gameCross.style.rotate = "90deg";
            crossIn.style.width = "100%";
            break;
        case "v-line-lst":
            gameCross.style.opacity = "1";
            gameCross.style.width = "250px";
            gameCross.style.left = "126.5px";
            gameCross.style.top = "145px";
            gameCross.style.rotate = "90deg";
            crossIn.style.width = "100%";
            break;
        case "d-lft-rgt":
            gameCross.style.opacity = "1";
            gameCross.style.width = "350px";
            gameCross.style.left = "-20px";
            gameCross.style.top = "145px";
            gameCross.style.rotate = "45deg";
            crossIn.style.width = "100%";
            break;
        case "d-rgt-lft":
            gameCross.style.opacity = "1";
            gameCross.style.width = "350px";
            gameCross.style.left = "-20px";
            gameCross.style.top = "145px";
            gameCross.style.rotate = "135deg";
            crossIn.style.width = "100%";
            break;
    
        default:
            break;
    }
}

