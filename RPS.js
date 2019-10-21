function hidestuff() {
    var hidegoback = document.getElementById('goBack')
    var hideoptions = document.getElementById('firstpage')
    var prockwin = document.getElementById('playerrockwin') //variables to show and hide results
    var procktie = document.getElementById('playerrocktie')
    var procklose = document.getElementById('playerrocklose')
    var ppaperwin = document.getElementById('playerpaperwin')
    var ppapertie = document.getElementById('playerpapertie')
    var ppaperlose = document.getElementById('playerpaperlose')
    var pscissorswin = document.getElementById('playerscissorswin')
    var pscissorstie = document.getElementById('playerscissorstie')
    var pscissorslose = document.getElementById('playerscissorslose')

    prockwin.style.display = "none" //hides results
    procktie.style.display = "none"
    procklose.style.display = "none"
    ppaperwin.style.display = "none"
    ppapertie.style.display = "none"
    ppaperlose.style.display = "none"
    pscissorswin.style.display = "none"
    pscissorstie.style.display = "none"
    pscissorslose.style.display = "none"
    if (hideoptions.style.display == "none") { //resets page
        hidegoback.style.display = "none"
        hideoptions.style.display = "block"
    }
    else {
        hidegoback.style.display = "block"
        hideoptions.style.display = "none"
    }
}

function rps() {
    var playerOutput = document.querySelector('input[name="playerInput"]:checked').value; //requests the answer the player inserts
    var computerInput = Math.floor(Math.random() * (4 - 1) + 1) //random number generator
    var prockwin = document.getElementById('playerrockwin') //variables to show and hide results
    var procktie = document.getElementById('playerrocktie')
    var procklose = document.getElementById('playerrocklose')
    var ppaperwin = document.getElementById('playerpaperwin')
    var ppapertie = document.getElementById('playerpapertie')
    var ppaperlose = document.getElementById('playerpaperlose')
    var pscissorswin = document.getElementById('playerscissorswin')
    var pscissorstie = document.getElementById('playerscissorstie')
    var pscissorslose = document.getElementById('playerscissorslose')
    if (playerOutput == "rock") {
        hidestuff()
        if (computerInput == 1) {
            prockwin.style.display = "block"
        }
        else if (computerInput == 2) {
            procktie.style.display = "block"
        }
        else if (computerInput == 3) {
            procklose.style.display = "block"
        }
    }
    else if (playerOutput == "paper") {
        hidestuff()
        if (computerInput == 1) {
            ppaperwin.style.display = "block"
        }
        else if (computerInput == 2) {
            ppapertie.style.display = "block"
        }
        else if (computerInput == 3) {
            ppaperlose.style.display = "block"
        }
    }
    else if (playerOutput == "scissors") {
        hidestuff()
        if (computerInput == 1) {
            pscissorswin.style.display = "block"
        }
        else if (computerInput == 2) {
            pscissorstie.style.display = "block"
        }
        else if (computerInput == 3) {
            pscissorslose.style.display = "block"
        }
    }
}