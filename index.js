let homeScore = document.getElementById ("home-score")
let awayScore = document.getElementById("away-score")
let count = 0

function hPlusOne() {
    count += 1
    homeScore.textContent = count
}

function hPlusTwo() {
    count += 2
    homeScore.textContent = count
}

function hPlusThree() {
    count += 3
    homeScore.textContent = count
}

function hPenalty() {
    count -= 1
    homeScore.textContent = count
}

function aPlusOne() {
    count += 1
    awayScore.textContent = count
}

function aPlusTwo() {
    count += 2
    awayScore.textContent = count
}

function aPlusThree() {
    count += 3
    awayScore.textContent = count
}

function aPenalty() {
    count -= 1
    awayScore.textContent = count
}

function newGame() {
    count = 0
    homeScore.textContent = count
    awayScore.textContent = count
}