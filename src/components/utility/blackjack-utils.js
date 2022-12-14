export function CreateDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

export function ShuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

export function randomCard() {
    const newDeck = new CreateDeck();
    //shuffle the deck
    const shuffledDeck = new ShuffleDeck(newDeck);
    return shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)];
}

export function CheckTotal(hand) {
    let total = 0;


    for (let i = 0; i < hand.length; i++) {
        if (hand[i].value === 'A') {
            if (hand[i].value + 11 > 21) {
                hand[i].value = 1;
            } else {
                hand[i].value = 11;
            }
        }
        if (hand[i].value === 'J' || hand[i].value === 'Q' || hand[i].value === 'K') {
            hand[i].value = 10;
        } else {
            hand[i].value = parseInt(hand[i].value);

        }
        total += hand[i].value;
    }
    return total;
}

export function ranIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}