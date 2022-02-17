let cards = []
let sum = 0

const displaySum = document.getElementById("total")
const comment = document.getElementById("comment")
const displayValue = document.getElementById("cardsValue")

function getCard() {
    return Math.floor((Math.random() * 13) + 1)
}

document.getElementById("start").addEventListener("click", function() {
    cards = []
    cards.push(getCard(), getCard())
    displayContent()   
    sumOfCards()
    checkBlackjack()
    
})

function checkBlackjack() {
    if (sum === 21) {
        comment.textContent = `Yes! Blackjack :)`
    } else if (sum < 21) {
        comment.textContent = `Draw a new Card :|`
    } else {
        comment.textContent = `You lost!! Start new game`
        cards = []
        sum = 0
    }
}

function sumOfCards() {
    sum = 0
    for(let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }
    displaySum.textContent = sum
}
function displayContent() {
    displayValue.textContent = ""
    for(let i = 0; i < cards.length; i++) {
        displayValue.textContent += `${cards[i]} `
    }

}


document.getElementById("newCard").addEventListener("click", function() {
    if (sum < 21)
    {
        cards.push(getCard())
        sumOfCards()
        displayContent()
        checkBlackjack()
    }


})
