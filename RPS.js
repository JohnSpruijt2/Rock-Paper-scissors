function hidestuff() {
    var hidegoback = document.getElementById('goBack')
    var hideoptions = document.getElementById('firstpage')
    if (hideoptions.style.display == "none") {
        hidegoback.style.display = "none"
        hideoptions.style.display = "block"
    }
    else {
        hidegoback.style.display = "block"
        hideoptions.style.display = "none"
    }
}

function rps() {
    var playerOutput = document.querySelector('input[name="playerInput"]:checked').value;
    var computerInput = Math.floor(Math.random() * (4 - 1) + 1)
    if (playerOutput == "rock") {
        hidestuff()
        if (computerInput == 1) {
            alert("You won!")
        }
        else if (computerInput == 2) {
            alert("You tied!")
        }
        else if (computerInput == 3) {
            alert("You lost!")
        }
    }
    else if (playerOutput == "paper") {
        hidestuff()
        if (computerInput == 1) {
            alert("You won!")
        }
        else if (computerInput == 2) {
            alert("You tied!")
        }
        else if (computerInput == 3) {
            alert("You lost!")
        }
    }
    else if (playerOutput == "scissors") {
        hidestuff()
        if (computerInput == 1) {
            alert("You won!")
        }
        else if (computerInput == 2) {
            alert("You tied!")
        }
        else if (computerInput == 3) {
            alert("You lost!")
        }
    }
}