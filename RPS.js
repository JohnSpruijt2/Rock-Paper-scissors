var playerchoice = "none"
var firstpage = document.getElementById("firstpage")
var winResult = "none"
firstpage.style.display = "block"

function reset() {
    playerchoice = "none"
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn1").style.backgroundColor = ""
    document.getElementById("btn1").style.color = "black"

    document.getElementById("btn2").disabled = false;
    document.getElementById("btn2").style.backgroundColor = ""
    document.getElementById("btn2").style.color = "black"

    document.getElementById("btn3").disabled = false;
    document.getElementById("btn3").style.backgroundColor = ""
    document.getElementById("btn3").style.color = "black"

    document.getElementById("warning").style.display = "none"
}

function rock() {
    reset()
    playerchoice = "rock"
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.backgroundColor = " rgb(48, 48, 48)"
    document.getElementById("btn1").style.color = "white"
}
function paper() {
    reset()
    playerchoice = "paper"
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.backgroundColor = " rgb(48, 48, 48)"
    document.getElementById("btn2").style.color = "white"
}
function scissors() {
    reset()
    playerchoice = "scissors"
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.backgroundColor = " rgb(48, 48, 48)"
    document.getElementById("btn3").style.color = "white"
}
function submit() {
    if (playerchoice == "none") {
        document.getElementById("warning").style.display = "block"
    }
    else {
        result(playerchoice)
        playerchoice = "none"
        reset()
    }
}

function hide() {
    if (document.getElementById("firstpage").style.display == "block") {
        document.getElementById("firstpage").style.display = "none"
        document.getElementById("resultpage").style.display = "block"
    }
    else {
        document.getElementById("firstpage").style.display = "block"
    document.getElementById("resultpage").style.display = "none"
    }
}

function result(type) {
    hide()
    if (type == "rock") {
        var type2 = "scissors"
        var type3 = "paper"
    }
    else if (type == "paper") {
        var type2 = "rock"
        var type3 = "scissors"
    }
    else if (type == "scissors") {
        var type2 = "paper"
        var type3 = "rock"
    }
    document.getElementById("resultSubTitle").innerHTML = "You chose " + type
    var computer = Math.floor((Math.random() * 3) + 1);
    if (computer == 1) {
        document.getElementById("resultTitle").innerHTML = "You won!"
        document.getElementById("resultImg1").src = "img/"+type+".png"
        document.getElementById("resultImg2").src = "img/broken"+type2+"2.png"
    }
    else if (computer == 2) {
        document.getElementById("resultTitle").innerHTML = "You tied"
        document.getElementById("resultImg1").src = "img/broken"+type+".png"
        document.getElementById("resultImg2").src = "img/broken"+type+"2.png"
    }
    else if (computer == 3) {
        document.getElementById("resultTitle").innerHTML = "You lost!"
        document.getElementById("resultImg1").src = "img/broken"+type+".png"
        document.getElementById("resultImg2").src = "img/"+type3+"2.png"
    }
}