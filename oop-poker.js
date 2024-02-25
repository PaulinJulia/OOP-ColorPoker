class Deck {
  //Constructor
  constructor(cardDeck) {
    this.cardDeck = cardDeck;
    this.cards = [];
  }

  //Methods
  addCard(card) {
    this.cards.push(card);
  }

  displayCardDeck() {
    return `Deck: ${this.cards.join(", ")}`;
  }
}

class Card {
  constructor(name, color, number) {
    this.name = name;
    this.color = color;
    this.number = number;
  }

  addColor(color) {
    this.color.push(color);
  }

  displayCard() {
    return `Card: ${this.name} ${this.color} ${this.number}`;
  }
}

//Create new object
const myDeck = new Deck("The deck");
const card1 = new Card("Diamond", "red", 2);
myDeck.addCard(card1);
const card2 = new Card("Heart", "red", 2);
myDeck.addCard(card2);
const card3 = new Card("Club", "black", 2);
myDeck.addCard(card3);
const card4 = new Card("Spade", "black", 2);
myDeck.addCard(card4);

const card5 = new Card("Diamond", "red", 3);
myDeck.addCard(card5);
const card6 = new Card("Heart", "red", 3);
myDeck.addCard(card6);
const card7 = new Card("Club", "black", 3);
myDeck.addCard(card7);
const card8 = new Card("Spade", "black", 3);
myDeck.addCard(card8);

const card9 = new Card("Diamond", "red", 4);
myDeck.addCard(card9);
const card10 = new Card("Heart", "red", 4);
myDeck.addCard(card10);
const card11 = new Card("Club", "black", 4);
myDeck.addCard(card11);
const card12 = new Card("Spade", "black", 4);
myDeck.addCard(card12);

const card13 = new Card("Diamond", "red", 5);
myDeck.addCard(card13);
const card14 = new Card("Heart", "red", 5);
myDeck.addCard(card14);
const card15 = new Card("Club", "black", 5);
myDeck.addCard(card15);
const card16 = new Card("Spade", "black", 5);
myDeck.addCard(card16);

const card17 = new Card("Diamond", "red", 6);
myDeck.addCard(card17);
const card18 = new Card("Heart", "red", 6);
myDeck.addCard(card18);
const card19 = new Card("Club", "black", 6);
myDeck.addCard(card19);
const card20 = new Card("Spade", "black", 6);
myDeck.addCard(card20);

const card21 = new Card("Diamond", "red", 7);
myDeck.addCard(card21);
const card22 = new Card("Heart", "red", 7);
myDeck.addCard(card22);
const card23 = new Card("Club", "black", 7);
myDeck.addCard(card23);
const card24 = new Card("Spade", "black", 7);
myDeck.addCard(card24);

const card25 = new Card("Diamond", "red", 8);
myDeck.addCard(card25);
const card26 = new Card("Heart", "red", 8);
myDeck.addCard(card26);
const card27 = new Card("Club", "black", 8);
myDeck.addCard(card27);
const card28 = new Card("Spade", "black", 8);
myDeck.addCard(card28);

const card29 = new Card("Diamond", "red", 9);
myDeck.addCard(card29);
const card30 = new Card("Heart", "red", 9);
myDeck.addCard(card30);
const card31 = new Card("Club", "black", 9);
myDeck.addCard(card31);
const card32 = new Card("Spade", "black", 9);
myDeck.addCard(card32);

const card33 = new Card("Diamond", "red", 10);
myDeck.addCard(card33);
const card34 = new Card("Heart", "red", 10);
myDeck.addCard(card34);
const card35 = new Card("Club", "black", 10);
myDeck.addCard(card35);
const card36 = new Card("Spade", "black", 10);
myDeck.addCard(card36);

const card37 = new Card("Diamond,Jack", "red", 11);
myDeck.addCard(card37);
const card38 = new Card("Heart,Jack", "red", 11);
myDeck.addCard(card38);
const card39 = new Card("Club,Jack", "black", 11);
myDeck.addCard(card39);
const card40 = new Card("Spade,Jack", "black", 11);
myDeck.addCard(card40);

const card41 = new Card("Diamond,Queen", "red", 12);
myDeck.addCard(card41);
const card42 = new Card("Heart,Queen", "red", 12);
myDeck.addCard(card42);
const card43 = new Card("Club,Queen", "black", 12);
myDeck.addCard(card43);
const card44 = new Card("Spade,Queen", "black", 12);
myDeck.addCard(card44);

const card45 = new Card("Diamond,King", "red", 13);
myDeck.addCard(card45);
const card46 = new Card("Heart,King", "red", 13);
myDeck.addCard(card46);
const card47 = new Card("Club,King", "black", 13);
myDeck.addCard(card47);
const card48 = new Card("Spade,King", "black", 13);
myDeck.addCard(card48);

