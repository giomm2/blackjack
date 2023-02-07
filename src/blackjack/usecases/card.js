  /**
  * Return a random card
  * @param {array<string>} deck 
  * @returns {string} return a card(string)
  */
  export const pickCard = (deck) => {
    if( !deck || deck.length === 0 ) throw new ('Deck cant be null or empty');
    
    let random = Math.floor(Math.random() * deck.length);
    return deck.splice(random,1)[0];  
}

/**
  * Return the value of the card
  * @param {string} card 
  * @returns {number} return the card value
  */
export const cardValue = (card) => {
    
  if(!card) throw new('Card cant be empty or null');
    const value = card.substring(0, card.length - 1);  
    return  ( isNaN(value) ) ? 
            ( value === 'A' ) ? 11 : 10
        :     value * 1;     
}

/**
 * Generate the card HTML
 * @param {number} card 
 * @param {number} turn 
 */
export const printCard = (card, turn, divCardsPlayers) =>{
  const imgCard = document.createElement('img');
  imgCard.src = `assets/cards/${card}.png`;
  imgCard.classList.add('cards')
  divCardsPlayers[turn].append(imgCard);
}
