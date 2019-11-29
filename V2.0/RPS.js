var playerchoice = "none"

function rock() {
    playerchoice = "rock"
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.backgroundColor = "darkred"

    document.getElementById("btn2").disabled = false;
    document.getElementById("btn2").style.backgroundColor = ""

    document.getElementById("btn3").disabled = false;
    document.getElementById("btn3").style.backgroundColor = ""

    document.getElementById("warning").style.display = "none"
}
function paper() {
    playerchoice = "paper"
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.backgroundColor = "darkred"

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn1").style.backgroundColor = ""

    document.getElementById("btn3").disabled = false;
    document.getElementById("btn3").style.backgroundColor = ""
    
    document.getElementById("warning").style.display = "none"
}
function scissors() {
    playerchoice = "scissors"
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.backgroundColor = "darkred"
    
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn1").style.backgroundColor = ""

    document.getElementById("btn2").disabled = false;
    document.getElementById("btn2").style.backgroundColor = ""
    
    document.getElementById("warning").style.display = "none"
}
function submit() {
    if (playerchoice == "none") {
        document.getElementById("warning").style.display = "block"
    }
    else if (playerchoice == "rock") {
        playerRock()
    }
    else if (playerchoice == "paper") {
        playerPaper()
    }
    else if (playerchoice == "scissors") {
        playerScissors()
    }
}