const card49 = new Card("Diamond,Ace", "red", 14);
myDeck.addCard(card49);
const card50 = new Card("Heart,Ace", "red", 14);
myDeck.addCard(card50);
const card51 = new Card("Club,Ace", "black", 14);
myDeck.addCard(card51);
const card52 = new Card("Spade,Ace", "black", 14);
myDeck.addCard(card52);
//console.log(myDeck);

//Shuffles the card deck------------------------------------------------
const shuffle = (deck) => {
  return deck
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
const shuffledDeck = shuffle(myDeck.cards);

//---------------------------------------------------------------------------

class Player {
  //Constructor
  constructor(name) {
    this.name = name;
    this.cards = [];
  }
  //Methods
  addCards(card) {
    this.cards.push(card);
  }
  removeCardAtIndex(index) {
    if (index >= 0 && index < this.cards.length) {
      this.cards.splice(index, 1);
      console.log(`Kort borttaget från index ${index}`);
    } else {
      console.log(`Ogiltig indexplats: ${index}`);
    }
  }

  displayPlayer() {
    return `Player: ${this.name} ${this.cards}`;
  }
}

let player1 = new Player("Slim");
let player2 = new Player("Luke");

// Deal cards to player------------------------------------------
const dealCards = (deck, player, numberCards) => {
  const dealed = deck
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, numberCards);

  dealed.forEach((card) => {
    player.addCards(card);
  });

  let newDeck = deck;

  dealed.forEach((dealedCard) => {
    newDeck = newDeck.filter((deckCard) => deckCard !== dealedCard);
  });
  return newDeck;
};

const leftOfDeck = dealCards(myDeck.cards, player1, 5);
//console.log(player1);
//console.log(leftOfDeck);

const leftOfdealedTwo = dealCards(leftOfDeck, player2, 5);
//console.log(player2);
//console.log(leftOfdealedTwo);

//Count total amount on hands-------------------------------------------------------
const countCardsAmount = (player1, player2) => {
  const totalHandValue = [...player1.cards, ...player2.cards];
  console.log(totalHandValue);

  const total = totalHandValue.reduce((acc, item) => {
    const cardValue = parseInt(item.number) || 0;
    return acc + cardValue;
  }, 0);
  return total;
};

//console.log(countCardsAmount(player1, player2));

//Throw two cards----------------------------------------------------
const playerHand = (hand, num) => {
  return (leftOfCards = hand.splice(0, num));
};

const throwTwoCardsPlayer1 = playerHand(player1.cards, 2);
const throwTwoCardsPlayer2 = playerHand(player2.cards, 2);
//console.log(player1);
//console.log(player2);

//Deal two new cards----------------------------------------------------------

const deckTwoNewCards1 = dealCards(leftOfdealedTwo, player1, 2);
//console.log(player1);
//console.log(deckTwoNewCards1);

const deckTwoNewCards2 = dealCards(deckTwoNewCards1, player2, 2);
//console.log(player2);
//console.log(deckTwoNewCards2);

//Total sum of all cards on hand - round two-------------------------------------------------
//console.log(countCardsAmount(player1, player2));

//Throw all cards------------------------------------------------------------------
const throwAllCardsPlayer1 = [...player1.cards, ...deckTwoNewCards2];
const throwAllCardsPlayer2 = [...player2.cards, ...throwAllCardsPlayer1];
const completeDeck = [
  ...throwAllCardsPlayer2,
  ...throwTwoCardsPlayer2,
  ...throwTwoCardsPlayer1,
];

//console.log(shuffle(completeDeck));
const player1EmptyHand = playerHand(player1.cards, 5);
const player2EmptyHand = playerHand(player2.cards, 5);
//console.log(player1);
//console.log(player2);

// Dealer-------------------------------------------------------------------------
class Dealer {
  constructor(newdeck) {
    this.newdeck = newdeck;
  }
}

const myDealer = new Dealer(myDeck);
//console.log(myDealer);
const dealerShuffledDeck = shuffle(myDealer.newdeck.cards);
//console.log(dealerShuffledDeck);

const dealerDealCardsPlayer1 = dealCards(leftOfdealedTwo, player1, 5);
//console.log(player1);
const dealerDealCardsPlayer2 = dealCards(leftOfdealedTwo, player2, 5);
//console.log(player2);

// Validation med Static---------------------------------------------------------------------
class Validation {
  constructor() {
    this.players = [];
  }
  newPlayer(player) {
    this.players.push(player);
  }

  static checkValid(player) {
    const handValue = player.reduce((acc, item) => acc + item.number, 0);
    return handValue;
  }
}

