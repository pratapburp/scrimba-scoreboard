let homeScore = document.getElementById ("home-score")
let awayScore = document.getElementById("away-score")
let aCount = 0
let hCount = 0

function hPlusOne() {
    hCount += 1
    homeScore.textContent = hCount
}

function hPlusTwo() {
    hCount += 2
    homeScore.textContent = hCount
}

function hPlusThree() {
    hCount += 3
    homeScore.textContent = hCount
}

function hPenalty() {
    hCount -= 1
    homeScore.textContent = hCount
}

function aPlusOne() {
    aCount += 1
    awayScore.textContent = aCount
}

function aPlusTwo() {
    aCount += 2
    awayScore.textContent = aCount
}

function aPlusThree() {
    aCount += 3
    awayScore.textContent = aCount
}

function aPenalty() {
    aCount -= 1
    awayScore.textContent = aCount
}

function newGame() {
    aCount = 0
    hCount = 0
    homeScore.textContent = hCount
    awayScore.textContent = aCount
}