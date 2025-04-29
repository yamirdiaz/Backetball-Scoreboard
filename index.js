let scoreHomeOutput = document.getElementById("score-home")
let scoreGuestOutput = document.getElementById("score-guest")
let titleHome = document.getElementById("title-home")
let titleGuest = document.getElementById("title-guest")

let scoreHome = 0
let scoreGuest = 0
scoreGuestOutput.textContent = scoreGuest
scoreHomeOutput.textContent = scoreHome

function plusOneHome() {
    scoreHome += 1
    scoreHomeOutput.textContent = scoreHome
    highlightWinner()
}

function plusTwoHome() {
    scoreHome += 2
    scoreHomeOutput.textContent = scoreHome
    highlightWinner()
}

function plusThreeHome() {
    scoreHome += 3
    scoreHomeOutput.textContent = scoreHome
    highlightWinner()
}


function plusOneGuest() {
    scoreGuest += 1
    scoreGuestOutput.textContent = scoreGuest
    highlightWinner()
}

function plusTwoGuest() {
    scoreGuest += 2
    scoreGuestOutput.textContent = scoreGuest
    highlightWinner()
}

function plusThreeGuest() {
    scoreGuest += 3
    scoreGuestOutput.textContent = scoreGuest
    highlightWinner()
}

function highlightWinner() {
    if(scoreHome > scoreGuest) {
        scoreHomeOutput.style.color = "darkgreen"
        scoreGuestOutput.style.color = "#F94F6D"
    } else if (scoreHome == scoreGuest) {
        scoreHomeOutput.style.color = "#F94F6D"
        scoreGuestOutput.style.color = "#F94F6D"
    } else {
         scoreHomeOutput.style.color = "#F94F6D"
        scoreGuestOutput.style.color = "darkgreen"
    }
}