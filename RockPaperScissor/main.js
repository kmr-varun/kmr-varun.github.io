function UserChoice(optionid) {
    document.getElementById("tell_winner").style.visibility = "hidden";
    if (optionid == "options_rock") {
        document.getElementById("options_rock").style.scale = "1.1";
        document.getElementById("options_paper").style.scale = "1";
        document.getElementById("options_scissor").style.scale = "1";
        PlayAni();
        GetWinner(GetBotOption(), "rock");
        MaintainScore(document.getElementById("tell_winner").textContent);
    }
    else if (optionid == "options_paper") {
        document.getElementById("options_rock").style.scale = "1";
        document.getElementById("options_paper").style.scale = "1.1";
        document.getElementById("options_scissor").style.scale = "1";
        PlayAni();
        GetWinner(GetBotOption(), "paper");
        MaintainScore(document.getElementById("tell_winner").textContent);
    }
    else if (optionid == "options_scissor") {
        document.getElementById("options_rock").style.scale = "1";
        document.getElementById("options_paper").style.scale = "1";
        document.getElementById("options_scissor").style.scale = "1.1";
        PlayAni();
        GetWinner(GetBotOption(), "scissor");
        MaintainScore(document.getElementById("tell_winner").textContent);
    }
    else {
        console.log("Error");
    }
    
}

//rock > scissor
//scissor > paper
//paper > rock


function GetWinner(botchoice, userchoice) {
    document.getElementById("boticon").innerHTML = botchoice;
    document.getElementById("usericon").innerHTML = userchoice;
    if (botchoice == "rock" && userchoice == "scissor") {
        document.getElementById("tell_winner").textContent = "bot";
    }
    else if (botchoice == "scissor" && userchoice == "rock") {
        document.getElementById("tell_winner").textContent = "user";
    }
    else if (botchoice == "scissor" && userchoice == "paper") {
        document.getElementById("tell_winner").textContent = "bot";
    }
    else if (botchoice == "paper" && userchoice == "scissor") {
        document.getElementById("tell_winner").textContent = "user";
    }
    else if (botchoice == "paper" && userchoice == "rock") {
        document.getElementById("tell_winner").textContent = "bot";
    }
    else if (botchoice == "rock" && userchoice == "paper") {
        document.getElementById("tell_winner").textContent = "user";
    }
    else {
        document.getElementById("tell_winner").textContent = "draw";
    }
}



function MaintainScore(gameWinner) {
    var BotScore = document.getElementById("botscore").innerHTML;
    var UserScore = document.getElementById("userscore").innerHTML;

    setTimeout(() => {
        if (gameWinner == "bot") {
        var newscore = eval(parseInt(BotScore) + 1);
        document.getElementById("botscore").innerHTML = newscore;
        }
        else if (gameWinner == "user") {
            var newscore = eval(parseInt(UserScore) + 1);
            document.getElementById("userscore").innerHTML = newscore;
        }
    }, 2000);
    
}


function GetBotOption() {
    var choiceArray = ['rock', 'paper' , 'scissor'];
    var randChoice = Math.floor(Math.random() * (3 - 1 + 1));
    return choiceArray[randChoice];
}

//bot animation: ShakeLeft 2s ease-in-out 0s 1 normal forwards;
//user animation: ShakeRight 2s ease-in-out 0s 1 normal forwards;

function PlayAni() {
  $("#options_rock").removeAttr("onclick");
  $("#options_paper").removeAttr("onclick");
  $("#options_scissor").removeAttr("onclick");
  document.getElementById("playbot").style.animation = "ShakeLeft 2s ease-in-out 0s 1 normal forwards";
  document.getElementById("boticon").style.background = "#ff8906";
  document.getElementById("usericon").style.background = "#ff8906";
  document.getElementById("playuser").style.animation = "ShakeRight 2s ease-in-out 0s 1 normal forwards";
  setTimeout(function() {
    document.getElementById("playbot").style.animation = "";
    document.getElementById("playuser").style.animation = "";
    $("#options_rock").attr("onclick", "UserChoice(this.id)");
    $("#options_paper").attr("onclick", "UserChoice(this.id)");
    $("#options_scissor").attr("onclick", "UserChoice(this.id)");
    document.getElementById("tell_winner").style.visibility = "visible";
    if (document.getElementById("boticon").innerHTML == "paper") {
        document.getElementById("boticon").style.background = "url('paper.png')";
        document.getElementById("boticon").style.backgroundSize = "cover";
    }
    else if (document.getElementById("boticon").innerHTML == "rock") {
        document.getElementById("boticon").style.background = "url('stone.png')";
        document.getElementById("boticon").style.backgroundSize = "cover";
    }
    else if (document.getElementById("boticon").innerHTML == "scissor") {
        document.getElementById("boticon").style.background = "url('scissor.png')";
        document.getElementById("boticon").style.backgroundSize = "cover";
    }

    if (document.getElementById("usericon").innerHTML == "paper") {
        document.getElementById("usericon").style.background = "url('paper.png')";
        document.getElementById("usericon").style.backgroundSize = "cover";
    }
    else if (document.getElementById("usericon").innerHTML == "rock") {
        document.getElementById("usericon").style.background = "url('stone.png')";
        document.getElementById("usericon").style.backgroundSize = "cover";
    }
    else if (document.getElementById("usericon").innerHTML == "scissor") {
        document.getElementById("usericon").style.background = "url('scissor.png')";
        document.getElementById("usericon").style.backgroundSize = "cover";
    }
  }, 2000);
}