const validationList = new Validation();
validationList.newPlayer(player1);
validationList.newPlayer(player2);
//console.log(validationList);
/* console.log(
  `Validation: Slim: ${Validation.checkValid(player1.cards)}`,
  `Luke: ${Validation.checkValid(player2.cards)}`
); */

//--------------------------------------------------------------------------

/* class Game {
  constructor() {
    this.players = [];
    this.dealer = myDeck;
  }

  addPlayers() {
    const numberOfPlayers = parseInt(prompt("Ange antalet spelare:", 2));
    if (isNaN(numberOfPlayers) || numberOfPlayers < 2) {
      console.log("Ogiltigt antal spelare. Minst två spelare.");
    } else
      for (let i = 1; i <= numberOfPlayers; i++) {
        const playerName = prompt(`Ange namn för spelare ${i}:`);
        let newPlayer = new Player(playerName);
        this.addPlayer(newPlayer);
      }
  }

  addPlayer(player) {
    this.players.push(player);
  }

  startGame() {
    this.addPlayers();
    let updatedDeck = this.dealer.cards;
    for (let i = 0; i < this.players.length; i++) {
      updatedDeck = dealCards(updatedDeck, this.players[i], 5);
      console.log(updatedDeck);
    }

    const allValidations = [];
    let currentLeader = 10000;
    let leaderSum = 0;
    for (let i = 0; i < this.players.length; i++) {
      allValidations.push(Validation.checkValid(this.players[i].cards));
      if (allValidations[i] > leaderSum) {
        currentLeader = i;
        leaderSum = allValidations[i];
      }
      console.log(allValidations[i]);
      console.log(`Validation: ${this.players[i].name} ${allValidations[i]}`);
    }
    console.log(`Winner is: ${this.players[currentLeader].name} ${leaderSum}`);
  }
}

const newGame = new Game();
newGame.startGame(); */

//--------------------------------------------------------------------------

class Game {
  constructor() {
    this.players = [];
    this.dealer = myDeck;
  }

  addPlayers() {
    const numberOfPlayers = parseInt(prompt("Ange antalet spelare:", 2));
    if (isNaN(numberOfPlayers) || numberOfPlayers < 2) {
      console.log("Ogiltigt antal spelare. Minst två spelare.");
    } else
      for (let i = 1; i <= numberOfPlayers; i++) {
        const playerName = prompt(`Ange namn för spelare ${i}:`);
        let newPlayer = new Player(playerName);
        this.addPlayer(newPlayer);
      }
  }

  addPlayer(player) {
    this.players.push(player);
  }

  startGame() {
    const ul = document.querySelector(".cards");
    const numberOfRounds = parseInt(
      prompt("Hur många rundor du vill spela:", 2)
    );
    for (let i = 0; i < numberOfRounds; i++) {
      console.log(`Runda ${i + 1}`);
      this.addPlayers();
      let updatedDeck = this.dealer.cards;
      for (let i = 0; i < this.players.length; i++) {
        updatedDeck = dealCards(updatedDeck, this.players[i], 5);
        //console.log(updatedDeck);
        // console.log(this.players[i]);
        const html = this.players
          .map(
            (item, index) =>
              `<li id="player" player-index="${index}">PLAYER: ${
                item.name
              } ${item.cards
                .map(
                  (item, index) =>
                    `<li id="remove-card" card-index="${index}">${item.name} ${item.color} ${item.number}</li>`
                )
                .join(" ")}</li>`
          )
          .join("");
        ul.innerHTML = html;
        console.log(this.players[i]);
      }
      ul.addEventListener("click", (event) => {
        if (event.target.id === "player") {
          const playerIndex = event.target.getAttribute("player-index");
          console.log(
            `Klickat på spelare ${playerIndex} under runda ${round + 1}`
          );
          this.players[playerIndex].removeCardAtIndex();
        }
      });

      /*     ul.addEventListener("click", (event) => {
      if (event.target.id === "remove-card") {
        const cardIndex = event.target.getAttribute("card-index");
        console.log(`Klickat på kort ${cardIndex} för spelare ${playerIndex} under runda ${round + 1}`);
        this.players[playerIndex].removeCardAtIndex(cardIndex);
      }
    }); */

      const allValidations = [];
      let currentLeader = 10000;
      let leaderSum = 0;
      for (let i = 0; i < this.players.length; i++) {
        allValidations.push(Validation.checkValid(this.players[i].cards));
        if (allValidations[i] > leaderSum) {
          currentLeader = i;
          leaderSum = allValidations[i];
        }
        console.log(allValidations[i]);
        console.log(`Validation: ${this.players[i].name} ${allValidations[i]}`);
      }
      console.log(
        `Winner is: ${this.players[currentLeader].name} ${leaderSum}`
      );
    }
  }
}

const newGame = new Game();
newGame.startGame();
