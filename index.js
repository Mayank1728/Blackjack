let sum = 0
let cards = []
const displaySum = document.getElementById("sum")
const message = document.getElementById("message")
const displayCards = document.getElementById("cardsValue")
const startbtn = document.getElementById("start")
const addCardBtn = document.getElementById("newCard")

startbtn.addEventListener("click", function() {
    cards = []
    cards.push(randomCard(), randomCard())
    displayCardsValue()   
    sumOfCards()
    checkBlackJack()
    
})

addCardBtn.addEventListener("click", function() {
    // you can add a new card only when sum is less than 21
    if (sum < 21)
    {
        cards.push(randomCard())
        displayCardsValue()
        sumOfCards()
        checkBlackJack()
    }
})

function randomCard() {
    return Math.floor((Math.random() * 13) + 1)
    // will return an integer in [1,13]
}

function displayCardsValue() {
    displayCards.textContent = ""
    for(let i = 0; i < cards.length; i++) {
        displayCards.textContent += `${cards[i]} `
    }
    
}

function sumOfCards() {
    sum = 0
    for(let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }
    displaySum.textContent = sum
}

function checkBlackJack() {
    if (sum < 21) {
        message.textContent = `Draw a new Card`
    } else if (sum === 21) {
        message.textContent = `Yes! Blackjack :)`
    } else {
        message.textContent = `You lost!! Start new game`
        cards = []
        sum = 0
    }
}

