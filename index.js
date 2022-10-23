let start = document.getElementById("start")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let new_card = document.getElementById("new-card")
let cards = []
sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// get random number for the cards
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// start game
start.addEventListener("click", startGame)
function startGame() {
    isAlive = true
    let firstCard = getRandomNumber() 
    let secondCard = getRandomNumber()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
   
    renderGame()
}

function renderGame() {
    // renders the sum
    sumEl.textContent += " " + sum;
    // renders all cards
    cardEl.textContent += " " + " " ;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        cardEl.textContent += card + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        
    } else if (sum === 21) {
    message = "You've Got Black Jack!"
    hasBlackJack = true
    } else if (sum > 21){
        message = "You're out of the game!"
        isAlive = false
    }
messageEl.textContent = message

}

// GENERATE NEW CARD
new_card.addEventListener("click", newCard)

function newCard() {
   
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
        sum += card
        cards.push(card)
    }  else {
        window.alert("You're out of the game")
    }
    renderGame()
}

// window.onload = () => {
//     document.querySelectorAll("#container-c6e055657cafa4c1df190b1d80d19db9").click()
// }