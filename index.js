// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts)

let messageRecipients = []

function writeCards(messageRecipients, occasion) {
    let name = "";
    let notesList = [];
    for (let i = 0; i < messageRecipients.length; i++) {
        name = messageRecipients[i];
        let thanksNote = `Thank you, ${name}, for the wonderful ${occasion} gift!`;
        notesList.push(thanksNote);
    }
    return notesList;
}

function countDown(n) {
    while(n >= 0) {
        console.log(n)
        n -=1
    }
}